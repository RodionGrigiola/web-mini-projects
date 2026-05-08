import { FaClock } from "react-icons/fa";

type Props = {
  timeLeft: number;
};

function formatTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

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
