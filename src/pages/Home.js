import React from "react";

import AppBar from "../components/AppBar";
import Header from "../components/Header";
import pallete from "../data/initialPallete.json";
import Palletes from "../components/Palletes";

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="m-4">
        <Header />
      </div>

      <div className="lg:w-3/4 mx-auto">
        <div className="m-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl mt-24 mb-8">Browse Pallete</h1>
            <div>
              <input
                type="search"
                placeholder="ex. pastel"
                className="py-2 px-4 bg-blue-200 rounded-full"
              />
            </div>
          </div>

          <Palletes pallete={pallete.pallete} />
        </div>
      </div>
    </div>
  );
};

export default Home;
