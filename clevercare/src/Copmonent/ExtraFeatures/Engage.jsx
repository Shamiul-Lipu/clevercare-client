/* eslint-disable react/no-unescaped-entities */
import 'swiper/css';
import { useEffect, useState } from 'react';
import { FaGooglePlay, FaApple, FaStopwatch, FaMoneyBillAlt, FaPhoneVolume, FaPeopleCarry } from "react-icons/fa";
import TrandingModal from './TrandingModal';

const Engage = () => {
    const [toys, setToys] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const [quote, setQuote] = useState('');

    const openModal = (data) => {
        setModalData(data);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // random qoute for parenting
    const quotes = [
        "The best inheritance a parent can give to their children is a few minutes of their time each day",
        "The way we talk to our children becomes their inner voice.",
        "Parenting is a constant reminder that life is not about you anymore, but about this little person you brought into the world.",
        "Your kids require you most of all to love them for who they are, not to spend your whole time trying to correct them.",
        "Children are not a distraction from more important work. They are the most important work",
        "The greatest gifts you can give your children are the roots of responsibility and the wings of independence",
        "Parenting is a journey that takes you to the highest highs and the lowest lows, but it is the most rewarding journey you will ever embark upon",
        "The most precious gift you can give your child is your time and attention.",
        "Your influence as a parent is powerful. Don't waste it. Little eyes are watching you",
        "Parenting is about guiding children towards becoming their best selves, not about molding them into mini versions of ourselves.",
        "Parenting is not about being perfect. It's about loving your children, doing your best, and never giving up",
        "Parenting is a constant balance between letting go and holding on.",
        "The best way to raise positive children in a negative world is to have positive parents who love and believe in them",
        "Your children need your presence more than your presents.",
        "The most important thing a parent can do for their children is to love them unconditionally.",
    ];

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        setQuote(randomQuote);
    };



    useEffect(() => {
        fetch('http://localhost:5000/all_toy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys)
    return (
        <section>
            {/* engage */}
            <div className="grid lg:grid-cols-2 gap-3 bg-slate-100">
                <div className="py-4 mx-auto">
                    <h3 className='text-center text-xl pb-3 font-bold'>Tranding Toys
                        <span className="badge badge-lg mx-2 bg-lime-300 text-black font-bold">NEW</span>
                    </h3>

                    <div className='text-center py-5'>
                        <button
                            className="btn text-white px-4 py-2 rounded-md"
                            onClick={() => openModal('Dynamic Data')}
                        >
                            Click Here to See All Tranding Toys
                        </button>
                        <TrandingModal isOpen={isOpen} closeModal={closeModal} toys={toys} data={modalData} />
                    </div>

                    <div className='text-center border-2 my-5 p-2 mx-auto'>
                        <h2 className='text-center text-xl pb-3 font-bold'>Generate Today's Parenting Inspiration Quote</h2>
                        <p className="w-full border border-black rounded-lg py-10 text-white font-bold text-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
                            {quote}
                        </p>
                        <button onClick={generateRandomQuote}
                            className='px-3 py-4 bg-emerald-500 hover:bg-emerald-700 text-white  font-medium rounded-lg text-lg my-5'
                        >Click for Inspiration</button>
                    </div>



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
        </section>
    );
};

export default Engage;