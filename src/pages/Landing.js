import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="text-4xl">I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <Link to="/home">
          <button className="mt-4 bg-white text-red-400 px-4 py-2 rounded-2xl ">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
