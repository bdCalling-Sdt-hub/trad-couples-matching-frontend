import SingleCard from '@/components/shared/SingleCard';
import { Pagination } from 'antd';
import profile3 from "@/assets/profile3.svg"
import profile4 from "@/assets/profile4.svg"
import profile1 from "@/assets/profile12.svg" 
import profile5 from "@/assets/profile5.svg"
import profile6 from "@/assets/profile6.svg"
import profile7 from "@/assets/profile7.svg"
import profile8 from "@/assets/profile8.svg"
import profile9 from "@/assets/profile9.svg"
import profile10 from "@/assets/profile10.svg"
import profile16 from "@/assets/profile16.svg"
import Heading from '@/components/shared/Heading';



const profiles = [
    {
        id: 1,
        gender: "female",
        image: profile1,
        name: "Emma Johnson",
        age: 28,
        address: "1234 Elm Street, IL"
    },
    {
        id: 3,
        gender: "female",
        image: profile3,
        name: "Sophia Brown",
        age: 26,
        address: "9101 Pine Street, IL"
    },
    {
        id: 4,
        gender: "male",
        image: profile4,
        name: "Noah Williams",
        age: 29,
        address: "1122 Maple Drive, IL"
    },
    {
        id: 5,
        gender: "female",
        image: profile5,
        name: "Isabella Davis",
        age: 24,
        address: "1314 Birch Road, IL"
    },
    {
        id: 6,
        gender: "male",
        image: profile6,
        name: "Mason Garcia",
        age: 31,
        address: "1415 Cedar Lane, IL"
    },
    {
        id: 7,
        gender: "female",
        image:profile7,
        name: "Ava Wilson",
        age: 27,
        address: "1516 Walnut Way, IL"
    },
    {
        id: 8,
        gender: "male",
        image: profile8,
        name: "Ethan Martinez",
        age: 32,
        address: "1617 Spruce Court, IL"
    },
    {
        id: 9,
        gender: "female",
        image: profile9, 
        name: "Ethan Martinez",
        age: 25,
        address: "1819 Cherry Boulevard, IL"
    },
    {
        id: 10,
        gender: "male",
        image: profile10,
        name: "James Anderson",
        age: 33,
        address: "2021 Fir Street, IL"
    },
    {
        id: 16,
        gender: "male",
        image:profile16,
        name: "Lucas King",
        age: 29,
        address: "2727 Orchid Way, IL"
    }
];

const ViewMe = () => {
    return (
        <div className='container  pb-7 font-sans'>
        <Heading className=' pb-2 pt-2'>View Me</Heading> 
        <p className='border-b-2 border-[#D1D1D1]  mb-5'></p>
       <div className=' grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-5'>
         {
             profiles?.map((value , index:number)=> <SingleCard key={index} value={value} />
             )
         }
       </div> 

       <Pagination align="center" defaultCurrent={1} total={50} className='mt-5' />
 </div> 
    );
};

export default ViewMe;