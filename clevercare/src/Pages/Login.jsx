import { useState } from 'react';
import { Link, } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    const [error, setError] = useState("");


    // Email Login
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long');
        }

    }

    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">Login please!</h3>
                <div className="flex justify-center items-center lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">
                            <p className='font-bold text-red-600'>{error}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='flex justify-evenly pb-2'>
                            <p>or Login with</p>
                        </div>
                        <div className='flex justify-evenly'>
                            <button className="btn btn-outline "><FcGoogle className='m-1 w-5 h-5' /> Google</button>
                        </div>

                        <Link to='/register'>
                            <p className="text-center py-2">If you are New here, <span className='link link-primary font-semibold'>Please Register...</span> </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;