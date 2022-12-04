import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const Availableapointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
     fetch('http://localhost:5000/service')
     .then(res => res.json())
     .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-primary'>
                Availabe Apointment: {format(date, 'PP')}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-16 padding my-24'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service = {service}
                    setTreatment ={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment ={setTreatment}> </BookingModal>
            }
        </div>
    );
};

export default Availableapointment;