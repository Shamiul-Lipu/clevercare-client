import { useEffect, useState } from "react";
import AllToysTable from "../Copmonent/AllToysTable";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [dataLimit, setDataLimit] = useState(20);


    useEffect(() => {
        fetch(`http://localhost:5000/all_toy_data?limit=${dataLimit}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [dataLimit])

    useEffect(() => {
        fetch(
            `http://localhost:5000/all_toy_data/${searchText}`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setToys(data);
            });
    }, [searchText]);

    const handlerSearch = () => {
        console.log(searchText);

    };


    return (
        <section className="p-2">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">All Toys</h3>
            <div className="">
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
            <button onClick={() => setDataLimit(100)} className={`btn btn-primary ${dataLimit === 100 && dataLimit != 20 ? 'hidden' : 'block'}`}  >
                show all
            </button>
        </section>
    );
};

export default AllToys;