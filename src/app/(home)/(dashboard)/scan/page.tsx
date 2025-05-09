"use client";

import RiskScoreCircle from "@/components/RiskScore";
import Image from "next/image";
import SocialMediaCard from "@/components/SocialMediaCard";
import { useState } from "react";
import { scanResult } from "@/components/index";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { jsPDF } from "jspdf";

export default function ScanPage() {
  const [loading, setLoading] = useState(false);
  const handleScan = () => {
    setLoading(true);
    // Fake scan delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mr-auto px-4">
      <div className="max-h-fit flex flex-col md:flex-row justify-start md:items-center ">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">Footprint Scan</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check your digital exposure and generate a detailed report.
          </p>
          <input
            name="email"
            type="email"
            placeholder="email address"
            // value={formData.email}
            // onChange={handleChange}
            // required
            className="w-full placeholder-neutral-400 dark:placeholder-neutral-600 mb-6 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-[#07B5AD]"
          />
          <div className="flex gap-4">
            <button
              onClick={handleScan}
              className="bg-[#07B5AD] hover:bg-[#07b5acb5] text-white px-6 py-2 rounded mb-4 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Scanning..." : "Start Scan"}
            </button>
            <button className="border-[#07B5AD] border text-[var(--text-color)] hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-white px-6 py-2 rounded mb-4 cursor-pointer">
              Download Report
            </button>
          </div>
        </div>
        <RiskScoreCircle score={loading ? 0 : 65} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {scanResult.all_findings.map((profile) => (
          <SocialMediaCard key={profile.id} finding={profile} />
        ))}
      </div>
      <footer className="bg-[var(--bg-color)] dark:bg-[#0f0f10] dark:text-white text-black py-16 px-6 mt-12">
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
