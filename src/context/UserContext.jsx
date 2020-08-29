import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Pass entire useState hook in as value prop
  return (
    <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};
