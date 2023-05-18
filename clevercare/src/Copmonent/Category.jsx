/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Category = ({ categoryTab }) => {
    const [data, setData] = useState([])
    // console.log(data)
    useEffect(() => {
        fetch(`http://localhost:5000/all_toy?categoryName=${categoryTab}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [categoryTab])
    return (
        <div>
            {
                data && data.map((details, i) => <div key={i}>

                    <div className="card card-side bg-base-100 shadow-xl my-6">
                        <figure><img className="w-96 h-40" src={details.imageUrl} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{details.toy_name}</h2>
                            <p>{details.metaTextDescription}</p>
                            <p>Price: {details.price}</p>
                            <p>Ratings: {details.rating} out of 5</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Category;