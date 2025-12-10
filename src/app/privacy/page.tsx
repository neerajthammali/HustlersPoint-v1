import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how HustlersPo!nt handles your data and respects your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>Your privacy is important to us. It is HustlersPo!nt's policy to respect your privacy regarding any information we may collect from you across our website.</p>

        <h2>1. Information We Collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <ul>
            <li><strong>Log data:</strong> When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</li>
            <li><strong>Personal Information:</strong> We may ask for personal information, such as your name and email address, when you register for an account, subscribe to our newsletter, or contact us.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to operate and maintain our website, to provide you with the services you've requested, to communicate with you, and to improve your experience on our site. We do not share your personally identifying information with third-parties, except where required by law.</p>
        
        <h2>3. Cookies</h2>
        <p>We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</p>

        <h2>4. Security</h2>
        <p>We take security seriously and take reasonable precautions to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
        
        <h2>5. Your Rights</h2>
        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. You have the right to access, update, or delete the information we have on you.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about our Privacy Policy, please <a href="/contact">contact us</a>.</p>
      </div>
    </div>
  );
}
