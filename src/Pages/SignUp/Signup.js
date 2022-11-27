import React, { useContext } from 'react';
import signup from '../../assets/signup.jpg'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const auth = getAuth();
    const handleLogin = (data) => {
        const { email, password, fname } = data;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: fname,
                })
                result.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-white my-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-5/12 lg:ml-5">
                        <img src={signup} alt="" />
                    </div>
                    <div className="card flex-shrink-0 lg:w-7/12 max-w-sm border-2 bg-base-100">

                        <div className="card-body">
                            <h1 className='text-accent font-bold text-3xl text-center mb-5'>Create an account!</h1>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <label className="label">
                                    <span className="label-text text-accent ">Create your account as a, </span>
                                </label>

                                {/* Radio buttons */}

                                <div className='grid grid-cols-2 gap-2'>
                                    <button className='flex border border-gray-300 rounded py-2 px-3'><input type="radio" name="user" value="user" {...register("account")} className="radio radio-neutral mr-4" checked />
                                        User
                                    </button>
                                    <button className='flex border border-gray-300 rounded py-2 px-3'><input type="radio" name="seller" value="seller" {...register("account")} className="radio radio-neutral mr-4" />
                                        Seller</button>
                                </div>


                                <div className="form-control w-full mt-5">
                                    <label className="label">
                                        <span className="label-text text-lg">Full Name</span>
                                    </label>
                                    <input type="text" {...register("fname", { required: "Full name is required" })} className="input input-bordered w-full" />
                                    {errors.fname && <p role="alert" className='text-error'>{errors.fname?.message}</p>}
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: "Email Address is required" })}
                                        className="input input-bordered w-full" />
                                    {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full mt-5">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: "Password is required" })} className="input input-bordered w-full" />
                                    {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                                    <label className="label">
                                        <span className="label-text ">Forget Password?</span>
                                    </label>
                                </div>

                                <input className='btn btn-primary text-white w-full mt-5' type="submit" />

                                <div className="divider">OR</div>
                                <button className='btn btn-primary btn-outline w-full' type="submit">
                                    <img src={google} className="w-12 p-3" alt="" />
                                    CONTINUE WITH GOOGLE</button>

                                <label className="label">
                                    <p>Already have an account? <Link to={'/login'} className='link link-primary text-x font-bold'>Login</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;