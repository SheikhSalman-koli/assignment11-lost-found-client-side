import React from 'react';

const RecoveredTable = ({ recovered, index }) => {
    return (
        <tr>
            <th className='hidden lg:block'>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={recovered?.thumbnail}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        {/* <div className="font-bold">Hart Hagerty</div> */}
                        <div className="text-sm hidden lg:block">{recovered?.title}</div>
                    </div>
                </div>
            </td>
            <td>{recovered?.category}</td>
            <td>{recovered?.location}</td>
            <td>{recovered?.recoveredLocation}</td>
            <td>{recovered?.recoverdDate}</td>
        </tr>
    );
};

export default RecoveredTable;