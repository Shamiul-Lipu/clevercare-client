/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useTitle('Toy Details')

    useEffect(() => {
        fetch(`https://server-side-rho-one.vercel.app/toy/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setDetails(data);
            });
    }, []);
    // console.log(details);
    return (
        <div>
            {
                details && <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={details.imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{details.toy_name}</h1>
                            <div className="grid gap-3 py-4 text-lg">
                                <p className="font-bold text-blue-800">Ratings: {details.rating} out of 5</p>
                                <p className="font-bold text-green-700">$ {details.price}</p>
                                <p><span className="font-bold">Toy Category:</span> {details.categoryName}</p>
                                <p><span className="font-bold">Available Quantity:</span> {details.quantity}</p>
                                <p className=""><span className="font-bold">Seller Name:</span> {details.seller_name}</p>
                                <p><span className="font-bold">Seller Email:</span> {details.seller_email}</p>
                                <p className="font-semibold"><span>Descriptoin:</span>{details.metaTextDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Details;