import React, { use } from 'react';

const Table = ({item, index}) => {

    console.log(item);

    return (
             <tr>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
            </div>
          </div>
        </td>
        <td>{item.location}</td>
        <td>{item.type}</td>
        <th>
          <button className="btn btn-ghost btn-xs">u</button>
          <button className="btn btn-ghost btn-xs">x</button>
        </th>
      </tr>
    );
};

export default Table;