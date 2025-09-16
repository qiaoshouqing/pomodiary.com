import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'pomodiary.com Privacy Policy',
}

const privacyContent = `
# Privacy Policy

Last updated: August 15, 2025

## Introduction

Welcome to pomodiary.com (referred to as "we," "us," or "the website"). This Privacy Policy explains how we collect, use, store, and protect your personal information.

## Information Collection

### Types of Information We Collect

- **Account Information**: When you register an account, we may collect basic information such as your username and email address
- **Usage Data**: Data generated when you use our services, such as productivity records and task data
- **Technical Information**: Device information, IP address, browser type, operating system, etc.
- **Cookies and Tracking Technologies**: Technical information used to improve user experience

### How We Collect Information

- Information you actively provide (such as registration, form submissions)
- Automatically collected information (such as through analytics tools)
- Information provided by third-party services (such as social login)

## Information Use

We use the collected information for:

- Providing and maintaining services
- Improving user experience
- Sending important notifications and updates
- Analyzing usage patterns to optimize services
- Preventing fraud and abuse
- Complying with legal obligations

## Information Sharing

We do not sell your personal information. We may share information in the following circumstances:

- **Service Providers**: With third-party vendors who help us operate our services
- **Legal Requirements**: When required by law or to protect rights
- **Business Transfers**: During mergers, acquisitions, or asset transfers
- **With Consent**: In other circumstances with your explicit consent

## Data Security

We implement reasonable technical and organizational measures to protect your personal information:

- Data encryption during transmission and storage
- Access control and permission management
- Regular security reviews and updates
- Employee privacy training

## Your Rights

Under applicable law, you may have the following rights:

- **Access Right**: View information we hold about you
- **Correction Right**: Request correction of inaccurate information
- **Deletion Right**: Request deletion of your personal information
- **Processing Restriction Right**: Limit how we process your information
- **Data Portability Right**: Receive your data in a structured format
- **Objection Right**: Object to certain types of data processing

## Cookie Policy

We use cookies and similar technologies to:

- Remember your preferences and settings
- Analyze website usage
- Provide personalized content
- Improve website performance

You can manage cookie preferences through your browser settings.

## Third-Party Services

Our services may include links to third-party services that have their own privacy policies:

- Authentication services (such as Clerk)
- Analytics services (such as Vercel Analytics)
- Other integrated services

## Data Retention

We retain your personal information only for as long as necessary:

- Account data: During account lifetime
- Usage data: Generally no more than 2 years
- Technical logs: Generally no more than 1 year

## International Data Transfers

Your data may be transferred to locations outside your country/region for processing. We ensure such transfers comply with applicable data protection laws.

## Children's Privacy

Our services are not directed to children under 13. If we discover we have collected personal information from children under 13, we will delete it immediately.

## Privacy Policy Updates

We may update this Privacy Policy from time to time. For significant changes, we will notify you through appropriate means.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us:

- Email: hi@pomodiary.com

This Privacy Policy is governed by and construed in accordance with the laws of the United States.
`

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Last updated: August 15, 2025
        </p>
      </div>
      <div className="prose prose-zinc mx-auto dark:prose-invert lg:prose-lg prose-p:my-3 prose-li:my-1 prose-headings:mb-4 prose-headings:mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {privacyContent.replace('# Privacy Policy\n\nLast updated: August 15, 2025\n\n', '')}
        </ReactMarkdown>
      </div>
    </div>
  )
}