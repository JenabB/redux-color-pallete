import React from "react";
import Pallete from "./Pallete";

const Palletes = ({ pallete }) => {
  return (
    <div className="grid lg:grid-cols-2">
      {pallete.map((p, i) => (
        <Pallete p={p} key={i} />
      ))}
    </div>
  );
};

export default Palletes;
