import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import "./Register.css";

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
    <section className="register-form">
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          {" "}
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          {" "}
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <button id="register-button">Register</button>
        {error && <p role="alert">*{error}*</p>}
      </form>
      <Link to={"/login"} id="login-link">
        Already have an account? Log in here.
      </Link>
    </section>
  );
}
