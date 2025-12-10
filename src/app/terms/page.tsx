import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using HustlersPo!nt.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>Please read these terms of service carefully before using our website operated by HustlersPo!nt.</p>

        <h2>1. Conditions of Use</h2>
        <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. HustlersPo!nt only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>

        <h2>2. Privacy Policy</h2>
        <p>Before you continue using our website, we advise you to read our <a href="/privacy">privacy policy</a> regarding our user data collection. It will help you better understand our practices.</p>

        <h2>3. Age Restriction</h2>
        <p>You must be at least 13 (thirteen) years of age before you can use this website. By using this website, you warrant that you are at least 13 years of age and you may legally adhere to this Agreement. HustlersPo!nt assumes no responsibility for liabilities related to age misrepresentation.</p>

        <h2>4. Intellectual Property</h2>
        <p>You agree that all materials, products, and services provided on this website are the property of HustlersPo!nt, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the HustlersPo!nt’s intellectual property in any way, including electronic, digital, or new trademark registrations.</p>
        
        <h2>5. User Accounts</h2>
        <p>As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.</p>
        
        <h2>6. Limitation on Liability</h2>
        <p>HustlersPo!nt is not liable for any damages that may occur to you as a result of your misuse of our website. HustlersPo!nt reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between HustlersPo!nt and the user, and this supersedes and replaces all prior agreements regarding the use of this website.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about our Terms of Service, please <a href="/contact">contact us</a>.</p>
      </div>
    </div>
  );
}
