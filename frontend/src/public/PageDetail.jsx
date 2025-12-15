import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const PageDetail = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    api.get(`/pages/${slug}`).then((res) => setPage(res.data));
  }, [slug]);

  if (!page) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export default PageDetail;
