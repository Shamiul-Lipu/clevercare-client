/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AllToysTable from "../Copmonent/AllToysTable";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [dataLimit, setDataLimit] = useState(20);
    const [loading, setLoading] = useState(false)
    // console.log(toys.length)

    const option = [
        "Price high to low",
        "Price low to high"
    ]

    const [seletedPrice, setSelectedPrice] = useState(option[0])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/all_toy_data?limit=${dataLimit}`)
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [dataLimit])

    useEffect(() => {
        fetch(
            `http://localhost:5000/all_toy_data/${searchText}?&limit=${dataLimit}`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setToys(data);
            });
    }, [dataLimit, searchText]);

    const handlerSearch = () => {

    }
    // const s = seletedPrice.split(' ')[1]
    // console.log(s);

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
                const res = await fetch(`http://localhost:5000/all_toy_data?limit=${dataLimit}&value=${value}`)
                const data = await res.json();
                setToys(data)
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }
        }
        fetchData()
    }, [dataLimit, seletedPrice])


    return (
        <section className="p-2">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">All Toys</h3>
            <div className="">
                <div className="flex justify-center items-center py-7">
                    <div className="input-group mb-3">
                        <input
                            onBlur={(e) => setSearchText(e.target.value)}
                            type="text"
                            className="form-control input input-bordered"
                            placeholder="Insert a search text"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-outline-info"
                            type="button"
                            id="button-addon2"
                            onClick={handlerSearch}

                        >
                            Search
                        </button>
                    </div>

                    <div className="">
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


                </div>
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
                                <th>Available Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys && toys.map((toy, i) => <AllToysTable key={i} i={i} toy={toy}></AllToysTable>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>

            <button onClick={() => setDataLimit(100)} className={`btn btn-primary ${dataLimit === 20 ? 'block' : 'hidden'}`} disabled={toys.length !== 20} >
                show all
            </button>
        </section>
    );
};

export default AllToys;