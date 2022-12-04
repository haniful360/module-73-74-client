import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='text-center'>
                    <h2 className="text-center text-secondary text-xl my-2 ">{name}</h2>
                    <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot availabe</span>}</p>
                    <p className='my-2'>{slots.length} {slots.length > 1 ? "spaces" : 'space'} availabe</p>
                </div>
                <div className="card-actions justify-center">
                   
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal"
                     className="btn  btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary ">Book Appointment</label> 
                </div>
            </div>
           
        </div>
    );
};

export default Service;