import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Table from '../Componants/Table';

const MyItem = () => {

    const myitems = useLoaderData()
    const[items, setItems] = useState(myitems.data)

    // console.log(items);
    return (
        <div>
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
            items?.map((item, index)=> <Table
            key={item._id}
            index={index}
            item={item}
            ></Table>)
        } 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyItem;