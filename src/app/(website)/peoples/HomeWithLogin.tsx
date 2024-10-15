import SingleCard from '@/components/shared/SingleCard';
import { Pagination } from 'antd';
import Image from 'next/image';
import React from 'react';
import { GoHeart } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { MdCake } from 'react-icons/md';

const profiles = [
    {
        id: 1,
        gender: "female",
        image: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Emma Johnson",
        age: 28,
        address: "1234 Elm Street, Springfield, IL"
    },
    {
        id: 2,
        gender: "male",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        name: "Liam Smith",
        age: 30,
        address: "5678 Oak Avenue, Springfield, IL"
    },
    {
        id: 3,
        gender: "female",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        name: "Sophia Brown",
        age: 26,
        address: "9101 Pine Street, Springfield, IL"
    },
    {
        id: 4,
        gender: "male",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        name: "Noah Williams",
        age: 29,
        address: "1122 Maple Drive, Springfield, IL"
    },
    {
        id: 5,
        gender: "female",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
        name: "Isabella Davis",
        age: 24,
        address: "1314 Birch Road, Springfield, IL"
    },
    {
        id: 6,
        gender: "male",
        image: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
        name: "Mason Garcia",
        age: 31,
        address: "1415 Cedar Lane, Springfield, IL"
    },
    {
        id: 7,
        gender: "female",
        image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
        name: "Ava Wilson",
        age: 27,
        address: "1516 Walnut Way, Springfield, IL"
    },
    {
        id: 8,
        gender: "male",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ethan Martinez",
        age: 32,
        address: "1617 Spruce Court, Springfield, IL"
    },
    {
        id: 9,
        gender: "female",
        image: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        name: "Olivia Thompson",
        age: 25,
        address: "1819 Cherry Boulevard, Springfield, IL"
    },
    {
        id: 10,
        gender: "male",
        image: "https://images.unsplash.com/photo-1621390798053-3e24c14ea5ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
        name: "James Anderson",
        age: 33,
        address: "2021 Fir Street, Springfield, IL"
    },
    {
        id: 11,
        gender: "female",
        image: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
        name: "Charlotte Lee",
        age: 29,
        address: "2222 Lark Lane, Springfield, IL"
    },
    {
        id: 12,
        gender: "male",
        image: "https://images.unsplash.com/photo-1508602636771-613ba0112c30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1MHx8fGVufDB8fHx8fA%3D%3D",
        name: "Alexander Scott",
        age: 34,
        address: "2323 Rosewood Drive, Springfield, IL"
    },
    {
        id: 13,
        gender: "female",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
        name: "Amelia Harris",
        age: 26,
        address: "2424 Ash Lane, Springfield, IL"
    },
    {
        id: 14,
        gender: "male",
        image: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        name: "Daniel Clark",
        age: 35,
        address: "2525 Willow Avenue, Springfield, IL"
    },
    {
        id: 15,
        gender: "female",
        image: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ella Wilson",
        age: 28,
        address: "2626 Gardenia Road, Springfield, IL"
    },
    {
        id: 16,
        gender: "male",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Lucas King",
        age: 29,
        address: "2727 Orchid Way, Springfield, IL"
    }
];

const HomeWithLogin = () => {
    return (
        <div className='container py-7'>
              
              <div className=' grid lg:grid-cols-4 grid-cols-2 gap-8'>
                {
                    profiles?.map((value:any , index:number)=> <SingleCard key={index} value={value} />
                    )
                }
              </div> 

              <Pagination align="center" defaultCurrent={1} total={50} className='mt-5' />
        </div>
    );
};

export default HomeWithLogin;