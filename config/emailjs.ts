/**
 * EmailJS Configuration
 * 
 * To set up EmailJS:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Get your Public Key from Account > API Keys
 * 5. Replace the values below with your actual EmailJS credentials
 */

export const emailjsConfig = {
	// Your EmailJS Public Key (found in Account > API Keys)
	publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "4aJR-VKP4AhmlVB9l",
	
	// Your EmailJS Service ID (found in Email Services)
	serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_6dwvmfe",
	
	// Your EmailJS Template ID (found in Email Templates)
	templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xwmuods",
	
	// Workbook form template ID (can be the same or different)
	workbookTemplateId: process.env.NEXT_PUBLIC_EMAILJS_WORKBOOK_TEMPLATE_ID || "template_xwmuods",
};

/**
 * EmailJS Template Variables
 * 
 * Your EmailJS template should include these variables:
 * - {{name}} - User's full name
 * - {{email}} - User's email address
 * - {{phone}} - User's phone number
 * - {{source}} - Where the form was submitted from (popup/section)
 * - {{timestamp}} - Submission timestamp
 * 
 * Example EmailJS Template:
 * 
 * Subject: New Workbook Download Request
 * 
 * Hello,
 * 
 * You have received a new workbook download request:
 * 
 * Name: {{name}}
 * Email: {{email}}
 * Phone: {{phone}}
 * Source: {{source}}
 * Submitted: {{timestamp}}
 * 
 * Best regards,
 * Your Website
 */

