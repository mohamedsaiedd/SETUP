type CardProps = {
  image: string;
  title: string;
  description: string;
};

export function Card({ image, title, description }: CardProps) {
  return (
    <div className="
      group
      w-full
      bg-white dark:bg-gray-800/50 backdrop-blur-sm
      border border-gray-100 dark:border-gray-700
      rounded-3xl
      shadow-sm hover:shadow-xl
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:border-[var(--primary-color)]/30
      overflow-hidden
    ">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out will-change-transform"
        />
      </div>

      <div className="p-6">
        <h2 className="text-lg font-bold text-[var(--headLine-text)] group-hover:text-[var(--primary-color)] transition-colors">
          {title}
        </h2>

        <p className="mt-2 text-sm text-[var(--text-sub-color)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}