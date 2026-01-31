# 📧 Formspree Setup Guide for KRAFLY Media Contact Form

## Quick Setup (5 Minutes)

Your contact form is ready to send emails directly to **kraflymedia@gmail.com**. You just need to connect it to Formspree!

---

## Step 1: Create Free Formspree Account

1. Go to: **https://formspree.io/**
2. Click "Get Started" or "Sign Up"
3. Sign up with your email (kraflymedia@gmail.com recommended)
4. Verify your email

**Free Plan Includes:**
- ✅ 50 form submissions per month
- ✅ Email notifications to your Gmail
- ✅ Spam filtering
- ✅ File uploads support
- ✅ No credit card required

---

## Step 2: Create Your Form

1. After logging in, click **"+ New Form"**
2. **Form Name**: Enter "KRAFLY Media Contact Form"
3. **Email Address**: Enter **kraflymedia@gmail.com** (where submissions will be sent)
4. Click **"Create Form"**

---

## Step 3: Get Your Form Endpoint

After creating the form, you'll see:

```
https://formspree.io/f/YOUR_FORM_ID
```

**Copy this URL!** This is your form endpoint.

Example: `https://formspree.io/f/xwpeyyzz`

---

## Step 4: Update Your Website

1. Open the file: `/app/frontend/src/components/Contact.jsx`

2. Find this line (around line 68):
   ```javascript
   const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE';
   ```

3. Replace it with your actual endpoint:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpeyyzz';
   ```
   *(Use your actual form ID, not xwpeyyzz)*

4. Save the file

---

## Step 5: Test Your Form

1. Go to your website's contact section
2. Fill out the form with test data
3. Click "Send Message"
4. Check your Gmail inbox (kraflymedia@gmail.com)
5. You should receive an email with the form submission!

---

## What You'll Receive in Gmail

Each submission will include:
- **Name**: Customer's name
- **Email**: Customer's email (you can reply directly)
- **Service**: Which service they're interested in
- **Message**: Their message/inquiry

The subject line will be:
```
New inquiry from [Customer Name] - [Service Type]
```

---

## Email Notification Settings (Optional)

In your Formspree dashboard, you can:
- Add multiple email recipients
- Customize email notifications
- Set up auto-reply messages
- Configure spam filtering
- Download submission data as CSV

---

## Alternative: Use Getform Instead

If you prefer Getform over Formspree:

1. Go to: **https://getform.io/**
2. Sign up for free
3. Create a new form
4. Copy the endpoint URL
5. Update the same line in Contact.jsx

Both services work exactly the same way!

---

## Need Help?

If you encounter any issues:
1. Check that the endpoint URL is correct
2. Verify your email in Formspree dashboard
3. Check browser console for error messages
4. Test with a different browser

---

## 🎉 That's It!

Once configured, your contact form will:
- ✅ Send submissions directly to your Gmail
- ✅ Include all form data
- ✅ Allow you to reply directly to customers
- ✅ Filter spam automatically
- ✅ Work perfectly on mobile and desktop

**Free forever for up to 50 submissions per month!**

If you need more than 50 submissions, Formspree's paid plans start at $10/month for 1000 submissions.
