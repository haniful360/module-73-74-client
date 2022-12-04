import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
// import bg from '../../assets/images/bg.png'
import  './Banner.css';


const Banner = () => {
    return (
        <div className='bannerBackground'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src={chair} className="max-w-sm chair-img rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className=" banner-title text-5xl font-bold pr-16">Your New Smile Starts Here</h1>
                        <p className="py-6 pr-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti e aque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;