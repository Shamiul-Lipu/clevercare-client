import Lottie from "lottie-react";
import book from "../assets/icons/book.json";

const Banner = () => {
    return (
        <div className="">
            <div className="mx-auto my-auto">
                <h1 className="text-5xl font-extrabold">Spark Your Child{`'`}s <br /> Love for Learning with <br /> Engaging Toys</h1>
            </div>
            <div className="">
                <Lottie className="w-2/4" animationData={book} />
            </div>
        </div>
    );
};

export default Banner;