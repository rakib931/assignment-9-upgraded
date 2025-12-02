import React from 'react';

const ExtraCard = ({a}) => {
    return (
        <div className='max-w-[250px] bg-gray-300 min-h-[150px] rounded-md'>
            <img className='w-full h-[150px]' src={a.image} alt="" />
            <h1 className='text-xl font-semibold text-center '>{a.providerName}</h1>
            <p className='text-center'>⭐ {a.rating}</p>
        </div>
    );
};

export default ExtraCard;