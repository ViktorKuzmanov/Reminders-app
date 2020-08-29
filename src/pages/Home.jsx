import React, { useContext } from "react";
import Navbar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
  return (
    <div>
      <Navbar />
      This is the Homepage and isLoggedIn = {isLoggedIn.toString()}
    </div>
  );
};

export default Home;
