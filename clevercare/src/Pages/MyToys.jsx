/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import UsersToy from "../Copmonent/UsersToy";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import swal from "sweetalert";
import useTitle from "../Hooks/useTitle";

const MyToys = () => {
    useTitle('My Toys');
    const [toys, setToys] = useState([]);
    const [reload, setReload] = useState(false)
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)

    // sort options
    const option = [
        "Price high to low",
        "Price low to high"
    ]
    const [seletedPrice, setSelectedPrice] = useState(option[0])


    useEffect(() => {
        fetch(`https://server-side-rho-one.vercel.app/users_inserted_toy?seller_email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, reload])

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`https://server-side-rho-one.vercel.app/update/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            toast.success('Deleted Toy!', {
                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                }
                            });
                            swal("Deleted!", "Your toy has been deleted.", "success");
                            setReload(!reload)
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting toy:", error);
                        swal("Oops!", "Something went wrong. Please try again.", "error");
                    });
            } else {
                swal("Cancelled", "Your Toy Data is safe!", "error");
            }
        });
    }

    // price sorting api and functionallity
    // get selected sort
    const handleChangeSelectedValue = (event) => {
        // console.log(event.target.value);
        setSelectedPrice(event.target.value)
    };
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const value = seletedPrice.split(' ')[1]
                // console.log(value);
                const res = await fetch(`https://server-side-rho-one.vercel.app/users_inserted_toy?seller_email=${user.email}&value=${value}`)
                const data = await res.json();
                setToys(data)
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }
        }
        fetchData()
    }, [reload, seletedPrice])



    return (
        <section className="p-2">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">My Toys</h3>

            {/* sort by price */}
            <div className="w-1/2 py-4">
                <label htmlFor="inputState" className="form-label">
                    Sort by Price
                </label>
                <select
                    id="inputState"
                    name="categoryName"
                    className="form-select select select-primary w-full"
                    value={seletedPrice}
                    onChange={handleChangeSelectedValue}
                >
                    {option.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>


            <div className="">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Toy Name</th>
                                <th>Categoy</th>
                                <th>Seller Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys && toys.map((toy, i) => <UsersToy key={i} i={i} handleDelete={handleDelete} toy={toy}></UsersToy>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </section>
    );
};

export default MyToys;