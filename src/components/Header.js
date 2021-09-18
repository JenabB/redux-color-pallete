import React from "react";
import { Link } from "react-router-dom";

//data
import pallete from "../data/initialPallete.json";

const Header = () => {
  const mostPopular = pallete.pallete.sort((a, b) =>
    a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0
  );

  console.log(mostPopular);

  return (
    <div className="mb-10 w-3/4 mx-auto">
      <div className="grid grid-cols-2">
        <Link to="/featured">
          <div
            className="bg-blue-300 p-4 m-2 rounded-lg hero"
            style={{ height: "300px" }}
          >
            <h1 className="lg:text-2xl text-white font-bold">
              Pallete for girls
            </h1>
          </div>
        </Link>
        <div className="">
          <div
            className="bg-blue-100 m-2 p-4 rounded-lg text-white font-bold"
            style={{ height: "150px" }}
          >
            <h1 className="text-xl">Most Popular</h1>
            <div className="flex items-center justify-center p-4">
              <h1 className="text-center text-2xl">{mostPopular[0].title}</h1>
              <div className="flex ml-4">
                <h1 className="">{mostPopular[0].popularity}</h1>
                <h1 className="material-icons">star_border</h1>
              </div>
            </div>
          </div>
          <div
            className="bg-green-300 m-2 p-4 rounded-lg text-white font-bold"
            style={{ height: "150px" }}
          >
            <h1 className="text-xl">Most Popular</h1>
            <div className="flex items-center justify-center p-4">
              <h1 className="text-center text-2xl">{mostPopular[0].title}</h1>
              <div className="flex ml-4">
                <h1 className="">{mostPopular[0].popularity}</h1>
                <h1 className="material-icons">star_border</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
