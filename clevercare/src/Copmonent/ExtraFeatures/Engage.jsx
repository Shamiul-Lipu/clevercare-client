// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
import { FaGooglePlay, FaApple, FaStopwatch, FaMoneyBillAlt, FaPhoneVolume, FaPeopleCarry } from "react-icons/fa";

const Engage = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all_toy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys)
    return (
        <div>
            {/* engage */}
            <div className="grid grid-cols-2 gap-3 bg-slate-100">
                <div className="py-4">
                    <h3 className='text-center text-xl pb-3'>Tranding Toys
                        <span className="badge badge-lg mx-2 bg-lime-300 text-black font-bold">NEW</span>
                    </h3>
                    <Swiper

                        spaceBetween={6}

                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        {
                            toys && toys.map(toy => <SwiperSlide key={toy._id} className='border-2 border-lime-500 rounded-md p-1'>
                                <figure><img className="w-full h-40" src={toy.imageUrl} /></figure>
                                <p className='font-bold text-green-700'>$ {toy.price}</p>
                                <p className=" ">Grab Your <span className='text-lg  text-orange-600 font-bold'>25% Discount!!</span></p>
                                <p className="font-medium text-orange-950">Unlock exclusive savings by using our form app!</p>

                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
                <div className="text-center mx-auto my-auto py-4">
                    <div className=''>
                        <h3 className='text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center'>CleverCare Toys</h3>
                        <h4 className='text-xl font-bold text-blue-900'>Download Our Mobile App</h4>
                        <h5 className='text-lg font-bold text-blue-900'>Unlock Up to <span className='text-orange-500 text-3xl'>50% Off!</span></h5>
                    </div>
                    <div className=''>
                        <p className='py-2'><button className="btn btn-outline "><FaApple className='w-5 h-5 mx-1' /> App Store</button></p>
                        <button className="btn btn-outline"><FaGooglePlay className='w-5 h-5 mx-1' /> Google Play</button>
                    </div>
                </div>
            </div>
            {/* extra */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 text-white bg  bg-gradient-to-r from-blue-950 via-purple-950 to-emerald-950'>
                <div className='mx-auto my-auto flex justify-center items-center'>
                    <FaStopwatch className='text-white mx-3 w-10 h-10' />
                    <div>
                        <h4 className='font-bold'>FAST SHIPPING</h4>
                        <p>Fast Shipping</p>
                    </div>
                </div>
                <div className='mx-auto my-auto flex justify-center items-center'>
                    <FaMoneyBillAlt className='text-white mx-3 w-10 h-10' />
                    <div>
                        <h4 className='font-bold'>ONLINE PAYMENT</h4>
                        <p>Payment methods</p>
                    </div>
                </div>
                <div className='mx-auto my-auto flex justify-center items-center'>
                    <FaPhoneVolume className='text-white mx-3 w-10 h-10' />
                    <div>
                        <h4 className='font-bold'>24/7 SUPPORT</h4>
                        <p>Unlimited help desk</p>
                    </div>
                </div>
                <div className='mx-auto my-auto flex justify-center items-center'>
                    <FaPeopleCarry className='text-white mx-3 w-10 h-10' />
                    <div>
                        <h4 className='font-bold'> On time Delivery</h4>
                        <p>On time Delivery </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engage;