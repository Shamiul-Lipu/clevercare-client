import Lottie from "lottie-react";
import anim from "../assets/icons/animation_lkxa9o3c.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex justify-center">
      <div className="grid md:flex justify-between items-center p-4 container rounded-lg">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5">
            Spark Your Child{`'`}s <br /> Love for Learning with <br /> Engaging
            Toys
          </h1>
          <p className="text-lg md:text-xl font-bold text-slate-500">
            Building Bright Futures: BrainBlox, Empowering Kids Through
            Education and Exploration!
          </p>
          <p className="text-xl font-bold text-blue-950">
            Nurturing Young Minds for Limitless Possibilities in the Future!
          </p>
          <Link to={"/login"}>
            <button className="my-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-emerald-800 hover:from-blue-800 hover:to-blue-800 text-white font-bold shadow-lg transition-all duration-1000">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <Lottie className="w-3/4 rounded-lg" animationData={anim} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
