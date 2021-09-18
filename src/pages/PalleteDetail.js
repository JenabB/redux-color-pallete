import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const PalleteDetail = () => {
  const pallete = useSelector((state) => state.palletes.palleteDetail);

  console.log(pallete);
  return (
    <div>
      <div className="">
        <div className="mb-10">
          <h1 className="mt-10 text-center text-4xl">{pallete.title}</h1>
          <div className="justify-center flex">
            <p className="mx-10">{moment(pallete.createdAt).fromNow()}</p>
            <div className="flex">
              <p className=" mr-2">{pallete.popularity}</p>
              <p className="material-icons">star_border</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          {pallete.categories.map((c, i) => (
            <div key={i} className="mx-2 bg-gray-400 px-4 py-2 rounded-xl">
              <h1>{c}</h1>
            </div>
          ))}
        </div>
        <div className="mb-24">
          <table className="w-2/4 mx-auto">
            <tr className="">
              <th className="text-center">Color</th>
              <th>Code</th>
            </tr>
            {pallete.data.map((p, i) => (
              <tr key={i} className="text-center">
                <td
                  style={{
                    backgroundColor: `${p.color}`,
                    height: "100px",
                    width: "300px",
                  }}
                ></td>
                <td>{p.color}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PalleteDetail;
