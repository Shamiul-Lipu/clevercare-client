/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";

const UsersToy = ({ toy, i }) => {
    const { _id, toy_name, categoryName, seller_name, price, quantity, seller_email } = toy;


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const _id = form._id.value;
        const toy_name = form.toy_name.value;
        const seller_name = form.name.value;
        const seller_email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const imageUrl = form.imageUrl.value;
        const metaTextDescription = form.metaTextDescription.value;

        const dataObj = {
            _id, toy_name, seller_name, seller_email, categoryName, price, rating, quantity, imageUrl, metaTextDescription
        };
        console.log(dataObj)
        fetch(`http://localhost:5000/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
            .then(res => {
                res.json();
            })
    };


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
                    {/* <button htmlFor="my-modal-5" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                        Update
                    </button> */}

                    <label htmlFor="my-modal-5" className="btn flex items-center justify-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">Update</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn bg-red-600">Close</label>
                            </div>
                            <h3 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">Update Your Toys</h3>

                            <form
                                className="row g-3 border-2 border-cyan-500 p-4 rounded-lg"
                                onSubmit={handleSubmit}
                            // encType="multipart/form-data"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="hidden form-control">
                                        <label className="label">
                                            <span className="label-text">{_id}</span>
                                        </label>
                                        <input defaultValue={_id}
                                            type="text" name="_id" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" name="toy_name" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" defaultValue={seller_name} name="name" className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="text" name="email" defaultValue={seller_email} placeholder="email" className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="text" name="quantity" className="input input-bordered" />
                                    </div>
                                </div>

                                <div className="form-control py-5">
                                    <label htmlFor="imageUrl" className="form-label">
                                        Toy Image URL
                                    </label>
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        className="input input-bordered"
                                        id="imageUrl"
                                    />
                                </div>
                                <div className="form-control py-5">
                                    <label htmlFor="metaTextDescription" className="form-label">
                                        Meta description
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control input input-bordered"
                                        name="metaTextDescription"
                                        id="metaTextDescription"
                                    />
                                </div>

                                <div className="col-12">
                                    <button htmlFor="my-modal-5" type="submit" className="btn btn-primary">
                                        Update Your Toy!
                                    </button>
                                    <label htmlFor="my-modal-5" className="btn bg-red-700 mx-3">Close</label>
                                </div>
                            </form>
                        </div>
                    </div>


                </td>
                <td>
                    <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                        <FaTrash />
                        Delete
                    </button>
                </td>
            </tr>

        </>
    );
};

export default UsersToy;