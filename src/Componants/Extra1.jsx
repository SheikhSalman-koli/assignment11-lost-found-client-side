import React from 'react';

const Extra1 = () => {
    return (
        <div  className="w-full bg-[#e8f4f8] p-4 lg:p-8  max-w-11/12 mx-auto">
            <h2 className="text-3xl font-bold mb-6">Lost & Found Safety Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-4 bg-blue-100 rounded-lg">✅ Verify ownership before returning items.</div>
        <div className="p-4 bg-blue-100 rounded-lg">✅ Avoid sharing personal information publicly.</div>
        <div className="p-4 bg-blue-100 rounded-lg">✅ Report valuable items to local authorities.</div>
        <div className="p-4 bg-blue-100 rounded-lg">✅ Take clear photos of found items.</div>
        <div className="p-4 bg-blue-100 rounded-lg">✅ Use platform messaging to communicate.</div>
        <div className="p-4 bg-blue-100 rounded-lg">✅ Stay safe when meeting someone to exchange items.</div>
      </div>
        </div>
    );
};

export default Extra1;