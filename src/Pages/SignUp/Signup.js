import React from 'react';
import signup from '../../assets/signup.jpg'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';

const Signup = () => {
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent ">Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent ">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent ">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-neutral">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white mb-5">Login</button>
                                <img src={google} className="w-12 mx-auto border border-info rounded-full p-2" alt="" />
                            </div>
                            <p>Already have an account? <Link to={'/login'} className='link link-primary font-bold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;