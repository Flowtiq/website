import { Client } from '@microsoft/microsoft-graph-client';
import * as msal from '@azure/msal-node';
import 'isomorphic-fetch';
import dotenv from 'dotenv';
import { contactSchema, type ContactInput } from '@flowtiq/shared';

dotenv.config();

const msalConfig = {
    auth: {
        clientId: process.env.AZURE_CLIENT_ID || "f2ac8221-1c00-48c1-ae38-91e350e3b196",
        authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID || "927f2ffc-c2fe-458e-8861-58039d02c3c1"}`,
        clientSecret: process.env.AZURE_CLIENT_SECRET!,
    }
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

async function getAccessToken() {
    const tokenResponse = await cca.acquireTokenByClientCredential({
        scopes: ["https://graph.microsoft.com/.default"],
    });
    return tokenResponse?.accessToken;
}

export async function sendMail(data: ContactInput) {
    // Validate data using shared schema
    const validatedData = contactSchema.parse(data);

    const accessToken = await getAccessToken();
    if (!accessToken) {
        throw new Error('Failed to acquire Azure access token');
    }

    const client = Client.init({
        authProvider: (done) => {
            done(null, accessToken);
        },
    });

    const senderEmail = process.env.SENDER_EMAIL || "oscar@flowtiq.nl";
    const recipients = (process.env.CONTACT_RECEIVER || "oscar@flowtiq.nl, martijn@flowtiq.nl")
        .split(',')
        .map(email => ({
            emailAddress: {
                address: email.trim()
            }
        }));

    const mailContent = {
        message: {
            subject: `Nieuw contactverzoek van ${validatedData.name}`,
            body: {
                contentType: 'HTML',
                content: `
                    <h3>Nieuw contactverzoek</h3>
                    <p><strong>Naam:</strong> ${validatedData.name}</p>
                    <p><strong>Email:</strong> ${validatedData.email}</p>
                    <p><strong>Telefoon:</strong> ${validatedData.phone || 'Niet opgegeven'}</p>
                    <br>
                    <p><strong>Bericht:</strong></p>
                    <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
                `,
            },
            toRecipients: recipients,
            from: {
                emailAddress: {
                    address: senderEmail
                }
            }
        },
    };

    return client.api(`/users/${senderEmail}/sendMail`).post(mailContent);
}
