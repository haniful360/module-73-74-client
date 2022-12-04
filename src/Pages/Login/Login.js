import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error2] = useSignInWithGithub(auth);
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Alt label</span> 
                        </label>
                    </div>

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

export default Login;