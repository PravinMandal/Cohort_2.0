import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";

export default function useAuthForm({ mode }) {
  const navigate = useNavigate();
  const { loading, handleLogin, handleRegister } = useAuth();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const isRegister = mode === "register";

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      if (isRegister) {
        await handleRegister(values);
      } else {
        await handleLogin(values);
      }
      navigate("/");
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          requestError.message ||
          "Something went wrong. Please try again."
      );
    }
  }

  return { values, loading, error, handleChange, handleSubmit };
}
