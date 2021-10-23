import React, { createContext, useEffect, useState } from "react";
import { getUserIdFromLocalStorage, storageAvailable } from "../utils/storage";

export const AuthContext = createContext();

const AppContextProvider = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [localStorageAvailable, setLocalStorageAvailable] = useState(false);
  const [userId, setUserId] = useState(undefined);
  useEffect(() => {
    if (storageAvailable()) {
      setLocalStorageAvailable(true);
      let id = getUserIdFromLocalStorage();
      if (!id) {
        // TODO: なまえを入力してIDを取得して保存しておく
      }
    }
    setInitialLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        initialLoading,
        setInitialLoading,
        localStorageAvailable,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AppContextProvider;
