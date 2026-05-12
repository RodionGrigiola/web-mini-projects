import { FaClock } from "react-icons/fa";
import { formatTime } from "../utils/formatTime";

type Props = {
  timeLeft: number;
};

export function Timer({ timeLeft }: Props) {
  return (
    <div className="flex justify-end">
      <p
        className={`text-sm flex gap-2 items-center font-mono tabular-nums w-[80px] justify-end ${
          timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-amber-100"
        }`}>
        <FaClock />
        {formatTime(timeLeft)}
      </p>
    </div>
  );
}
