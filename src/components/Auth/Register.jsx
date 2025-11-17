import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "./AuthContext";
// import "./Register.css";

export default function Register() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { register } = useAuth();

  const tryRegister = async (formData) => {
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");
    const name = formData.get("name");
    const email = formData.get("email");
    try {
      await register({ username, password, name, email });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1 className=" bg-white rounded-lg shadow-md p-6 mb-6 max-w-2xl mx-auto p-6 text-3xl font-bold mb-6 text-slate-800 text-center">
        Register for an account
      </h1>
      <section className="min-h-screen flex items-start justify-center p-4">
        <div className="bg-white rounded-xl shadow-md border-2 border-white p-8 w-full max-w-md">
          <form action={tryRegister}>
            <label className="block mb-2 font-semibold text-slate-900">
              {" "}
              Username:
              <input
                type="text"
                name="username"
                className="bg-white block w-full border-2 border-slate-800 p-2"
                style={{ maxWidth: "100%" }}
                required
              />
            </label>
            <label className="block mb-2 font-semibold text-slate-900">
              Password:
              <input
                type="text"
                name="password"
                className="bg-white block w-full border-2 border-slate-800 p-2"
                style={{ maxWidth: "100%" }}
                required
              />
            </label>
            <label className="block mb-2 font-semibold text-slate-900">
              {" "}
              Name:
              <input
                type="text"
                name="name"
                className="bg-white block w-full border-2 border-slate-800 p-2"
                style={{ maxWidth: "100%" }}
                required
              />
            </label>
            <label className="block mb-2 font-semibold text-slate-900">
              Email:
              <input
                type="text"
                name="email"
                className="bg-white block w-full border-2 border-slate-800 p-2"
                style={{ maxWidth: "100%" }}
                required
              />
            </label>
            <button className="bg-blue-500 w-full border-2 rounded-2xl border-blue-500 text-white p-3 font-semibold hover:bg-slate-800 hover:text-white transition mb-4">
              Register
            </button>
            {error && <p role="alert">*{error}*</p>}
          </form>
          <p>
            Already have an account?{" "}
            <Link
              to={"/login"}
              id="login-link"
              className="text-blue-600 hover:text-blue-500 font-semibold"
            >
              Login here.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
