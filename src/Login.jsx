import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./components/Auth/AuthContext";

function Login() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const tryLogin = async (formData) => {
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/UserPage");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1 className=" bg-white rounded-lg shadow-md p-6 mb-6 max-w-2xl mx-auto p-6 text-2xl font-bold mb-6 text-slate-800 text-center">
        Login
      </h1>
      <div className="min-h-screen  flex items-start justify-center p-4">
        <div className="bg-white border-2 rounded-xl shadow-md p-6 mb-6 border-white p-8 w-full max-w-md">
          <form action={tryLogin}>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-900">
                Username:
                <input
                  type="text"
                  name="username"
                  className=" bg-white block w-full border-2 border-slate-800 p-2"
                  style={{ maxWidth: "100%" }}
                  required
                />
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-slate-900">
                Password:
                <input
                  type="password"
                  name="password"
                  className="bg-white block w-full border-2 border-slate-800 p-2"
                  style={{ maxWidth: "100%" }}
                  required
                />
              </label>
            </div>

            <button className="bg-blue-500 w-full border-2 rounded-2xl border-blue-500 text-white p-3 font-semibold hover:bg-slate-800 hover:text-white transition mb-4">
              Login
            </button>
            {error && <p role="alert">*{error}*</p>}

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
    </div>
  );
}

export default Login;
