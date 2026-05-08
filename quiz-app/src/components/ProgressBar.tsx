import type { ReactNode } from "react";

type Props = {
  current: number;
  total: number;
  children?: ReactNode;
};

export function ProgressBar({ current, total, children }: Props) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-sm mb-2">
        <div className="flex items-center gap-2 text-slate-300">{children}</div>

        <span>{Math.round(percent)}%</span>
      </div>

      <div className="w-full h-2 bg-slate-700 rounded">
        <div
          className="h-2 bg-blue-500 rounded transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
