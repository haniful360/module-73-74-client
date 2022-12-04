import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date,treatment, setTreatment }) => {
    const { _id,slots, name } = treatment;
    const handleBooking = (event) => {
        event.preventDefault();
        const lot = event.target.slot.value;
        console.log(lot);
        
        // to close the modal
        setTreatment(null);

    } 
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-secondary absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary py-2">Booking for: {name}!</h3>

                    <form onSubmit = {handleBooking} className='grid grid-cols-1 justify-items-center gap-4 mt-3'>
                        <input type="text" disabled placeholder="Type here" value = {format(date, 'PP')}className="input input-bordered input-secondary w-full max-w-xs" />
                        <select name= 'slot' className="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" placeholder="Your email" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" className="btn btn-secondary  text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;