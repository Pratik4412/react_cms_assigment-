import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => {
      setPosts(res.data.filter((p) => p.status === "published"));
    });
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Blogs</h2>

      {posts.map((post) => (
        <div key={post._id} className="mb-4 border-b pb-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <Link to={`/blogs/${post.slug}`} className="text-blue-600">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
