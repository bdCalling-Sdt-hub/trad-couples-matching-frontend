"use client";

import { useGetAllPackagesQuery } from "@/redux/features/package/packageSlice";
import React  from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const SubscriptionsClient = () => {
  const {data} = useGetAllPackagesQuery(undefined)

const packages = data?.data

  return (
    <div className="container  lg:pt-0 pt-5 lg:px-24 px-10 mb-5 mt-10 max-h-screen flex items-center justify-center"> 
      <div className=" w-full h-[70vh] grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
        {packages?.map((pkg:{name:string,features:string[],costOptions:{name:string,amount:number,duration:string,paymentLink:string}[],_id:string}, index:number) => (
          <div
            key={pkg._id}
            className={`border-2 border-gray-300 h-[66vh]  ${
              index === 0
                ? "hover:border-[#CC2B52]"
                : index === 1
                ? "hover:border-blue-700"
                : "hover:border-primary"
            } p-6 rounded-xl`}
          >
            <p
              className={`py-4 font-bold uppercase text-[20px] ${
                index === 0
                  ? "text-[#CC2B52]"
                  : index === 1
                  ? "text-blue-700"
                  : "text-primary"
              }`}
            >
              {pkg.name}
            </p>
            <div className="border-t border-gray-300 py-4">
              {pkg.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-3 pb-3"
                > 
                <p>  <VscDebugBreakpointLog size={20} /></p>
                 
                  <p className="text-[14px]">{feature}</p>
                </div>
              ))}
            </div>

            {/* Nested Cards for Cost Options */}
            {pkg.costOptions.length > 0 && (
              <div className="mt-5 grid grid-cols-3 gap-2">
                {pkg.costOptions.map((option:{name:string,amount:number,duration:string,paymentLink:string  } , index:number) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 hover:border-primary rounded-lg p-4 mb-4 shadow-sm"
                  >
                    <p className="font-bold text-[14px] flex flex-col">
                    <span className="text-gray-700">  {option.name}  </span>  
                      <span className="text-blue-700"> ${option.amount} </span> 
                    </p>
                    <p className="text-sm text-gray-600">{option.duration}</p>
                    <a
                      href={option.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-sm mt-2 block"
                    >
                      Buy Now
                    </a>
                  </div>
                ))}
              </div>
            )} 

            {
pkg.name === "Basic" && 
 <div className="flex items-end justify-start">
  <button
    className={` text-primary underline-offset-2  font-medium underline decoration-blue-600  text-[16px] mt-5 `}
  >
 Accessible with our Basic subscription plan.
  </button>
</div> 
            }
            </div> 

        ))}
      </div>
   
    </div>
  );
};

export default SubscriptionsClient;
