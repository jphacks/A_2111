import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AppContextProvider = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [userId, setUserId] = useState(undefined);
  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        initialLoading,
        setInitialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AppContextProvider;
