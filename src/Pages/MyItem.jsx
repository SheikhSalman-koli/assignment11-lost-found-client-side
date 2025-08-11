import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Table from '../Componants/Table';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../Componants/Spinner';

const MyItem = () => {

    // const myitems = useLoaderData()
    const { email } = useParams()
    // console.log(email);
    const [loader, setLoader] = useState(false)
    const [items, setItems] = useState()

    useEffect(() => {
        setLoader(true)
        axios(`https://lost-found-server-two.vercel.app/myitem/${email}`)
            .then(res => {
                setItems(res.data)
                setLoader(false)
            }).catch(error => {
                toast.error(error.message)
            })
    }, [email])

// console.log(items);

    useEffect(() => {
        document.title = "My Item";
    }, []);
    // console.log(items);

    const setUpdatedInState = (id, updatedData) => {
        setItems((prevItems) =>
            prevItems.map((item =>
                item._id === id ? { ...item, ...updatedData } : item
            ))
        )
    }


    return (
        <div className='my-10 max-w-11/12 mx-auto pt-16'>
            <h2 className="text-5xl text-[#2C7BE5] mb-4 text-center">My Items</h2>

            {items?.length < 1 ?
                <>
                    <div className='text-center space-y-8'>
                        <h1 className='text-4xl lg:text-8xl px-0 lg:px-40 text-red-500 text-center'>You did not Add any Item yet!</h1>
                        <Link to='/AddItem'><button className='btn btn-primary'>Add Item</button></Link>
                    </div>
                </>
                
                :
                   loader ? <Spinner/> 
                   
                :
                 <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='hidden lg:block'>
                                        No.
                                    </th>
                                    <th>Photo</th>
                                    <th>Type</th>
                                    <th>Location</th>
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
                                        onUpdate={setUpdatedInState}
                                    ></Table>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default MyItem;