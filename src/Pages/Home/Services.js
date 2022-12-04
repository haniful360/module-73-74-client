import React from 'react';
import Service from './Service';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
const Services = () => {
    const services = [
        { _id: 1, title: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: cavity },
    ]
    return (
        <div>
            <div className=' pt-16 pb-10'>
                <h4 className='upprcase text-secondary font-bold text-center'>Our services</h4>
                <h2 className='text-center text-3xl '>Service we Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <Service img={fluoride} title='Fluoride Treatment'></Service>
                <Service img={cavity} title='Cavity Filling'></Service>
                <Service img={whitening} title='Teeth Whitening'></Service>
            </div>
        </div>
    );
};

export default Services;