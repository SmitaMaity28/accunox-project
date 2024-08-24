import React from 'react';

const Widget = ({ widget, categoryId, removeWidget }) => {
    return (
        <div className='  min-w-[400px] min-h-[200px]  bg-white shadow-lg rounded-md p-4 '>
            <div className="top flex justify-between ">
            <h3 className='font-bold capitalize'>{widget.name}</h3>
            <button onClick={() => removeWidget(categoryId, widget.id)}>X</button>
            </div>
            <div className='flex w-full h-[140px] justify-center items-center text-gray-500'>
                {widget.text}
            </div>
        </div>
    );
};

export default Widget;
