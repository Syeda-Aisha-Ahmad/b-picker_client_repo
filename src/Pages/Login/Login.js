import React from 'react';
import login from '../../assets/login.jpg'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                        <div className="card-body">
                            <h1 className='text-accent font-bold text-3xl text-center'>Login!</h1>
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
                            <p>New to B-Picker? <Link to={'/signup'} className='link link-primary font-bold'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;