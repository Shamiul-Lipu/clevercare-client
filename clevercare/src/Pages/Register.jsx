/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';
import { FcGoogle } from 'react-icons/fc';


const Register = () => {
    const [error, setError] = useState("");
    const { createUser, auth, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
        }
        // console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: `${photo}`
                })
                toast.success('User Successfully Created!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
                swal("Successfully", "User Created!", "success");
                // console.log(createdUser)
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    // Google Login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                navigate(from, { replace: true })
                swal("Successfully", "User Created!", "success");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=''>
            <div className="card flex-shrink-0 w-full mt-4 bg-base-100">
                <div className="card-body items-center min-h-screen bg-base-200">
                    <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800 bg-clip-text py-5 text-center">Please Register!</h3>


                    <form action="" onSubmit={handleSubmit} >
                        <p className='text-red-500 font-medium'>{error}</p>
                        <label className="input-group input-group-md mb-2">
                            <span className='w-1/3 bg-slate-600 text-white'>Name</span>
                            <input type="text" name='name' placeholder="name" className="input input-bordered input-md w-full" />
                        </label>
                        <label className="input-group input-group-md">
                            <span className='w-1/3 bg-slate-600 text-white'>Email</span>
                            <input type="text" name='email' placeholder="Enter email" className="input input-bordered input-md w-full" required />
                        </label>
                        <label className="input-group input-group-md py-2">
                            <span className='w-1/3 bg-slate-600 text-white'>Password</span>
                            <input type="password" name='password' placeholder="password" className="input input-bordered input-md w-full" required />
                        </label>

                        <label className="input-group input-group-md py-2">
                            <span className='w-1/3 bg-slate-600 text-white'>PhotoUrl:</span>
                            <input type="text" name='photo' placeholder="url" className="input input-bordered input-md w-full" />
                        </label>

                        <button type='submit' className='btn btn-primary w-full'>Register</button>
                    </form>
                    <div className='flex justify-evenly pb-2'>
                        <p>or Register with</p>
                    </div>
                    <div className='flex justify-evenly'>
                        <button onClick={handleGoogleLogin} className="btn btn-outline "><FcGoogle className='m-1 w-5 h-5' /> Google</button>
                    </div>

                    <Link to='/login'>
                        <p className="link link-primary font-semibold">Already have an account?</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;