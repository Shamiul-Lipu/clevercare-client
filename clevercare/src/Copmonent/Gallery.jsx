import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://server-side-rho-one.vercel.app/all_toy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <section className="bg-indigo-50 rounded-lg">
      <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">
        Discover a visual showcase of available products
      </h3>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold text-slate-500 text-center">
        Embark on a Journey of Visual Delight: Discovering an Exquisite Showcase
        of the Array of Available Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1 py-7">
        {toys.map((toy, i) => (
          <GalleryCard key={i} toy={toy}></GalleryCard>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
