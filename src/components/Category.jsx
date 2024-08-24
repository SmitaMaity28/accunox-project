import React, { useState } from 'react';
import Widget from './Widgets';

const Category = ({ category, addWidget, removeWidget }) => {


    const handleAddWidget = () => {
            addWidget(category.id);
    };

    return (
        <div className='flex flex-col gap-4 p-2'>
            <h2 className='text-3xl '>{category.name}</h2>
            <div className='flex items-center  gap-4 w-[95vw] overflow-x-scroll p-2'>
                {category.widgets.map(widget => (
                    widget.enabled &&
                    <Widget
                        key={widget.id}
                        widget={widget}
                        categoryId={category.id}
                        removeWidget={removeWidget}
                    />
                ))}
                <div className=' min-w-[400px] min-h-[200px] bg-white shadow-lg rounded-md items-center justify-center flex'>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleAddWidget}>
                        + ADD
                    </button>
                </div>
            </div>
            {/* <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
            />
            <button onClick={handleAddWidget}>+ Add Widget</button> */}
        </div>
    );
};

export default Category;
