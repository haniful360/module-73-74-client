import React from 'react';

const InfoCard = ({ img, CardTitle, bgClassName }) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClassName}`}>
                <figure className="pl-5 pt-5">
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title ">{CardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;