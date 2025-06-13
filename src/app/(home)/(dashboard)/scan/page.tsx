"use client";

import RiskScoreCircle from "@/components/RiskScore";
import SocialMediaCard from "@/components/SocialMediaCard";
import { useEffect, useState } from "react";
import { fakeScanResult } from "@/components/index";
import { Skeleton, Box } from "@mui/material";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Finding, ScanResult } from "@/lib/definitions";
import Toast from "@/components/Toast";
import InsightCard from "@/components/InsightCard";

export default function ScanPage() {
  const [input, setInput] = useState("");
  const [scanId, setScanId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const riskScore: number =
    scanResult?.risk_score == undefined ? 0 : scanResult.risk_score;
  // Snackbar states
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<
    "success" | "error" | "info"
  >("info");

  const showToast = (msg: string, type: "success" | "error" | "info") => {
    setToastMessage(msg);
    setToastSeverity(type);
    setToastOpen(true);
  };
  const handleScan = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scan_type: "email",
          scan_value: input,
        }),
      });

      const data = await res.json();
      console.log("Scan started:", data);
      if (res.status === 401) {
        showToast("Please log in to start scanning.", "error");
        setTimeout(() => {
          window.location.href = "/auth/sign-in";
        }, 2000);
      }

      if (res.ok) {
        setScanId(data.scan_id);
        showToast("Scan started successfully!", "success");
        console.log("Scan id:", scanId);
      } else {
        // alert("Scan failed: " + data.message);
        showToast("An error occurred while scanning.", "error");
      }
    } catch (err) {
      console.error("Scan error:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleDownloadReport = async () => {
    if (!scanId) {
      showToast("No scan has been completed yet.", "error");
      return;
    }

    try {
      const res = await fetch(`/api/genReport/${scanId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const errorText = await res.text();
        showToast("Failed to generate report: " + errorText, "error");
        return;
      }

      const data = await res.json();
      if (res.ok && data.report_url) {
        // Construct full download URL
        const downloadUrl = `https://digital-footprint-backend.onrender.com${data.report_url}`;

        // Create an anchor tag and click it programmatically
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "footprint_report.pdf"; // Or any name you prefer
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        showToast(
          "Report generation failed:" + (data.detail || data.error),
          "error"
        );
      }
    } catch (err) {
      showToast("An error occurred while downloading the report.", "error");
    }
  };
  useEffect(() => {
    if (!scanId) return;

    const fetchScanResults = async (id: string) => {
      try {
        const res = await fetch(`/api/scan/${id}`);
        const data = await res.json();
        console.log("Scan Results", data);
        setScanResult(data); // ✅ store in state
      } catch (err) {
        showToast("Error fetching scan results:" + err, "error");
      }
    };
    fetchScanResults(scanId);
  }, [scanId]);

  return (
    <div className="max-w-7xl mr-auto px-4 min-h-screen">
      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        message={toastMessage}
        severity={toastSeverity}
      />

      <div className="max-h-fit flex flex-col md:flex-row justify-start md:items-center mb-auto">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">Footprint Scan</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check your digital exposure and generate a detailed report.
          </p>
          <form className="w-full" onSubmit={handleScan}>
            <input
              name="email"
              type="email"
              value={input}
              placeholder="Enter email"
              onChange={(e) => setInput(e.target.value)}
              required
              className="w-full placeholder-neutral-400 dark:placeholder-neutral-600 mb-6 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-[#07B5AD]"
            />

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#07B5AD] hover:bg-[#07b5acb5] text-white px-6 py-2 rounded mb-4 cursor-pointer"
              >
                {loading ? "Scanning..." : "Start Scan"}
              </button>
              {scanResult && (
                <button
                  type="button"
                  onClick={handleDownloadReport}
                  className="border-[#07B5AD] border text-[var(--text-color)] hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-white px-6 py-2 rounded mb-4 cursor-pointer"
                >
                  Download Report
                </button>
              )}
            </div>
          </form>
        </div>
        <RiskScoreCircle score={riskScore} />
      </div>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {fakeScanResult.findings.breaches.map((profile) => (
            <Skeleton variant="rounded" width="100%" animation="wave">
              <SocialMediaCard key={profile.id} finding={profile as Finding} />
            </Skeleton>
          ))}
        </div>
      ) : scanResult?.findings.breaches.length &&
        scanResult?.findings.breaches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {scanResult?.findings.breaches.map((profile) => (
            <SocialMediaCard key={profile.id} finding={profile} />
          ))}
        </div>
      ) : !scanId ? (
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          🚫 No scan has been performed yet.
        </div>
      ) : null}
    </div>
  );
}
