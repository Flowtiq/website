import { sendMail } from '../src/mailer.js';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

async function runTest() {
    console.log('\x1b[34m\x1b[1m\n�� FlowTIQ Email Verification System (Microsoft Graph API)\n\x1b[0m');
    console.log('\x1b[90m--------------------------------------------------\x1b[0m');

    try {
        console.log('\x1b[34m\n🚀 Attempting to send test email via Graph API...\x1b[0m');
        
        const startTime = Date.now();
        await sendMail({
            name: 'Enterprise Test System (Graph)',
            email: 'test@flowtiq.nl',
            message: `TEST MESSAGE
Generated at: ${new Date().toISOString()}
System: Node.js ${process.version}
Method: Microsoft Graph API

This is an automated verification of the FlowTIQ Contact Form backend.`,
            phone: '+31 00 0000000'
        });

        const duration = Date.now() - startTime;

        console.log('\x1b[32m\x1b[1m\n✨ Test Successful!\x1b[0m');
        console.log('\x1b[90m--------------------------------------------------\x1b[0m');
        console.log(`Duration: ${duration}ms`);
        console.log('\x1b[90m--------------------------------------------------\x1b[0m');
        
        console.log('\x1b[34m\nPlease verify delivery in Oscar and Martijn\'s mailboxes.\n\x1b[0m');

    } catch (error: any) {
        console.log('\x1b[31m\x1b[1m\n❌ Test Failed!\x1b[0m');
        console.log('\x1b[90m--------------------------------------------------\x1b[0m');
        console.log(`Error: ${error.message}`);
        if (error.response?.data) {
            console.log('Response Error:', JSON.stringify(error.response.data, null, 2));
        }
        console.log('\x1b[90m--------------------------------------------------\x1b[0m');
        process.exit(1);
    }
}

runTest();
