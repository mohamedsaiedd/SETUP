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
        group
        relative
        flex flex-col items-start text-left
        p-8 rounded-3xl
        bg-white dark:bg-gray-800/50 backdrop-blur-sm
        border border-gray-100 dark:border-gray-700
        shadow-sm hover:shadow-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[var(--primary-color)]/30
      "
    >
      <div className="
        mb-6 p-4 rounded-2xl
        bg-[var(--primary-color)]/5 dark:bg-[var(--primary-color)]/20
        text-[var(--primary-color)] dark:text-white
        group-hover:bg-[var(--primary-color)] group-hover:text-white
        transition-colors duration-300
      ">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-[var(--headLine-text)] mb-3 group-hover:text-[var(--primary-color)] transition-colors">
        {title}
      </h2>

      <p className="text-base text-[var(--text-sub-color)] leading-relaxed">
        {paragraph}
      </p>
    </div>
  );
}
