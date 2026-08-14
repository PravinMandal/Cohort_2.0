import { useContext } from "react";
import { getSong } from "../service/song.api";
import { songContext } from "../song.context";

export const useSong = () => {
  const context = useContext(songContext);
  if (!context) {
    throw new Error("useSong must be used within a SongContextProvider");
  }

  const { loading, setLoading, song, setSong } = context;

  async function handleGetSong({ mood }) {
    setLoading(true);
    try {
      const data = await getSong({ mood });
      setSong(data?.song || null);
      return data?.song || null;
    } catch (error) {
      console.error("Failed to fetch song for mood:", mood, error);
      setSong(null);
    } finally {
      setLoading(false);
    }
  }

  function clearSong() {
    setSong(null);
  }

  return { loading, song, handleGetSong, setSong, clearSong };
};
