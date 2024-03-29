/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const Category = ({ categoryTab }) => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(data)
  useEffect(() => {
    fetch(
      `https://server-side-rho-one.vercel.app/all_toy?categoryName=${categoryTab}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [categoryTab]);
  return (
    <div>
      {data &&
        data.slice(0, 4).map((details, i) => (
          <div key={i}>
            <div className="card card-side shadow-xl my-6 bg-sky-50">
              <figure>
                <img className="w-96 h-40" src={details.imageUrl} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{details.toy_name}</h2>
                <p className="font-light">{details.metaTextDescription}</p>
                <p className="font-semibold">Price: $ {details.price}</p>
                <p className="flex items-center font-semibold">
                  Ratings: {details.rating}{" "}
                  <FaStar className="mx-1 text-yellow-400" /> out of 5
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/toy/${details._id}`}>
                    <button
                      onClick={() =>
                        user
                          ? ""
                          : toast.error(
                              "You have to log in first to view details!",
                              {
                                style: {
                                  borderRadius: "10px",
                                  background: "#333",
                                  color: "#fff",
                                },
                              }
                            )
                      }
                      className="btn btn-primary bg-indigo-500"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Category;
