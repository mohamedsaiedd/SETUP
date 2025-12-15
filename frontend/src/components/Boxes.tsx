import type { ReactNode } from "react"
import "./global.css"
type BoxesProps = {
  title: string;
  paragraph: string;
  icon: ReactNode;
};


export function Boxes({ title, paragraph, icon }: BoxesProps) {
  return (
    <div
      className="
        dark:bg-[var(--primary-900)]
        flex flex-col items-center justify-center text-center 
        p-6 py-8 rounded-2xl bg-white 
        shadow-sm hover:shadow-md transition-shadow duration-300 
      "
    >
      <div className="text-[var(--primary-color)] mb-4 dark:text-white">
        {icon}
      </div>

      <h2 className="text-lg font-semibold text[var(--headLine-text)] mb-2">
        {title}
      </h2>

      <p className="text-sm text-[var(--text-sub-color)] leading-relaxed max-w-xs">
        {paragraph}
      </p>
    </div>
  );
}
