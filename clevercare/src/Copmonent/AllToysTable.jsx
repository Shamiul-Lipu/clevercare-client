/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";

// import { FaTrash } from "react-icons/fa";
const AllToysTable = ({ toy, i }) => {
    const { _id, toy_name, categoryName, seller_name, price, quantity } = toy;
    const { user } = useContext(AuthContext);
    return (
        <>
            <tr>
                <td>{i + 1}</td>
                <td>{/* onClick={() => handleDelete(_id)}  */}{toy_name}</td>
                <td>{categoryName}</td>
                <td>{seller_name}</td>
                <td>${price}</td>
                <td>{quantity} </td>
                <td>
                    {/* <button><FaTrash /></button> */}
                    {/* <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                        <FaTrash />
                        Delete
                    </button> */}
                    <Link to={`/toy/${_id}`}>
                        <button onClick={() => user ? '' : toast.error("You have to log in first to view details!", {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })} className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">

                            Details
                        </button>
                    </Link>


                </td>
            </tr>

        </>
    );
};

export default AllToysTable;