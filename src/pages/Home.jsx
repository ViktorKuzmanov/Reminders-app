import React, { useContext, useEffect } from "react";
import Navbar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect is called");
    // Get the parametar isLoggedIn value when components mounts
    const query = new URLSearchParams(props.location.search);
    const isLoggedInFromQueryString = query.get("isLoggedIn") === "true";
    // Update context if used is logged in (if currentPage = localhost:5000/?isLoggedIn=true)
    setIsLoggedIn((prevIsLoggedInt) => {
      return isLoggedInFromQueryString;
    });
  }, []);

  return (
    <div>
      <Navbar />
      This is the Homepage and isLoggedIn = {isLoggedIn.toString()}
    </div>
  );
};

export default Home;
