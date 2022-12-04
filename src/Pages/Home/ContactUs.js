import React from 'react';
import apointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <div className="py-12" style={{
            backgroundImage: `url(${apointment})`
        }}>
            <h4 className='font-bold text-xl text-secondary text-center'> Contact Us</h4>
            <h2 className='text-center text-white text-4xl '>Stay connected with us</h2>
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <div className="card flex-shrink-0 w-full max-w-sm  ">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email address" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <textarea className="textarea textarea-bordered mt-2" placeholder="Your Message"></textarea>
                        <div className="mt-6 mx-auto">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;