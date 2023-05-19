import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateModal = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    // console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setDetails(data);
            });
    }, []);
    console.log(details);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // const _id = form._id.value;
        const categoryName = form.categoryName.value;
        const toy_name = form.toy_name.value;
        const seller_name = form.name.value;
        const seller_email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const imageUrl = form.imageUrl.value;
        const metaTextDescription = form.metaTextDescription.value;

        const dataObj = {
            toy_name, categoryName, seller_name, seller_email, price, rating, quantity, imageUrl, metaTextDescription
        };
        // console.log(dataObj)
        fetch(`http://localhost:5000/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataObj)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Toy Successfully Updated!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
                swal({
                    title: "Data Update",
                    text: "The data has been successfully updated!",
                    icon: "success",
                    timer: 2000
                });
            } else {
                swal({
                    title: "Update Failed",
                    text: "Failed to update the data. Please try again.",
                    icon: "error",
                    timer: 1000
                });
            }
        })
    };


    return (
        <div>

            <div className="">
                <div className="">
                    <h3 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">Update Your Toys</h3>

                    {
                        details && <form
                            className="row g-3 border-2 border-cyan-500 p-4 rounded-lg"
                            onSubmit={handleSubmit}
                        // encType="multipart/form-data"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="hidden form-control">
                                    <label className="label">
                                        <span className="label-text">{details._id}</span>
                                    </label>
                                    <input defaultValue={details._id}
                                        type="text" name="_id" className="input input-bordered" required />
                                </div>
                                <div className="hidden form-control">
                                    <label className="label">
                                        <span className="label-text">{details.categoryName}</span>
                                    </label>
                                    <input defaultValue={details.categoryName}
                                        type="text" name="categoryName" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name="toy_name"
                                        defaultValue={details.toy_name} className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" defaultValue={details.seller_name} name="name" className="input input-bordered" readOnly required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={details.seller_email} placeholder="email" className="input input-bordered" readOnly required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={details.price} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="rating" defaultValue={details.rating} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
                                    </label>
                                    <input type="text" name="quantity"
                                        defaultValue={details.quantity} className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control py-5">
                                <label htmlFor="imageUrl" className="form-label">
                                    Toy Image URL
                                </label>
                                <input
                                    type="url"
                                    name="imageUrl"
                                    defaultValue={details.imageUrl}
                                    className="input input-bordered"
                                    id="imageUrl" required
                                />
                            </div>
                            <div className="form-control py-5">
                                <label htmlFor="metaTextDescription" className="form-label">
                                    Meta description
                                </label>
                                <textarea
                                    type="text"
                                    className="form-control input input-bordered"
                                    defaultValue={details.metaTextDescription}
                                    name="metaTextDescription"
                                    id="metaTextDescription"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <button htmlFor="my-modal-5" type="submit" className="btn btn-primary">
                                    Update Your Toy!
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </div>

        </div>
    );
};

export default UpdateModal;