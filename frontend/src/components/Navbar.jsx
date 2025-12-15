import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 ">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-lg">CMS Admin</h1>

        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/posts" className="hover:underline">
            Posts
          </Link>
          <Link to="/pages" className="hover:underline">
            Pages
          </Link>
          <Link to="/media" className="hover:underline">
            Media
          </Link>
          <button onClick={logout} className="text-red-400 ml-4">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
