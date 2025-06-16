import React from 'react';
import { useLoaderData } from 'react-router';

const Recovered = () => {

    const data = useLoaderData()
    const recovereds = data.data
    // console.log(recovereds);

    return (
        <div className='my-10 max-w-11/12 mx-auto'>
            <h2 className="text-5xl text-[#F4B400] mb-4 text-center">Recovered Items</h2>
            {
                recovereds.length < 1 ?
                    (<div className='text-center space-y-8'>
                        <h1 className='text-4xl lg:text-8xl px-0 lg:px-40 text-red-500 text-center'>You haven’t recovered any lost items yet!</h1>
                    </div>)
                    :
                    (<div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='hidden lg:block'>No.</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Lost At</th>
                                    <th>Recovered At</th>
                                    <th>Recovered On</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                recovereds.map((recovered, index)=> <tr key={recovered._id} className="hover:bg-base-300">
                                    <th className='hidden lg:block'>{index + 1}</th>
                                    <td>
                                        {recovered.title.split(' ').slice(0,3).join(' ')}
                                        {recovered.title.split(' ').length > 2 ? '...' : ''}
                                    </td>
                                    <td>{recovered.category}</td>
                                    <td>{recovered.location}</td>
                                    <td>{recovered.recoveredLocation}</td>
                                    <td>{recovered.recoverdDate}</td>
                                </tr>)
                              }
                                
                            </tbody>
                        </table>
                    </div>)
            }

        </div>
    );
};

export default Recovered;