import React from "react";
import {
  FaShieldAlt,
  FaSearch,
  FaUserSecret,
  FaFingerprint,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-[var(--bg-color)] dark:bg-[var(--bg-color)] dark:text-white text-neutral-900">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Digital Footprint Scan
      </h1>

      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
        Our Digital Footprint Scanner helps you identify what personal
        information is exposed online. We analyze public platforms, assess
        privacy risks, and give tailored recommendations to protect your
        identity.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <FeatureCard
          icon={<FaSearch className="text-blue-500 text-3xl" />}
          title="Deep Web Scanning"
          description="We scan public and dark web sources to uncover exposed accounts, data leaks, and identity traces."
        />
        <FeatureCard
          icon={<FaFingerprint className="text-purple-500 text-3xl" />}
          title="Privacy Risk Scoring"
          description="Get a personalized score that reflects your exposure level and helps you take action quickly."
        />
        <FeatureCard
          icon={<FaUserSecret className="text-green-500 text-3xl" />}
          title="Actionable Recommendations"
          description="Receive clear, prioritized tips to lock down your privacy and minimize digital risks."
        />
        <FeatureCard
          icon={<FaShieldAlt className="text-red-500 text-3xl" />}
          title="Ongoing Monitoring"
          description="Enable future scans to keep tabs on your digital footprint as it evolves."
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Built for Privacy-First Users
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Your data never leaves our secure platform. We believe privacy tools
          should respect your privacy.
        </p>
      </div>
      <footer className="bg-[var(--bg-color)] dark:bg-[var(--bg-color)] dark:text-white text-black py-16 px-6 mt-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              Free checker
            </a>
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-[var(--main)] transition-colors">
              <FaTwitter size={18} />
            </a>
          </div>

          <p className="text-xs">
            &copy; 2024 Digital Footprint Check. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div>{icon}</div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
