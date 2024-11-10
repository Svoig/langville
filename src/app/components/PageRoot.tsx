import type { ReactNode } from "react";

export default function PageRoot({ children }: { children: ReactNode }) {
  return (
    <div
      className={`page-root size-full flex flex-col justify-start align-middle p-10 text-slate-900 font-sans bg-yellow-500`}
    >
      {children}
    </div>
  );
}
