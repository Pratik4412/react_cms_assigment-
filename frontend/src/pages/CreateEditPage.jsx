import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import api from "../api/axios";
import toast from "react-hot-toast";

const CreateEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");

  useEffect(() => {
    if (id) {
      api.get("/pages").then((res) => {
        const page = res.data.find((p) => p._id === id);
        if (page) {
          setTitle(page.title);
          setContent(page.content);
          setStatus(page.status);
        }
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await api.put(`/pages/${id}`, { title, content, status });
        toast.success("Page updated");
      } else {
        await api.post("/pages", { title, content, status });
        toast.success("Page created");
      }
      navigate("/pages");
    } catch {
      toast.error("Failed to save page");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Edit Page" : "Create Page"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Page Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ReactQuill value={content} onChange={setContent} />

        <div className="flex items-center gap-3">
          <select
            className="border p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditPage;
