import React from 'react';

const RecoveredCard = ({item}) => {
    return (
        <div className="bg-base-100 shadow-md rounded-2xl overflow-hidden p-4 space-y-3">
            <img
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full h-48 object-cover rounded-xl border-1 border-gray-300"
            />

            <h2 className="text-lg font-semibold">{item?.title}</h2>

            <div className="text-sm">
                <p><span className="font-medium">Category:</span> {item?.category}</p>
                <p><span className="font-medium">Lost At:</span> {item?.location}</p>
                <p><span className="font-medium">Recovered At:</span> {item?.recoveredLocation}</p>
                <p><span className="font-medium">Recovered On:</span> {item?.recoverdDate}</p>
                <p><span className="font-medium">Reported By:</span> {item?.name}</p>
            </div>
        </div>
    );
};

export default RecoveredCard;