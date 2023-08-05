import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFile, FaUsers, FaUserGraduate, FaBrain } from "react-icons/fa";

const State = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div
          data-aos="zoom-out-down"
          className="flex flex-col text-center w-full mb-20"
        >
          <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">
            Journey Through Data, User Insights on Our Platform
          </h3>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500 font-semibold">
            Igniting Young Minds with Science and Equipping Parents with
            Knowledge. Join us in Fostering a Love for Learning and Cultivating
            Stronger Bonds Through our Kids Science Kits and Empowering
            Parenting Courses.
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="flex flex-wrap -m-4 text-center text-indigo-900"
        >
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg">
              <FaUserGraduate className="w-7 h-7 inline-block mb-1" />
              <h2 className="title-font font-medium text-3xl text-indigo-900">
                32.7K+
              </h2>
              <p className="leading-relaxed text-indigo-800">
                Parents Course Completion
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg">
              <FaUsers className="w-7 h-7 inline-block mb-1" />
              <h2 className="title-font font-medium text-3xl ">50.3K+</h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg">
              <FaBrain className="w-7 h-7 inline-block mb-1" />
              <h2 className="title-font font-medium text-3xl ">100+</h2>
              <p className="leading-relaxed">Learning Kits</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-200 px-4 py-6 rounded-lg">
              <FaFile className="w-7 h-7 inline-block mb-1" />
              <h2 className="title-font font-medium text-3xl ">12+</h2>
              <p className="leading-relaxed">Parenting & Nutrition Course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default State;
