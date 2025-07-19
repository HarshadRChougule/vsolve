# EmailJS Setup Guide for VSOLVE Sanctuary Form

This guide will help you set up EmailJS to automatically send VSOLVE Karmic Eligibility Form submissions to your email.

## 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

### Email Template:
```
Subject: New VSOLVE Karmic Eligibility Form Submission

From: {{from_name}}
Date: {{submission_date}}

A new sacred reflection has been submitted for review:

{{form_summary}}

---
This email was automatically generated from the VSOLVE sanctuary system.
```

### Template Variables:
Make sure these variables are available in your template:
- `{{from_name}}`
- `{{submission_date}}`
- `{{form_summary}}`
- `{{to_email}}`

4. Note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. In the EmailJS dashboard, go to **Account**
2. Find your **Public Key** (e.g., `abcdef123456`)

## 5. Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual EmailJS credentials.

## 6. Update Email Recipient

In `app/sanctuary/page.tsx`, update this line:
```javascript
to_email: 'admissions@vsolve.com', // Replace with your actual email
```

## 7. Test the Setup

1. Access the sanctuary form
2. Fill out all questions
3. Submit the form
4. Check your email for the submission

## Features Included

### ✅ Auto-Save
- Form data is automatically saved to localStorage as users type
- Data persists if they close/refresh the browser
- Drafts are restored when they return

### ✅ Email Notifications
- Automatic email sent to your specified address
- Formatted with all form responses
- Includes submission timestamp

### ✅ Error Handling
- Shows success/error messages
- Keeps backup in localStorage if email fails
- Loading states and disabled buttons during submission

### ✅ Privacy & Security
- No backend required - runs entirely on frontend
- Form data only stored locally and sent via email
- No third-party database storage

## Troubleshooting

### Email Not Sending?
1. Check your environment variables are set correctly
2. Verify your EmailJS service is active
3. Check browser console for error messages
4. Make sure your email template has the required variables

### Form Data Lost?
- Check localStorage in browser dev tools
- Look for `vsolve_form_draft` and `vsolve_form_backup` keys

### Service Limits
- EmailJS free tier: 200 emails/month
- For higher volume, upgrade to paid plan

## Alternative Solutions

If EmailJS doesn't work for you, consider:

1. **Formspree** - Similar service with different API
2. **Netlify Forms** - If hosting on Netlify
3. **Vercel Forms** - If hosting on Vercel  
4. **Web3Forms** - Another form handling service

## Support

For EmailJS specific issues, check their [documentation](https://www.emailjs.com/docs/) or contact their support. 