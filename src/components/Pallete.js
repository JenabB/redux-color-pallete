import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Pallete = ({ p }) => {
  return (
    <Link to={`/pallete/${p.pallete_id}`}>
      <div className="my-4">
        <h1 className="">{p.title}</h1>
        <div className="flex">
          <p className=" mr-2">{p.popularity}</p>
          <p className="material-icons">star_border</p>
        </div>

        <div className="flex text-center">
          {p.data.map((c, i) => (
            <div key={i} className="my-2">
              <div
                className=""
                style={{
                  backgroundColor: `${c.color}`,
                  height: "80px",
                  width: "80px",
                }}
              ></div>
            </div>
          ))}
        </div>
        <p className="text-xs">{moment(p.createdAt).fromNow()}</p>
      </div>
    </Link>
  );
};

export default Pallete;
