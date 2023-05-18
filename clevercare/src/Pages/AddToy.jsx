import { useState } from "react";

const AddToy = () => {
    const user = 'asi'
    const toyCategories = [
        "Math",
        "Science",
        "Language",
        "Engineering",
    ];

    const [selectedToyCategory, setselectedToyCategory] = useState(
        toyCategories[0]
    );

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setselectedToyCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const toy_name = form.toy_name.value;
        const seller_name = form.name.value;
        const seller_email = form.email.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const imageUrl = form.imageUrl.value;
        const metaTextDescription = form.metaTextDescription.value;

        const dataObj = {
            toy_name, seller_name, seller_email, categoryName, price, rating, quantity, imageUrl, metaTextDescription
        };
        console.log(dataObj)
    };

    return (
        <section className="p-3 bg-light">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">Add Your Toys</h3>
            <form
                className="row g-3 border-2 border-cyan-500 p-4 rounded-lg"
                onSubmit={handleSubmit}
            // encType="multipart/form-data"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + 0} className="input input-bordered" readOnly />
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

                <div className="form-control">
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

                <div className="col-md-4 py-5">
                    <label htmlFor="inputState" className="form-label pr-2">
                        Categories
                    </label>
                    <select
                        id="inputState"
                        name="categoryName"
                        className="form-select select select-primary w-full max-w-xs"
                        value={selectedToyCategory}
                        onChange={handleChangeSelectedValue}
                    >
                        {toyCategories.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
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
                    <button type="submit" className="btn btn-primary">
                        Upload Your Toy
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddToy;