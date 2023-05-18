import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all_toy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-7">
            {
                toys.map((toy, i) => <GalleryCard key={i} toy={toy}></GalleryCard>)
            }
        </div>
    );
};

export default Gallery;