import type { ReactNode } from "react";

export function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
        {children}
      </div>
    </div>
  );
}
