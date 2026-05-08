type Props = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-2">
        <span>
          Question {current} / {total}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>

      <div className="w-full h-2 bg-slate-700 rounded">
        <div
          className="h-2 bg-blue-500 rounded transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
