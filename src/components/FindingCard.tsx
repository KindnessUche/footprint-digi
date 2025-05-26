// import RecommendationItem from './RecommendationItem';

type Recommendation = {
  id: number;
  recommendation: string;
  action_url: string;
  priority: string;
};

type Finding = {
  source: string;
  data_value: string;
  sensitivity_level: "low" | "medium" | "high";
  recommendations: Recommendation[];
};

export default function FindingCard({ finding }: { finding: Finding }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg mb-4 shadow-md">
      <div className="text-sm text-zinc-400 mb-1">{finding.source}</div>
      <div className="text-white font-semibold">{finding.data_value}</div>
      <div className="text-sm mt-1 text-yellow-400 capitalize">
        Sensitivity: {finding.sensitivity_level}
      </div>

      <div className="mt-3">
        <h4 className="text-sm font-semibold text-zinc-300 mb-2">
          Recommendations:
        </h4>
        <ul className="space-y-2">
          {/* {finding.recommendations.map((r) => (
            <RecommendationItem key={r.id} recommendation={r} />
          ))} */}
        </ul>
      </div>
    </div>
  );
}
