type CardProps = {
  image: string;
  title: string;
  description: string;
};

export function Card({ image, title, description }: CardProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-bold mt-4">{title}</h2>

      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
}