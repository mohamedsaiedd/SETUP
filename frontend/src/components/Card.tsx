type CardProps = {
  image: string;
  title: string;
  description: string;
};

export function Card({ image, title, description }: CardProps) {
  return (
    <div className="w-full dark:bg-[var(--primary-900)] hover:dark:bg-[var(--primary-800)] hover:shadow-[0_7px_29px_rgba(100,100,111,0.2)]
     dark:text-white bg-white rounded-xl shadow-md overflow-hidden transition p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-bold mt-4">{title}</h2>

      <p className="text-[var(--headLine-text)] mt-2 text-sm text-[var(--text-sub-color)] ">{description}</p>
    </div>
  );
}