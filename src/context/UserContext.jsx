import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect in UserContext called");
    axios.get("http://localhost:5000/auth/isLoggedIn").then((res) => {
      const isLoggedInFromServer = res.data.isLoggedIn;
      console.log("isLoggedInFromServer = " + isLoggedInFromServer);
      setIsLoggedIn(isLoggedInFromServer);
    });
  }, []);

  // Pass entire useState hook in as value prop
  return (
    <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};
