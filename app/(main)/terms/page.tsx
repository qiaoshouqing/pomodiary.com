import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'pomodiary.com Terms of Service',
}

const termsContent = `
# Terms of Service

Last updated: August 15, 2025

## Acceptance of Terms

Welcome to pomodiary.com (referred to as "the service," "we," "us," or "the website"). By accessing or using this service, you agree to be bound by these Terms of Service (referred to as "terms").

If you do not agree to these terms, please do not use this service.

## Service Description

pomodiary.com is the official website of POMODIARY LLC, serving as a company portal that provides users with:

- Company product and service information display
- Entry points and introductions to various applications
- Company news and updates
- User support and help documentation
- Other related enterprise service information

## User Accounts

### Account Creation

- You must provide accurate and complete registration information
- You are responsible for maintaining the accuracy of your account information
- You are responsible for protecting the security of your account password
- You may not share your account credentials with others

### Account Responsibility

You are responsible for all activities conducted through your account, including:

- All content posted
- All actions taken

## User Conduct Guidelines

### Prohibited Activities

When using this service, you may not:

- Violate any applicable laws or regulations
- Infringe upon others' intellectual property rights
- Post false, misleading, or fraudulent information
- Post harmful, threatening, harassing, or offensive content
- Distribute malware or conduct cyber attacks
- Interfere with or disrupt the normal operation of the service
- Access others' accounts or data without authorization
- Engage in commercial spam or advertising activities

### Content Guidelines

Content you post should:

- Comply with relevant laws and regulations
- Respect others' rights and privacy
- Be truthful, accurate, and not misleading
- Be relevant to the service's purpose

## Intellectual Property

### Our Rights

All content, features, and services included in this service are the proprietary property of us or our licensors, protected by copyright, trademark, and other intellectual property laws.

### Your Rights

You retain all rights to content you create. By using this service, you grant us:

- Rights to store, process, and display your content
- Technical reproduction rights necessary to provide the service
- Rights to share content according to your privacy settings

### User Content License

You grant us a non-exclusive, worldwide, royalty-free license to:

- Use, reproduce, and modify your content to provide the service
- Create derivative works to improve service functionality
- Publicly display and perform content you explicitly set as public

## Privacy Protection

We value your privacy. Please review our [Privacy Policy](/privacy) to understand how we collect, use, and protect your personal information.

## Service Availability

### Service Provision

We strive to maintain service availability but do not guarantee:

- Service is always available or uninterrupted
- Service is completely error-free or defect-free
- Service meets all your needs

### Maintenance and Updates

We may:

- Conduct regular system maintenance
- Update service features and interfaces
- Temporarily interrupt service for improvements

## Service Fees

Currently, all our services are provided free of charge. If we introduce paid services in the future, we will notify you in advance and update relevant terms.

## Service Termination

### Your Termination Rights

You may at any time:

- Stop using the service
- Delete your account
- Request deletion of your data

### Our Termination Rights

We may suspend or terminate your account in the following circumstances:

- Violation of these Terms of Service
- Engaging in fraudulent or illegal activities
- Abusing the service or harming other users
- Long-term inactivity (typically over 2 years)

## Disclaimers

### Service As-Is

This service is provided on an "as is" and "as available" basis, without any express or implied warranties.

### Limitation of Liability

To the maximum extent permitted by law, we are not liable for:

- Service interruptions or data loss
- Third-party actions or content
- Any losses arising from your use of the service
- Indirect, incidental, or consequential damages

## Dispute Resolution

### Governing Law

These terms are governed by the laws of the United States.

### Dispute Resolution Methods

Any disputes should be resolved through:

1. First through friendly negotiation
2. If negotiation fails, through arbitration
3. Finally through courts of competent jurisdiction

## Terms Modification

We may modify these Terms of Service from time to time. For significant modifications:

- We will notify you in advance
- Continued use of the service indicates acceptance of new terms
- If you disagree, you may stop using the service

## Other Terms

### Severability

If any part of these terms is deemed invalid, the remaining parts remain valid.

### Entire Agreement

These terms constitute the complete agreement between you and us regarding the use of the service.

### Language

The English version of these terms is the official version. If there are translated versions, the English version shall prevail.

## Contact Us

If you have any questions about these Terms of Service, please contact us:

- Email: hi@pomodiary.com

Thank you for using pomodiary.com!
`

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Last updated: August 15, 2025
        </p>
      </div>
      <div className="prose prose-zinc mx-auto dark:prose-invert lg:prose-lg prose-p:my-3 prose-li:my-1 prose-headings:mb-4 prose-headings:mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {termsContent.replace('# Terms of Service\n\nLast updated: August 15, 2025\n\n', '')}
        </ReactMarkdown>
      </div>
    </div>
  )
}