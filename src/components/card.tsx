import { BookOpen } from "lucide-react";
import { AiOutlineTool } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaFileAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";

const features = [
  {
    icon: <FiSearch className="text-white w-6 h-6" />,
    title: "Real-Time Digital Footprint Scan",
    desc: "Your personal data is scanned in real time across the internet. Just input your name, email, or username, and the system instantly begins combing through search engines, social platforms, and data aggregators to find where your information appears.",
  },
  {
    icon: <FaFileAlt className="text-white w-6 h-6" />,
    title: "Detailed Footprint Report",
    desc: "A downloadable report is generated for every scan. It includes what was found, risk analysis, and clear recommendations. Whether you're using it for personal review, compliance, or as evidence for a data cleanup request, it is professional and easy to understand.",
  },
  {
    icon: <BookOpen className="text-white w-6 h-6" />,
    title: "Public Record Integration",
    desc: "By incorporating information from public records, this feature offers a more holistic view of an individual's digital presence, including legal, professional, and academic histories. This can be crucial for background checks, identity verification, and credibility assessment.",
  },
  {
    icon: <HiOutlineChartBar className="text-white w-6 h-6" />,
    title: "Privacy Risk Scoring",
    desc: "Each scan generates a privacy score, a digestible number that represents your exposure risk. The score considers the volume, sensitivity, and visibility of your data online. It’s an easy way to track improvements over time and understand your risk at a glance.",
  },
  {
    icon: <AiOutlineTool className="text-white w-6 h-6" />,
    title: "Actionable Privacy Recommendations",
    desc: "Scanning is just the first step. Based on your unique exposure, the platform offers step-by-step guidance—like how to adjust privacy settings on Facebook, remove your info from search engines, or secure your accounts with stronger passwords.",
  },
  {
    icon: <CgProfile className="text-white w-6 h-6" />,
    title: "Anonymous One-Time Scan",
    desc: "Privacy-first users can run a one-time scan without needing to create an account. This makes the service more accessible for quick checks, demos, or hesitant users who don’t want to give away even more data before knowing what they’re getting",
  },
];

export default function FeatureGrid() {
  return (
    <div className="dark:bg-[var(--bg-color)] bg-[var(--bg-color)] dark:text-white text-black py-12 max-w-7xl">
      <div className="w-full mr-auto mb-20 ">
        <h2 className="text-3xl font-bold border-b border-gray-600 pb-2 mb-4">
          Online Safety Features
        </h2>
        <p className="text-lg dark:text-gray-300 text-gray-700">
          Our product protects from Identity Fraud and enhances Online Safety.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col mb-6">
            <div className="h-10 w-10 rounded-lg bg-[#07B5AD] text-white flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className=" mb-2 font-semibold text-lg">{feature.title}</h3>
            <p className=" leading-7 text-base text-gray-800 dark:text-gray-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
