interface CardProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: CardProps) => {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <h2 className="font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default Card;
