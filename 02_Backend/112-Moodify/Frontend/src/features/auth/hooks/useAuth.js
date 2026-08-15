import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { getMe, login, logout, register } from "../services/auth.api.js";
import { songContext } from "../../home/song.context.jsx";

export function useAuth() {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  const songCtx = useContext(songContext);

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
    if (songCtx?.setSong) songCtx.setSong(null);
    return run(() => register(credentials));
  }

  function handleLogin(credentials) {
    if (songCtx?.setSong) songCtx.setSong(null);
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
      if (songCtx?.setSong) songCtx.setSong(null);
    } finally {
      setLoading(false);
    }
  }

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
