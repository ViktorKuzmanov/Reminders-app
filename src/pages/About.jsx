import React, { useEffect, useContext } from "react";
import Navbar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  useEffect(() => {
    console.log("isLoggedIn = " + isLoggedIn);
  }, []);

  return (
    <div>
      <Navbar />
      This is the About page
    </div>
  );
};

export default About;
