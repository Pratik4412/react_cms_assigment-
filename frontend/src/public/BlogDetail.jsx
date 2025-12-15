import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${slug}`).then((res) => setPost(res.data));
  }, [slug]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogDetail;
