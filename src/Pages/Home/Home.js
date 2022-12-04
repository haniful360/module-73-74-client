import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeApointment from './MakeApointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Banner />
                <Info></Info>
                <Services></Services>
            </div>
            <Treatment></Treatment>
            <MakeApointment></MakeApointment>
            <div className='w-11/12 mx-auto'>
                <Testimonials></Testimonials>

            </div>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;