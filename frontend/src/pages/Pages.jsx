// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../api/axios";

// const Pages = () => {
//   const [pages, setPages] = useState([]);

//   useEffect(() => {
//     api.get("/pages").then((res) => setPages(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <div className="flex justify-between mb-4">
//         <h2 className="text-2xl font-bold">Pages</h2>
//         <Link
//           to="/pages/create"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           + Create Page
//         </Link>
//       </div>

//       <table className="w-full border">
//         <thead>
//           <tr>
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pages.map((page) => (
//             <tr key={page._id}>
//               <td className="border p-2">{page.title}</td>
//               <td className="border p-2">{page.status}</td>
//               <td className="border p-2">
//                 <Link to={`/pages/edit/${page._id}`} className="text-blue-600">
//                   Edit
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Pages;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const Pages = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const res = await api.get("/pages");
    setPages(res.data);
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "published" ? "draft" : "published";

      await api.put(`/pages/${id}`, { status: newStatus });

      setPages((prev) =>
        prev.map((page) =>
          page._id === id ? { ...page, status: newStatus } : page
        )
      );

      toast.success(`Page ${newStatus}`);
    } catch {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Pages</h2>
        <Link
          to="/pages/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Page
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
          {pages.map((page) => (
            <tr key={page._id}>
              <td className="border p-2">{page.title}</td>

              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    page.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {page.status}
                </span>
              </td>

              <td className="border p-2 space-x-3">
                <Link to={`/pages/edit/${page._id}`} className="text-blue-600">
                  Edit
                </Link>

                <button
                  onClick={() => toggleStatus(page._id, page.status)}
                  className="text-sm text-purple-600 underline"
                >
                  {page.status === "published" ? "Unpublish" : "Publish"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pages;
