import parents from "../../assets/icons/undraw_play_time_7k7b.png";
import { FaFileAlt, FaChild, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom"
          className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
        >
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={parents}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="400"
            className="flex flex-col mb-5 lg:items-start items-center bg-slate-100 p-2 rounded-lg"
          >
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <FaChild className="w-7 h-7" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Endless Variety
              </h2>
              <p className="leading-relaxed text-base">
                Cultivating the Infinite: Guiding the Growth of Young Minds with
                a Multitude of Educational and Enchanting Kids Learning Toy Kits
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
            className="flex flex-col mb-5 lg:items-start items-center bg-slate-100 p-2 rounded-lg"
          >
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <FaFileAlt className="w-7 h-7" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Discover Parenting & Child Development Courses
              </h2>
              <p className="leading-relaxed text-base">
                Elevate Your Parenting Experience: Embark on a Journey of
                Knowledge and Transformation with Dynamic Child Development
                Courses.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="600"
            className="flex flex-col mb-5 lg:items-start items-center bg-slate-100 p-2 rounded-lg"
          >
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <FaClock className="w-7 h-7" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Round-the-Clock Support Available
              </h2>
              <p className="leading-relaxed text-base">
                Comprehensive and Compassionate Support, Anytime You Need It:
                Our 24/7 Support System Stands Ready to Offer Expertise and
                Comfort as You Embrace the Adventure of Parenthood and Learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
