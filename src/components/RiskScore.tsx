import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = { score: number | undefined };

export default function RiskScoreCircle({ score }: { score: number }) {
  return (
    <div className="w-40 h-40 mx-auto flex flex-col items-center justify-center font-semibold gap-5">
      <CircularProgressbar
        value={score}
        text={`${score}%`}
        styles={buildStyles({
          pathColor:
            score < 40 ? "#07B5AD" : score < 70 ? "#F59E0B" : "#EF4444",
          textColor:
            score < 40 ? "#07B5AD" : score < 70 ? "#F59E0B" : "#EF4444",
          trailColor: "#374151",
        })}
      />

      <h2 className="">Risk Score</h2>
    </div>
  );
}
