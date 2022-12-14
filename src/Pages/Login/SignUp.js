import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubuser, githubloading, githubError] = useSignInWithGithub(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if(user || gUser || githubuser){
        console.log(user || gUser || githubuser);
    }
    if (gLoading || githubloading || loading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError || githubError) {
        signInError = <small><p className='text-red-500 mb-2'>{error?.message || gError || githubError}</p></small>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (

        <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("text", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.text?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email address'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be at least 6 characters'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        <p className='mt-2'><small>All ready have an account? <Link  className='text-primary' to='/login'>Please Login</Link></small> </p>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                    <button onClick={() => signInWithGithub()}
                        className="btn btn-outline">Continue with Github</button>
                </div>
            </div>
        </div>
    );
};

export default SingUp;