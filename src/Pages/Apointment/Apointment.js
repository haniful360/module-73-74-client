import React, { useState } from 'react';
import ApointmentBanner from './ApointmentBanner';
import Availableapointment from './Availableapointment';

const Apointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ApointmentBanner date={date} setDate={setDate}></ApointmentBanner>
            <Availableapointment date={date}></Availableapointment>
        </div>
    );
};

export default Apointment;