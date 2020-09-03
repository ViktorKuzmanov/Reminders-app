import React, { useContext, useEffect } from "react";
import Navbar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  return (
    <div>
      <Navbar />
      This is the Homepage and isLoggedIn = {isLoggedIn}
    </div>
  );
};

export default Home;
