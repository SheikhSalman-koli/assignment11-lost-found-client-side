import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import RecoveredCard from '../Componants/RecoveredCard';
import RecoveredTable from '../Componants/RecoveredTable';

const Recovered = () => {

    const data = useLoaderData()
    const recovereds = data.data
    // console.log(recovereds);
    const [layout, setLayout] = useState('card')

    const handleLayout = () => {
        setLayout(layout === 'card' ? 'table' : 'card')
    }

    return (
        <div className='my-10 max-w-11/12 mx-auto'>
            <h2 className="text-5xl text-[#F4B400] mb-4 text-center">Recovered Items</h2>
            {
                recovereds.length < 1 ?
                    (<div className='text-center space-y-8'>
                        <h1 className='text-4xl lg:text-8xl px-0 lg:px-40 text-red-500 text-center'>You haven’t recovered any lost items yet!</h1>
                    </div>)
                    :

                    <div>
                        <div className='flex justify-end mb-4'>
                            <button
                                className='btn bg-[#28A745] text-white hover:rounded-4xl'
                                onClick={handleLayout}
                            >
                                {layout === "card" ? "Switch to Table View" : "Switch to Card View"}
                            </button>
                        </div>
                        {
                            layout === 'card' ?
                                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                    {
                                        recovereds.map(item => <RecoveredCard
                                            key={item._id}
                                            item={item}
                                        ></RecoveredCard>)
                                    }
                                </div>)
                                :
                                (
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th className='hidden lg:block'>No.</th>
                                                    <th>photo</th>
                                                    <th>Category</th>
                                                    <th>Lost At</th>
                                                    <th>Recovered At</th>
                                                    <th>Recovered On</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    recovereds.map((recovered, index) => <RecoveredTable
                                                        key={recovered._id}
                                                        recovered={recovered}
                                                        index={index}
                                                    ></RecoveredTable>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                )
                        }
                    </div>
            }



        </div>
    );
};

export default Recovered;