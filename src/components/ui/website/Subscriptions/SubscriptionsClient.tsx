"use client"

import React, { useState } from 'react';

const data = [
    {
        id: 1,
        time: "30 Days",
        type: "Premium Subscription",
        price: "$109.99 USD/30",
        description: "days $109.99 USD billed every 30 days. Price excludes applicable taxes."
    },
    {
        id: 2,
        time: "90 Days",
        type: "Premium Subscription",
        price: "$96.66 USD/30",
        description: "days $289.99 USD billed every 90 days. Price excludes applicable taxes."
    },
    {
        id: 3,
        time: "30 Days",
        type: "Diamond Subscription",
        price: "$274.99  USD/30",
        description: "days $274.99 USD billed every 30 days. Price excludes applicable taxes."
    },
]

const SubscriptionsClient = () => {

    const [checkedState, setCheckedState] = useState(
        new Array(data.length).fill(false)
    );

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedState = checkedState.map((item, i) =>
            i === index ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    return (
        <div className='container flex items-center justify-center h-full lg:pt-0 pt-5'>
            <div className='h-[80vh] w-full flex flex-col items-center justify-center gap-8'>
                {data.map((value, index) => (
                    <div
                        key={value.id}
                        className="flex items-center group lg:w-[60%] w-[100%] bg-gray-100 hover:bg-gray-50 p-5 rounded-lg border-[2px] border-[#dfdada] hover:border-gray-200 transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 hover:shadow-lg duration-300 ease-out"
                    >
                        <input
                            id={`checkbox-${index}`}
                            type="checkbox"
                            value=""
                            className="w-7 h-7 rounded-full text-primary bg-gray-100 border-primary   "
                            checked={checkedState[index]} 
                            onChange={() => handleCheckboxChange(index)}
                        />

                        <div className='ps-3'>
                            <p className='text-[#4E4E4E] text-xl font-medium'>
                                <span>{value.time}</span>
                                <span className='group-hover:text-primary'> {value.type}</span>
                            </p>
                            <p className='text-[#6B6B6B] text-[17px] py-3 lg:w-[85%] w-full'>
                                <span className='group-hover:text-primary'>{value.price}</span> {value.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionsClient;
