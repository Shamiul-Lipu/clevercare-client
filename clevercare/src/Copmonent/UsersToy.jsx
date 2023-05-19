/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const UsersToy = ({ toy, i, handleDelete }) => {
    const { _id, toy_name, categoryName, seller_name, price, quantity, seller_email } = toy;

    return (
        <>
            <tr>
                <td>{i + 1}</td>
                <td>{/* onClick={() => handleDelete(_id)}  */}{toy_name}</td>
                <td>{categoryName}</td>
                <td>{seller_name}</td>
                <td>{price}</td>
                <td>{quantity} </td>
                <td>
                    <Link to={`/update/${_id}`}>
                        <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">Update</button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                        <FaTrash />
                        Delete
                    </button>
                </td>
            </tr>

        </>
    );
};

export default UsersToy;