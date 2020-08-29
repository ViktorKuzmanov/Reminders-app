import React, { useState } from "react";
import Navbar from "../components/NavBar";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      This is the Homepage
    </div>
  );
};

export default Home;
