import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Table from '../Componants/Table';
import { HiH1 } from 'react-icons/hi2';

const MyItem = () => {

    const myitems = useLoaderData()
    const [items, setItems] = useState(myitems.data)

    // console.log(items);
    return (
        <div className='my-10'>
            <h2 className="text-5xl text-[#F4B400] mb-4 text-center">My Items</h2>

            {items.length < 1 ?
                (<>
                  <div className='text-center space-y-8'>
                    <h1 className='text-4xl lg:text-8xl px-0 lg:px-40 text-red-500 text-center'>You did not Add any Item yet!</h1>
                  <Link to='/AddItem'><button className='btn btn-primary'>Add Item</button></Link>
                  </div>
                </>
                )
                : (
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        No.
                                    </th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    items?.map((item, index) => <Table
                                        key={item._id}
                                        index={index}
                                        item={item}
                                        items={items}
                                        setItems={setItems}
                                    ></Table>)
                                }
                            </tbody>
                        </table>
                    </div>)
            }

        </div>
    );
};

export default MyItem;