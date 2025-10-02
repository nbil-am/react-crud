import { useEffect, useState } from "react";
import Card from "../components/Card";

interface ArticlesData {
  id: string;
  title: string;
  description: string;
}
const Home = () => {
  const [Articles, setArticles] = useState<ArticlesData[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <main>
      <div className="container grid grid-cols-3 gap-4 mx-auto my-20">
        {Articles.map((article) => (
          <Card key={article.id} title={article.title} description={article.description} />
        ))}
      </div>
    </main>
  );
};

export default Home;
