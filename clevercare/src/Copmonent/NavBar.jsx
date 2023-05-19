
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/icons/playtime.png'
import { HiUserCircle } from "react-icons/hi2";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FiAlignLeft, FiX } from "react-icons/fi";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItem = <ul className='items-center justify-center py-1 space-x-8 md:flex '>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to='/all-toys'
                className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
            >
                All Toys
            </NavLink>

        </li>
        <li>
            <NavLink
                to='/my-toys'
                className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
            >
                My Toys
            </NavLink>

        </li>
        <li>
            <NavLink
                to='/add-toy'
                className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
            >
                Add A Toy
            </NavLink>

        </li>
        <li>
            <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
            >
                Register
            </NavLink>

        </li>
        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
            >
                Blog
            </NavLink>
        </li>
        <li>
            {
                user ?
                    <button onClick={handleLogOut} className="btn btn-active btn-primary">LogOut</button>
                    : <NavLink
                        to='/login'
                        className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-outline btn-primary')}
                    >
                        {/* <button className="btn btn-outline btn-primary ">Login</button> */} Login
                    </NavLink>
            }
        </li>
    </ul>



    // mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
    return (
        <div className='my-5 bg-gradient-to-r from-gray-200 via-sky-100 to-emerald-200 rounded-md'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <Link to='/' className='flex items-center'>
                        <img className='h-12 w-12 text-blue-500' src={Logo} alt='' />
                        <span className='ml-2 text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-900 via-emerald-900 to-purple-900 text-transparent bg-clip-text'>
                            Clever<span className='text-blue-900'>Care</span>
                        </span>
                    </Link>

                    {/* User display section */}
                    {
                        user && (
                            <label tabIndex={0} className={`btn btn-ghost btn-circle avatar`}>
                                <div className={` w-40  rounded-full`}>
                                    {
                                        user && (
                                            user?.photoURL
                                                ? <img src={user?.photoURL} />
                                                : <HiUserCircle className='w-full h-full' />
                                        )
                                    }
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100">
                                        {
                                            user && (
                                                user?.displayName
                                                    ? <span className="bg-gray-900 text-white py-1 px-2 rounded">
                                                        {user.displayName}
                                                    </span>
                                                    : <span className="bg-gray-900 text-white py-1 px-2 rounded">
                                                        Name not found
                                                    </span>
                                            )
                                        }
                                    </div>
                                </div>

                            </label>
                        )
                    }

                    {/* Nav Items Section */}
                    <div className='hidden lg:flex'>{navItem}</div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='btn btn-outline'>
                            {isMenuOpen ? <FiX className='w-7 h-7' /> : <FiAlignLeft className='w-7 h-7' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-transform duration-1000 ease-in-out  ${isMenuOpen ? 'translate-y-0' : '-translate-y-1/3'
                        }`}
                >
                    {isMenuOpen && <>{navItem}</>}
                </div>
            </div>
        </div>
    )
};

export default NavBar;