import { ReactNode } from "react";

export default function Box({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`bg-white flex flex-col justify-center align-middle my-5 p-5 rounded-lg ${className}`}>{children}</div>;
}
