/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const Category = ({ categoryTab }) => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(data)
    useEffect(() => {
        fetch(`http://localhost:5000/all_toy?categoryName=${categoryTab}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [categoryTab])
    return (
        <div>
            {
                data && data.slice(0, 4).map((details, i) => <div key={i}>

                    <div className="card card-side bg-base-100 shadow-xl my-6">
                        <figure><img className="w-96 h-40" src={details.imageUrl} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{details.toy_name}</h2>
                            <p>{details.metaTextDescription}</p>
                            <p>Price: {details.price}</p>
                            <p>Ratings: {details.rating} out of 5</p>
                            <div className="card-actions justify-end">
                                <Link to={`/toy/${details._id}`}>
                                    <button onClick={() => user ? '' : toast.error("You have to log in first to view details!", {
                                        style: {
                                            borderRadius: '10px',
                                            background: '#333',
                                            color: '#fff',
                                        },
                                    })} className="btn btn-primary">View Details</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Category;