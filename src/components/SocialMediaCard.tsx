import { FaTwitter, FaInstagram, FaReddit, FaGlobe } from "react-icons/fa";
import React from "react";
import { Finding } from "@/lib/definitions";

const getPlatformIcon = (source: string) => {
  if (source.includes("twitter") || source.includes("x.com"))
    return <FaTwitter className="text-[#1DA1F2]" />;
  if (source.includes("instagram"))
    return <FaInstagram className="text-[#E4405F]" />;
  if (source.includes("reddit")) return <FaReddit className="text-[#FF4500]" />;
  return <FaGlobe className="text-gray-500" />;
};

const getSensitivityBadge = (level: string) => {
  const base = "text-xs font-semibold px-2 py-1 rounded-full";
  if (level === "high")
    return `${base} bg-red-100 dark:bg-red-700 dark:text-red-100 text-red-700`;
  if (level === "medium")
    return `${base} bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100`;
  return `${base} bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100`;
};

export default function SocialMediaCard({ finding }: { finding: Finding }) {
  const { source, data_value, sensitivity_level, recommendations } = finding;

  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {getPlatformIcon(source)}
          <span className="capitalize">{source}</span>
        </div>
        <span className={getSensitivityBadge(sensitivity_level)}>
          {sensitivity_level} risk
        </span>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {data_value}
      </p>

      <div>
        <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          Recommendations:
        </h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
          {recommendations.map((rec) => (
            <li key={rec.id}>{rec.recommendation} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
