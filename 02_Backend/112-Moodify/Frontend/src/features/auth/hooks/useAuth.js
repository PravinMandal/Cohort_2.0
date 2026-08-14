import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context.jsx";
import { getMe, login, logout, register } from "../services/auth.api.js";

export function useAuth() {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  async function run(request) {
    setLoading(true);
    try {
      const data = await request();
      setUser(data.user ?? null);
      return data;
    } finally {
      setLoading(false);
    }
  }

  function handleRegister(credentials) {
    return run(() => register(credentials));
  }

  function handleLogin(credentials) {
    return run(() => login(credentials));
  }

  function handleGetMe() {
    return run(() => getMe());
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    user,
    setUser,
    loading,
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout,
  };
}
