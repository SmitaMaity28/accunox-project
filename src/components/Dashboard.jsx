import React, { useState } from 'react';
import Category from './Category';

const Dashboard = () => {
    const [dashboard, setDashboard] = useState({
        categories: [
            {
                id: "1",
                name: "CSPM Executive Dashboard",
                widgets: [
                    { id: "1-1", name: "Cloud Account", text: " Cloud Account",enabled: true},
                    { id: "1-2", name: "Cloud Account Risk Assemenet ", text: "This is random text for Widget 2",enabled: true},
                ]
            },
            {
                id: "2",
                name: "Security Dashboard",
                widgets: [
                    { id: "2-1", name: "Widget 1", text: "This is random text for Widget 1",enabled: true },
                ]
            }
        ]
    });
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenmodel, setIsOpenmodel] = useState(false)
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const addWidget = (categoryId) => {
        setIsOpen(true)
    };

    const addWidgetData=()=>{
        const newWidget = {
            id: `${activeTabIndex}-${Date.now()}`,
            name: widgetName,
            text: widgetText,
            enabled:true
        };
        setDashboard(prevDashboard => ({
            categories: prevDashboard.categories.map((category, index) =>
                index === activeTabIndex
                    ? { ...category, widgets: [...category.widgets, newWidget] }
                    : category
            )
        }));
        setIsOpenmodel(false)
        setWidgetName('')
        setWidgetText('')
    }

    const removeWidget = (categoryId, widgetId) => {
        setDashboard(prevDashboard => ({
            categories: prevDashboard.categories.map(category =>
                category.id === categoryId
                    ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
                    : category
            )
        }));
    };

    const searchWidgets = (query) => {
        return dashboard.categories.map(category => ({
            ...category,
            widgets: category.widgets.filter(widget => widget.name.toLowerCase().includes(query.toLowerCase()))
        }));
    };


    const handleChakedChange = (widgetId, categoryId) => {
        setDashboard((prevDashboard) => ({
          categories: prevDashboard.categories.map((category) =>
            category.id === categoryId
              ? {
                  ...category,
                  widgets: category.widgets.map((widget) =>
                    widget.id === widgetId ? { ...widget, enabled: !widget.enabled } : widget
                  ),
                }
              : category
          ),
        }));
      };

    return (
        <>
            <div>
                <section className='flex w-full  items-center justify-between'>
                    <span className=' text-2xl bold font-bold'>CNAPP Dashboard</span>
                    <div className='flex items-center gap-4'>
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search something.."
                                onChange={(e) => setDashboard({ categories: searchWidgets(e.target.value) })}
                            />
                        </div>

                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Button
                        </button>
                    </div>
                </section>

                {dashboard.categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                        addWidget={addWidget}
                        removeWidget={removeWidget}
                    />
                ))}
            </div>
            <main
                className={
                    " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                    (isOpen
                        ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                        : " transition-all delay-500 opacity-0 translate-x-full  ")
                }
            >
                <section
                    className={
                        " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                        (isOpen ? " translate-x-0 " : " translate-x-full ")
                    }
                >
                    <article className="relative w-screen max-w-lg pb-10 flex flex-col  overflow-y-scroll h-full">
                        <header className="p-4 font-bold text-lg">Header</header>
                        <div className="flex space-x-3 border-b px-3">
                            {/* Loop through tab data and render button for each. */}
                            {dashboard.categories.map((tab, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        className={`py-2 border-b-4 transition-colors duration-300 ${idx == activeTabIndex
                                                ? 'border-blue-500'
                                                : 'border-transparent hover:border-gray-200'
                                            }`}
                                        onClick={() => setActiveTabIndex(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                );
                            })}
                        </div>
                        {/* Show active tab content. */}
                        <div className="p-2 m-0 flex gap-2 flex-col ">
                           {
                            dashboard.categories[activeTabIndex].widgets.map((widget, idx) => {
                                return (
                                    <div key={idx} className="flex items-center gap-4 border border-gray-300 p-2 rounded-md">
                                        <input type="checkbox" checked={widget.enabled} onChange={()=>{handleChakedChange(widget.id,dashboard.categories[activeTabIndex].id)}}/> 
                                        <span>{widget.name}</span>
                                        {/* <button onClick={() => removeWidget(dashboard.categories[activeTabIndex].id, widget.id)}>Remove</button> */}
                                    </div>
                                )
                            })
                           }
                           <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{setIsOpenmodel(true)}}>
                            + Add Catagory
                        </button>
                        </div>
                    </article>
                </section>
                <section
                    className=" w-screen h-full cursor-pointer "
                    onClick={() => {
                        setIsOpen(false);
                    }}
                ></section>

            </main>
            {
                isOpenmodel &&
                <>
                <main
                className= " fixed overflow-hidden z-40 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex justify-center items-center"
            >
                <div className='flex flex-col  w-[500px]   bg-white gap-3 p-4 pb-8 items-center rounded-md'>
                    <div className='flex justify-between w-full'>
                    <h1 className='font-bold'>Add Widgets Data</h1>
                    <h1 className='font-bold cursor-pointer' onClick={()=>{setIsOpenmodel(false)}}>X</h1>
                    </div>

                <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                className='border border-blue-600 py-2 px-4 rounded-md w-full'
            />
            <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                className='border border-blue-600 py-2 px-4 rounded-md w-full'
            />
                        <button className=" w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{addWidgetData()}}>
                            + Add Catagory
                        </button>
                </div>
            </main>
                <section
                        className=" w-screen h-full cursor-pointer absolute z-30"
                        onClick={() => {
                            setIsOpenmodel(false);
                        }}
                    ></section>
                </>

            }


        </>


    );
};

export default Dashboard;
