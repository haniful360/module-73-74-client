import React from 'react';

const Service = ({img,title}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, commodi consectetur minima corporis recusandae enim aspernatur eum eveniet deserunt sint?</p>
                </div>
            </div>
        </div>
    );
};

export default Service;