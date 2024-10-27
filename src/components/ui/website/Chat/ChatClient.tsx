"use client"
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Dropdown, Input } from "antd";
import { IoImageOutline, IoSendSharp } from "react-icons/io5";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";


type TMessageList = {
  id: number;
  name: string;
  address: string;
  time: string;
  text: string;
  image: string;
}

const items = [
  {
    label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3] w-[100px] '>View Profile</p>,
    key: '0',
  },
  {
    label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3]'>Add to Favorites</p>,
    key: '1',
  },
  {
    label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3]'>Send Private Key</p>,
    key: '2',
  },
  {
    label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3]'>Block</p>,
    key: '3',
  },
  {
    label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3]'>Report</p>,
    key: '4',
  },

];


const messageList = [
  {
    id: 1,
    name: "Mariam Star",
    address: "New York, USA",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: "/user.png"
  },
  {
    id: 2,
    name: "Courtney Henry",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/person.png"
  },
  {
    id: 3,
    name: "Ana Rose",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user.png",
  },
  {
    id: 4,
    name: "Mariam Star",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/person.png"
  },
  {
    id: 5,
    name: "Courtney Henry",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user.png"
  },
  {
    id: 6,
    name: "Ana Rose",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/person.png"
  },
  {
    id: 7,
    name: "Mariam Star",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user.png"
  },
  {
    id: 8,
    name: "Courtney Henry",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/person.png",
  },
  {
    id: 9,
    name: "Ana Rose",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/person.png"
  },
  {
    id: 10,
    name: "Mariam Star",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user.png"
  },
  {
    id: 11,
    name: "Courtney Henry",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/person.png",
  },
];

const messageContent = [
  {
    id: 1,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 2,
    message: "what are the amenities?",
    date: "27 April 2024",
  },
  {
    id: 3,
    message: "there are so many amenities.",
    date: "27 April 2024",
  },
  {
    id: 4,
    message: "i want to book the room",
    date: "27 April 2024",
  },
  {
    id: 5,
    message: "sure.",
    date: "27 April 2024",
  },
  {
    id: 6,
    message: "how much for the room per week?",
    date: "27 April 2024",
  },
  {
    id: 7,
    message: "200$",
    date: "27 April 2024",
  },
  {
    id: 8,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 9,
    message: "what are the amenities?",
    date: "27 April 2024",
  },
  {
    id: 10,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 11,
    message: "what are the amenities?",
    date: "27 April 2024",
  },

];
const ChatClient = () => {

  const [person, setPerson] = useState<TMessageList | null>({
    id: 1,
    name: "Mariam Star",
    address: "New York, USA",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: "/user.png"
  });
  const [personId, setpersonId] = useState<number | null>(1);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const router = useRouter()

  const handleMessage = (value: TMessageList) => {
    setPerson(value);
    setpersonId(value?.id);
    setIsChatVisible(true);
    router.push(`/chat?id=${value.id}`);
  };

  const handleBackToList = () => {
    setIsChatVisible(false);
    router.push("/chat");
  };

  return (
    <div className="container mt-4 mb-4 ">
      <div className="grid grid-cols-12  lg:h-[79vh] h-full  rounded-xl">
        {/* Message List */}
        <div className={`lg:col-span-4 col-span-12 bg-[#F7F7F7]    ${isChatVisible ? "hidden lg:block" : ""}`}>
          <div className="h-[66px] bg-primary rounded-tl-2xl lg:rounded-tr-none rounded-tr-2xl flex items-center justify-center">
            {/* <p className=" text-white font-medium text-[32px]  text-center">Message</p> */}
          </div>


          {/* search  */}
          <div
            className="mx-auto px-2 my-3"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <Input
              placeholder="Search here..."
              prefix={<FiSearch size={20} color="#868FA0" />}
              style={{
                width: "100%",
                height: 45,
                fontSize: "14px",
                background: "#E9E9E9"

              }}
              size="middle"
            />
          </div>

          {/* message list  */}
          <div className="overflow-y-auto h-[71vh] px-2" >
            {messageList.map((value: TMessageList, index) => (
              <div key={index} onClick={() => handleMessage(value)}>
                <div className={`flex justify-between  px-2 py-2 rounded-lg mb-2 cursor-pointer ${personId === value?.id ? "bg-[#E7EBED]" : "bg-white"}`}>
                  <div className="flex items-center gap-1">
                    <Image src={value?.image} alt="" width={60} height={60} className="rounded-full h-[50px] w-[50px]" />
                    <div className="flex-col gap-1">
                      <p className="text-[#12354E] font-medium text-[16px]">{value?.name}</p>
                      <p className="text-[#6A6A6A] text-[14px]">{value?.text}</p>
                    </div>
                  </div>
                  <p className="text-[#6A6A6A] text-[15px]">{value?.time}</p>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Chat Section */}
        <div className={`lg:col-span-8 col-span-12 bg-[#FCFCFC] ${isChatVisible ? "block" : "hidden lg:block"}`}>
          <div>
            <div className="flex items-center justify-between gap-2 h-[66px] px-4 bg-primary  rounded-tr-2xl lg:rounded-tl-none rounded-tl-2xl">

              <div className="flex items-center gap-2">

                <button className="lg:hidden text-white" onClick={handleBackToList}>
                  <IoMdArrowRoundBack size={20} />
                </button>

                <Image src={person?.image as string} alt="" width={60} height={60} className="rounded-full h-[50px] w-[50px]" />
                <div>
                  <p className="text-[18px] text-white font-medium">{person?.name}</p>
                  <p className="text-[16px] text-white font-normal">{person?.address}</p>
                </div>
              </div>
              <Dropdown menu={{ items }}>
                <p className="text-white cursor-pointer"><BsThreeDotsVertical size={22} /></p>
              </Dropdown>
            </div>
            <div className="bg-[#F7F7F7] w-full h-[calc(73vh+54px)] rounded-lg relative border-x-2 border-gray-100">

              {/* Chat messages */}
              <div className="py-6 lg:px-8 px-3 overflow-y-auto h-[72vh]">
                {messageContent.map((value, index) => (
                  <div key={index} className={`flex mb-5 w-full ${index % 2 === 0 ? "items-end justify-end" : "items-start justify-start"}`}>
                    <div className={`lg:w-3/5 w-2/3 lg:px-4 px-2 py-3 flex-col gap-4 ${index % 2 === 0 ? "bg-[#E6F2F6] rounded-t-xl rounded-bl-xl" : "bg-[#E5E5E5] rounded-t-xl rounded-br-xl"}`}>
                      <p>{value?.message}</p>
                      <p className="text-end text-[12px] text-[#918d8d]">{value?.date}</p>
                    </div>
                  </div>
                ))}
              </div>

 {/* footer  */}
              <div className="absolute bottom-1 w-full py-1">
                <div className="flex items-center justify-between gap-3 w-full px-3">
                  <textarea className="flex-1 h-[50px] resize-none py-2 rounded-l-full px-4 rounded-r-full shadow-md" placeholder="Type your message" />
                  <div className="flex items-center gap-4 cursor-pointer">
                  
                    <IoImageOutline size={22} />
                  <button className="h-[40px] w-[40px] bg-primary text-white rounded-full flex justify-center items-center">
                    <IoSendSharp size={22} />
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default ChatClient;
