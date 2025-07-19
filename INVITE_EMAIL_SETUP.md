# Email Setup for VSOLVE Invite Form

## EmailJS Template Configuration

### 1. Create Email Template in EmailJS Dashboard

Use this template content in your EmailJS dashboard:

**Subject:** New VSOLVE Access Request from {{from_name}}

**Email Body:**
```
New VSOLVE Access Request

Name: {{name}}
Email: {{email}}
Referral Origin: {{referral_origin}}

Why Now?
{{why_now}}

Confidentiality Agreement: {{confidentiality_agreement}}

Submitted on: {{submission_date}}

---
This email was automatically generated from the VSOLVE invite system.
```

### 2. Required Environment Variables

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Update Email Recipient

In `app/invite-us/page.tsx`, update this line:
```javascript
to_email: 'admissions@vsolve.com', // Replace with your actual email
```

### 4. Template Variables Available

The form sends these variables to your email template:
- `{{to_email}}` - Your recipient email
- `{{from_name}}` - Applicant's name
- `{{from_email}}` - Applicant's email
- `{{name}}` - Applicant's name (duplicate for flexibility)
- `{{email}}` - Applicant's email (duplicate for flexibility)
- `{{referral_origin}}` - Referral code or source
- `{{why_now}}` - Why now response
- `{{confidentiality_agreement}}` - Agreement status
- `{{submission_date}}` - When submitted
- `{{message}}` - Formatted complete message

### 5. Features Included

✅ **Email Notifications** - Automatic email sent with all form data
✅ **Loading States** - Button shows "Sending..." during submission
✅ **Error Handling** - Graceful handling if email fails to send
✅ **Success Message** - "Thank you for your interest, we will get back to you within 3-5 days"
✅ **Form Validation** - All required fields must be completed
✅ **Confidentiality Agreement** - Required checkbox with detailed terms

### 6. Testing

1. Set up your EmailJS credentials
2. Fill out the form completely
3. Submit and check your email
4. Verify all form data appears correctly in the email

The form will show a success message regardless of email status to provide good user experience, but errors will be logged to the console for debugging. 