import { Finding } from "@/lib/definitions";
import React from "react";

export default function InsightCard({ insight }: { insight: Finding }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Insight from: <span className="text-blue-600">{insight.source}</span>
      </h3>
      <p className="text-sm text-gray-700 mb-2">
        <span className="font-medium">Sensitivity:</span>{" "}
        <span
          className={`inline-block px-2 py-1 rounded text-xs ${
            insight.sensitivity_level === "high"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {insight.sensitivity_level}
        </span>
      </p>
      <p className="text-gray-800 text-sm mb-4">{insight.data_value}</p>

      <div>
        <p className="text-sm font-medium text-gray-800 mb-1">
          Recommendations:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {insight.recommendations.map((rec) => (
            <li key={rec.id}>
              <span className="font-semibold capitalize">{rec.priority}:</span>{" "}
              {rec.recommendation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
