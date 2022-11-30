import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../assets/login.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase/Firebase.config';
import google from '../../assets/google.png';
import useToken from '../../hook/useToken/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState();
    const [userEmail, setUserEmail] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [LogUserEmail, setLogUserEmail] = useState('')
    const [token] = useToken(LogUserEmail);

    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('')
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLogUserEmail(data.email)

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    // google login
    const googleLoginUser = () => {
        const account = "buyer";
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email, account)
            })
            .catch(error => {
                console.catch(error)
            })
    }

    const saveUser = (name, email, account) => {
        const user = { name, email, account };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }

    // reset pass

    const getEmail = event => {
        const email = event.target.value;

        setUserEmail(email)
        console.log(email)

    }

    const resetPass = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent')
            })
            .catch(error => {
                console.error(error)
            })
    }

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
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="text" onBlur={getEmail} />
                                    <input type="email" {...register("email", {
                                        required: "Email Address is required",
                                        onBlur: (event) => setUserEmail(event.target.value)
                                    })}
                                        className="input input-bordered w-full" />
                                    {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full mt-5">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: "Password is required" })} className="input input-bordered w-full" />
                                    {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                                    {loginError && <p className='text-error'>{loginError}</p>}
                                    <label className="label">
                                        <span className="label-text ">Forget Password? <span className='font-bold' onClick={resetPass}>Reset</span></span>
                                    </label>
                                </div>

                                <input className='btn btn-primary text-white w-full mt-5' type="submit" />

                                <div className="divider">OR</div>
                                <button onClick={googleLoginUser} className='btn btn-primary btn-outline w-full' type="submit">
                                    <img src={google} className="w-12 p-3" alt="" />
                                    CONTINUE WITH GOOGLE</button>
                                <label className="label">
                                    <span className="label-text ">New to Doctors portal? <Link to={'/signup'} className='text-primary text-x font-bold'>Create New Account</Link></span>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;