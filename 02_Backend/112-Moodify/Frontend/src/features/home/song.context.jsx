import { createContext, useState } from "react";

export const songContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <songContext.Provider value={{ loading, setLoading, song, setSong }}>
      {children}
    </songContext.Provider>
  );
};
