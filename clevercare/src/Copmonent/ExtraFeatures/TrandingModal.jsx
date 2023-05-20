/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TrandingModal = ({ isOpen, closeModal, toys }) => {
    if (!isOpen) return null;

    console.log(toys)

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {
                            toys.slice(0, 7).map(toy => <div key={toy._id}>
                                <div className="indicator py-1 bg-slate-200 p-1 rounded-md">
                                    <h5 className="mr-1 font-semibold">{toy.toy_name.slice(0, 15)}</h5>
                                    <span className="indicator-item badge badge-secondary">Get Up To 50% discount</span>
                                    <Link to={`/toy/${toy._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </div>
                            </div>)
                        }
                        <p>GET THE DISCOUNT, SEE DETAILS</p>
                        <div className="card-actions justify-end">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrandingModal;