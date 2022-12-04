import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const Info = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InfoCard CardTitle = "Opening Hours" bgClassName="bg-gradient-to-r from-primary to-secondary" img={clock}></InfoCard>
            <InfoCard CardTitle = "Our Locations" bgClassName="bg-[#3A4256]"  img={marker}></InfoCard>
            <InfoCard CardTitle = "Contact Us" bgClassName="bg-gradient-to-r from-primary to-secondary" img={phone}></InfoCard>
        </div>
      
    );
};

export default Info;