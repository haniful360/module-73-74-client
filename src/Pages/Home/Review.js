import React from 'react';

const Review = (props) => {
    const { name, description, img, state } = props.review;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className='flex pt-2 pb-8'>
                    <div className="w-12 ml-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                    <div className='ml-4'>
                        <h2 className='font-bold'>{name}</h2>
                        <p>{state}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
