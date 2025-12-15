import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  const togglePublish = async (id) => {
    try {
      const res = await api.patch(`/posts/${id}/publish`);

      setPosts((prev) =>
        prev.map((post) =>
          post._id === id ? { ...post, status: res.data.status } : post
        )
      );

      toast.success(`Post ${res.data.status}`);
    } catch {
      toast.error("Failed to update status");
    }
  };

  const deletePost = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/posts/${id}`);

      setPosts((prev) => prev.filter((post) => post._id !== id));

      toast.success("Post deleted successfully");
    } catch {
      toast.error("Failed to delete post");
    }
  };

  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        <Link
          to="/posts/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Post
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td className="border p-2">{post.title}</td>

              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    post.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {post.status}
                </span>
              </td>

              {/* <td className="border p-2 space-x-3">
                <Link to={`/posts/edit/${post._id}`} className="text-blue-600">
                  Edit
                </Link>

                <button
                  onClick={() => togglePublish(post._id)}
                  className="text-purple-600 underline text-sm"
                >
                  {post.status === "published" ? "Unpublish" : "Publish"}
                </button>

                <button
                  onClick={() => deletePost(post._id)}
                  className="text-red-600 underline text-sm"
                >
                  Delete
                </button>
              </td> */}
              <td className="border p-2">
                <div className="flex items-center gap-4">
                  <Link
                    to={`/posts/edit/${post._id}`}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FiEdit size={18} />
                  </Link>
                  <button
                    onClick={() => togglePublish(post._id)}
                    className="text-purple-600 hover:text-purple-800"
                    title={
                      post.status === "published" ? "Unpublish" : "Publish"
                    }
                  >
                    {post.status === "published" ? (
                      <HiOutlineEyeOff size={20} />
                    ) : (
                      <HiOutlineEye size={20} />
                    )}
                  </button>

                  <button
                    onClick={() => deletePost(post._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
