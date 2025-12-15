import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Posts from "../pages/Posts";
import Dashboard from "../pages/Dashboard";
import Pages from "../pages/Pages";
import Media from "../pages/Media";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import CreateEditPage from "../pages/CreateEditPage";
import Home from "../public/Home";
import BlogList from "../public/BlogList";
import BlogDetail from "../public/BlogDetail";
import PageDetail from "../public/PageDetail";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      { path: "", element: <Home /> },
      { path: "blogs", element: <BlogList /> },
      { path: "blogs/:slug", element: <BlogDetail /> },
      { path: ":slug", element: <PageDetail /> },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts",
        element: (
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "/pages",
      //   element: (
      //     <ProtectedRoute>
      //       <Pages />
      //     </ProtectedRoute>
      //   ),
      // },
      // {
      //   path: "/media",
      //   element: (
      //     <ProtectedRoute>
      //       <Media />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "pages",
        element: (
          <ProtectedRoute>
            <Pages />
          </ProtectedRoute>
        ),
      },
      {
        path: "pages/create",
        element: (
          <ProtectedRoute>
            <CreateEditPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "pages/edit/:id",
        element: (
          <ProtectedRoute>
            <CreateEditPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "media",
        element: (
          <ProtectedRoute>
            <Media />
          </ProtectedRoute>
        ),
      },
      {
        path: "posts/create",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      {
        path: "posts/edit/:id",
        element: (
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
