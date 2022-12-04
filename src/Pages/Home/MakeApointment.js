import React from 'react';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';
const MakeApointment = () => {
    return (
        <div className="flex justify-center items-center mt-20 others-padding" style={{
            backgroundImage: `url(${appointment})`,
            backgroundPosition: 'center',
            backgroundSize:'cover'
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-135px] ' src={doctor} alt='' />
            </div>
            <div className='flex-1'>
                <h3 className='text-secondary py-4 font-bold'>Appointment</h3>
                <h1 className="text-3xl text-white font-bold">Make an appointment Today</h1>
                <p className="py-6 w-5/6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeApointment;