import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login({ setToken, token }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password && userData.email) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        console.log(data);
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  if (token) {
    navigate("/account");
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-slate-800 p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Email:
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              className="w-full border-2 border-slate-800 p-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900">
              Password:
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              className="w-full border-2 border-slate-800 p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-slate-800 text-slate-800 p-3 font-semibold hover:bg-slate-800 hover:text-white transition mb-4"
          >
            Login
          </button>

          <p className="text-center text-slate-900">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Sign up now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
