import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

const Media = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await api.post("/media/upload", formData);
      setImages((prev) => [res.data, ...prev]);
      toast.success("Image uploaded");
      setFile(null);
    } catch {
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Media Library</h2>

      <div className="border p-4 rounded mb-6 flex items-center gap-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt=""
            className="rounded shadow object-cover object-left-top h-[400px] w-full "
          />
        ))}
      </div>
    </div>
  );
};

export default Media;
