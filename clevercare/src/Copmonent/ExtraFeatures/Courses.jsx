import { useEffect, useState } from "react";
import AOS from 'aos';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://server-side-rho-one.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    useEffect(() => {
        AOS.init();
    }, [])

    // console.log(courses)
    return (
        <section className="py-10">
            <h3 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">Explore our Parenting and Child Development Courses</h3>
            <div className="pb-10">
                <h3 className=" text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-10 text-center text-xl font-bold">Unlock the Power of Parenting with Our Engaging Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">

                    {
                        courses && courses.slice(0, 6).map((course, i) => <div data-aos="fade-up" key={i} className="card  bg-base-100 shadow-xl">
                            <figure><img src={course.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Course: {course.course}</h2>
                                <p className="font-bold text-lg">{course.instructor}</p>
                                <p className="font-bold text-blue-800">Ratings: {course.reviews} out of 5</p>
                                <p>{course.reviewed} reviews</p>
                                <p className="font-bold text-green-700">$ {course.price}</p>
                                <p>This cours is for {course.for}</p>
                                <p>{course.description.slice(0, 150)}...<span className="text-xs text-blue-500 cursor-wait">more details</span>

                                </p>

                                <div className="card-actions justify-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <h3 className=" text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-10 text-center text-xl font-bold">Nurturing Future Stars, Future-Focused Courses for Children Ages 4-8</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">

                    {
                        courses && courses.slice(6, 12).map((course, i) => <div data-aos="fade-down" key={i} className="card  bg-base-100 shadow-xl">
                            <figure><img src={course.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Course: {course.course}</h2>
                                <p className="font-bold text-lg">{course.instructor}</p>
                                <p className="font-bold text-blue-800">Ratings: {course.reviews} out of 5</p>
                                <p>{course.reviewed} reviews</p>
                                <p className="font-bold text-green-700">$ {course.price}</p>
                                <p></p>
                                <p>This cours is for {course.for} <br /> {course.description.slice(0, 150)}...<span className="text-xs text-blue-500 cursor-wait">more details</span>

                                </p>

                                <div className="card-actions justify-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;