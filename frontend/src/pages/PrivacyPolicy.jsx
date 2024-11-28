import React from 'react';
import { Typography } from '@material-tailwind/react';

const PrivacyPolicy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <Typography variant="h2" className="font-bold text-2xl text-center text-green-600 mb-6">
          Privacy Policy
        </Typography>

        <Typography variant="paragraph" color="blue-gray" className="text-lg mb-6">
          At [Your Company Name], we value your privacy. This Privacy Policy document explains the
          types of personal information that is collected and recorded by us and how we use it.
        </Typography>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              1. Information We Collect
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              We collect the following types of information:
              <ul className="list-disc pl-6 mt-2">
                <li>Personal information (e.g., name, email address, etc.)</li>
                <li>Usage data (e.g., how you use our website)</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              2. How We Use Your Information
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              We use the information we collect for various purposes, including to:
              <ul className="list-disc pl-6 mt-2">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Send promotional and marketing communications</li>
                <li>Respond to customer support inquiries</li>
              </ul>
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              3. Data Protection
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              We implement appropriate security measures to protect your personal data from unauthorized
              access, alteration, or destruction. However, no method of transmission over the Internet is
              completely secure, and we cannot guarantee the absolute security of your data.
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              4. Sharing Your Information
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              We do not sell, trade, or rent your personal information to third parties. However, we may
              share your information with trusted partners who assist us in operating our website or conducting
              our business, as long as they agree to keep this information confidential.
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              5. Your Rights
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              You have the right to:
              <ul className="list-disc pl-6 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of receiving marketing communications</li>
              </ul>
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              6. Changes to This Privacy Policy
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              We may update this Privacy Policy from time to time. When we do, we will post the revised policy
              on this page with the updated date. We encourage you to review this policy periodically.
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="font-semibold text-xl text-green-600 mb-2">
              7. Contact Us
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg">
              If you have any questions or concerns about our Privacy Policy, please contact us at:
              <br />
              <span className="font-bold">Email:</span> support@yourcompany.com
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
