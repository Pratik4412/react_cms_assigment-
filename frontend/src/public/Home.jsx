import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => {
      const published = res.data.filter((p) => p.status === "published");
      setPosts(published);
    });
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <Link
              to={`/blogs/${post.slug}`}
              className="text-blue-600 mt-2 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
