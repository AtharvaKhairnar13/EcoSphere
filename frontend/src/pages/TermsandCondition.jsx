import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

const TermsAndConditions = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 lg:px-16">
      <div className="max-w-screen-lg mx-auto">
        <Typography variant="h2" className="text-3xl font-bold text-center mb-8">
          Terms and Conditions
        </Typography>

        <div className="space-y-6">
          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            1. Introduction
          </Typography>
          <p className="text-gray-700">
            These terms and conditions govern your use of this website. By accessing this website, you agree to comply with these terms and conditions.
          </p>

          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            2. Acceptance of Terms
          </Typography>
          <p className="text-gray-700">
            By using our services, you agree to the terms and conditions outlined in this agreement. If you do not agree with any of these terms, please do not use our services.
          </p>

          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            3. User Responsibilities
          </Typography>
          <p className="text-gray-700">
            You agree to use this website for lawful purposes only. You are responsible for ensuring that all information you provide is accurate and up-to-date.
          </p>

          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            4. Privacy Policy
          </Typography>
          <p className="text-gray-700">
            We take your privacy seriously. Please review our <Link to="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link> to learn how we collect and protect your data.
          </p>

          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            5. Limitations of Liability
          </Typography>
          <p className="text-gray-700">
            We will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website or services.
          </p>

          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            6. Changes to the Terms
          </Typography>
          <p className="text-gray-700">
            We reserve the right to modify or update these terms at any time. All changes will be reflected on this page, and it is your responsibility to review these terms periodically.
          </p>

          <Typography variant="h4" className="text-2xl font-semibold text-green-600">
            7. Governing Law
          </Typography>
          <p className="text-gray-700">
            These terms and conditions are governed by the laws of the jurisdiction in which our company operates. Any legal disputes shall be resolved in the appropriate courts of that jurisdiction.
          </p>

          <div className="mt-8 text-center">
            <Typography variant="small" color="blue-gray" className="font-medium">
              By using this website, you agree to these terms. If you do not agree, please stop using the website.
            </Typography>
            <div className="mt-4">
              <Link
                to="/signup"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
