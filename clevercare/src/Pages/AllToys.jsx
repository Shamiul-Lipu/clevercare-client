import { useEffect, useState } from "react";
import AllToysTable from "../Copmonent/AllToysTable";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <section className="p-2">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">All Toys</h3>
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
        </section>
    );
};

export default AllToys;