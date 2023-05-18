/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GalleryCard = ({ toy }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            {/* <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure>
                    {
                        toy.imageUrl && <img src={toy.imageUrl} alt="Shoes" />
                    }
                </figure>
                <div className="card-body">

                </div>
            </div> */}
            <div className="" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="relative card w-96 h-96 bg-base-100 shadow-xl">
                    <figure>
                        {toy.imageUrl && <img src={toy.imageUrl} alt="img" />}
                    </figure>
                    <div className="card-body ">
                        <div className="absolute inset-0 p-3 opacity-0 bg-gray-800 text-white rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-80 hover:transform ">
                            <h5><span className=" text-lg font-bold">Toy Name:</span> {toy.toy_name}</h5>
                            <p><span className=" text-lg font-bold">Category:</span> {toy.categoryName}</p>
                            <p><span className=" text-lg font-bold">Ratings:</span> {toy.rating} out of 5</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default GalleryCard;