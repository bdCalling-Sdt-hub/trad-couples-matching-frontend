"use client";

import React  from "react";
import { FaCheck } from "react-icons/fa6";

const data = [
  {
    type: "Elite",
    perCredit: "33",
    credits: 1000,
    description: [
      "Start 111 conversations",
      "Highlight your profile for 30 days FREE",
    ],
    price: "329.00",
  },
  {
    type: "Classic",
    perCredit: "40",
    credits: 1000,
    description: [
      "Start 111 conversations",
      "Highlight your profile for 30 days FREE",
    ],
    price: "329.00",
  },
  {
    type: "Basic",
    perCredit: "69",
    credits: 1000,
    description: [
      "Start 111 conversations",
      "Highlight your profile for 30 days FREE",
    ],
    price: "329.00",
  },
];

const SubscriptionsClient = () => {




  return (
    <div className="container flex items-center justify-center h-full lg:pt-0 pt-5 lg:px-32 px-10 mb-5">
      <div className="h-[80vh] w-full  grid lg:grid-cols-3 grid-cols-1  items-center gap-8">
        {data.map((value, index) => (
          <div key={index} className={` border-2 border-gray-300 transition  hover:scale-105 duration-300 ${
            index === 0
              ? "hover:border-[#CC2B52]"
              : index === 1
              ? "hover:border-blue-700"
              : "hover:border-primary"
          } p-6 rounded-xl`}>
            <p
              className={` py-4 font-bold uppercase text-[20px] ${
                index === 0
                  ? "text-[#CC2B52]"
                  : index === 1
                  ? "text-blue-700"
                  : "text-primary"
              }`}
            >
          
              {value?.type}
            </p>
            <p className="font-bold text-[16px] pb-3 ">
      
              <span className="text-4xl"> {value?.perCredit}$ </span>{" "}
              <span>per month </span>
            </p>
            <div className=" border-t border-gray-500 py-4 ">
              {value?.description?.map((value, index) => (
                <div key={index} className="  flex items-center gap-3 pb-3">
                  <p>
                    <FaCheck size={22} />
                  </p>
                  <p> {value}</p>
                </div>
              ))}
            </div>

            <div className=" flex items-end justify-end">
              <button
                className={` w-[130px] h-[55px] border-2  rounded-full font-bold text-[18px] mt-5  ${
                  index === 0
                    ? "border-[#CC2B52]"
                    : index === 1
                    ? "border-blue-700"
                    : "border-primary"
                } `}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsClient;
