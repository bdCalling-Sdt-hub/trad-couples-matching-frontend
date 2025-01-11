"use client";
import SingleCard from "@/components/shared/SingleCard";

import { ConfigProvider, Form, Input, Pagination } from "antd";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { useGetAllPersonsQuery } from "@/redux/features/search/searchSlice";
import { imageUrl } from "@/redux/base/baseApi";
import { bodyShape, country, educationOn, eyeColor, hairColor, height, maritalStatus, occupation } from "@/components/shared/Option";
import DropDownForFilter from "@/components/shared/DropDownForFilter";

const SearchClient = () => {
  const [isFilter, setIsFilter] = useState(false); 
  const [filters, setFilters] = useState({ 
    search: undefined,
    country: undefined,
    maritalStatus: undefined,
    height: undefined,
    bodyShape: undefined,
    hairColor: undefined,
    eyeColor: undefined,
    educationOn: undefined,
    occupation: undefined,
  });
  const [page, setPage] = useState(1);
  const pageSize = 16; 
  const {data} = useGetAllPersonsQuery(filters);
  const persons = data?.data

  const profiles = persons?.peoples?.map((person:{_id:string,user:{image:string,name:string},age:number,country:string}) => ({
    id: person._id,
    image: person?.user?.image?.startsWith("http") ? person?.user?.image : `${imageUrl}${person?.user?.image}`,
    name: person?.user?.name,
    age: person?.age,
    address: person?.country,
}
  ));

  const handleFilterChange = (name: string, value:any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterToggle = () => {
    setIsFilter((prev) => !prev);
  };

  return (
    <div className="container">
      <div className=" grid grid-cols-12 gap-5 mt-8">
        <div className="lg:col-span-3 col-span-12 z-10">
          {/* search  */}
          <Input
            prefix={<CiSearch size={24} />}
            placeholder="Search here"
            style={{
              height: "45px",
              borderRadius: "10px",
              width: "100%",
              padding: "4px",
            }} 
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
     <div className="flex items-center w-full gap-3 mt-4">
            <div
              className="bg-primary text-white font-medium px-4 py-3 rounded-lg w-full flex items-center justify-between cursor-pointer"
              onClick={handleFilterToggle}
            >
              <p className="flex items-center gap-1">
                <IoFilterSharp size={22} />
                Filter
              </p>
              <FaAngleDown
                className="text-white"
                style={{ transform: `rotate(${isFilter ? 0 : 270}deg)` }}
              />
            </div>
            <button
              className="bg-black text-white w-[60px] h-[45px] rounded-lg flex justify-center items-center"
              onClick={() =>
                setFilters({ 
                  search: undefined,
                  country: undefined,
                  maritalStatus: undefined,
                  height: undefined,
                  bodyShape: undefined,
                  hairColor: undefined,
                  eyeColor: undefined,
                  educationOn: undefined,
                  occupation: undefined,
                })
              }
            >
              <TfiReload size={22} />
            </button>
          </div>

          {isFilter ? (
            <div
              className={`bg-[#F7F7F7] p-2 w-full transition-all duration-600 ease-in-out z-10`}
            >
              <Form layout="vertical">
                {/* <DropdownInput
                  name="shortBy"
                  label="Short by"
                
                  options={ShortBy}
                /> */} 

                <DropDownForFilter
                  name="country"
                  label="Country"
                  options={country} 
                  onChange={(value) => handleFilterChange("country", value)}
                /> 

                <DropDownForFilter
                  name="maritalStatus"
                  label="Marital Status"
                  options={maritalStatus} 
                  onChange={(value) => handleFilterChange("maritalStatus", value)}
                />
                <DropDownForFilter
                  name="height"
                  label="Height"
                  options={height} 
                  onChange={(value) => handleFilterChange("height", value)}
                />
                <DropDownForFilter
                  name="bodyShape"
                  label="Body Shape"
                onChange={(value) => handleFilterChange("bodyShape", value)}
                  options={bodyShape}
                />
                <DropDownForFilter
                  name="hairColor"
                  label="Hair Color"
                 onChange={(value) => handleFilterChange("hairColor", value)}
                  options={hairColor}
                />
                <DropDownForFilter
                  name="eyeColor"
                  label="Eye Color"
              onChange={(value) => handleFilterChange("eyeColor", value)}
                  options={eyeColor}
                />
                <DropDownForFilter
                  name="education"
                  label="Education"
                onChange={(value) => handleFilterChange("educationOn", value)}
                  options={educationOn}
                />
                <DropDownForFilter
                  name="occupation"
                  label="Occupation"
                 onChange={(value) => handleFilterChange("occupation", value)}
                  options={occupation}
                />
              </Form>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="lg:col-span-9 col-span-12 mb-5 ">
          <div className=" cards grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 justify-self-center z-0 ">
            {profiles?.map((value:{id: string , image: string , name: string , age: string , address: string}, index: number) => (
              <SingleCard key={index} value={value} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-5"> 

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#007ba5",
          },
        }}
      >
        <Pagination
          align="center"
          current={page}
          // total={profiles.length} 
          onChange={(page) => setPage(page)}
          pageSize={pageSize}
        />
      </ConfigProvider>

      </div>
    </div>
  );
};

export default SearchClient;
