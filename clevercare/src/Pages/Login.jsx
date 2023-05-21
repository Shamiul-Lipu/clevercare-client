/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useParams, } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import swal from 'sweetalert';
import useTitle from '../Hooks/useTitle';



const Login = () => {
    const [logged, setLogged] = useState(false)
    const [error, setError] = useState("");
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { id } = useParams()

    // if user not looged in but access into private route this will alert user
    // console.log(location.state?.from?.pathname, id)
    if (!logged) {
        if (location.state?.from?.pathname == '/my-toys' || location.state?.from?.pathname == '/add-toy') {
            swal({
                title: "User Not Logged In",
                text: "Please log in to access this feature!",
                icon: "error",
                timer: 2000
            })
        }
    }

    // Email Login
    const handleLogin = e => {
        e.preventDefault();
        setLogged(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                // console.log(currentUser)
                form.reset();
                navigate(from, { replace: true })
                swal("User Login!", "Successfull!", "success")
            })
            .catch(error => {
                setError(error.message);
                // console.log(error);
            })
    }

    // Google Login
    const handleGoogleLogin = () => {
        setLogged(true)
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                navigate(from, { replace: true })
                swal("Good job!", "User Logged In Successfully!", "success");
            })
            .catch(error => {
                console.log(error);
            })
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
                            <button onClick={handleGoogleLogin} className="btn btn-outline "><FcGoogle className='m-1 w-5 h-5' /> Google</button>
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