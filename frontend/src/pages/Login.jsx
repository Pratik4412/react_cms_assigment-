// import { useState } from "react";
// import api from "../api/axios";
// import toast from "react-hot-toast";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Email and password are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await api.post("/auth/login", { email, password });

//       localStorage.setItem("token", res.data.token);
//       toast.success("Login successful");

//       setTimeout(() => {
//         window.location.href = "/";
//       }, 800);
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || "Invalid email or password"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-96">
//         <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

//         <input
//           type="email"
//           className="w-full border p-2 mb-3"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="w-full border p-2 mb-3"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-60"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (isRegister && !name)) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const endpoint = isRegister ? "/auth/register" : "/auth/login";
      const payload = isRegister
        ? { name, email, password }
        : { email, password };

      const res = await api.post(endpoint, payload);

      localStorage.setItem("token", res.data.token);

      toast.success(
        isRegister ? "Registration successful" : "Login successful"
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 800);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          (isRegister ? "Registration failed" : "Login failed")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegister ? "Admin Registration" : "Admin Login"}
        </h2>

        {isRegister && (
          <input
            type="text"
            className="w-full border p-2 mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          className="w-full border p-2 mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-60"
        >
          {loading
            ? isRegister
              ? "Registering..."
              : "Logging in..."
            : isRegister
            ? "Register"
            : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 ml-1 underline"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
