import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="stream-container">
      <h1>EZTechMovie Login</h1>

      <button onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;