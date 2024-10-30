"use client";
import DropdownInput from "@/components/shared/DropdownInput";
import SingleCard from "@/components/shared/SingleCard";

import { ConfigProvider, Form, Input, Pagination } from "antd";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import profile3 from "@/assets/profile3.svg";
import profile4 from "@/assets/profile4.svg";
import profile1 from "@/assets/profile12.svg";
import profile5 from "@/assets/profile5.svg";
import profile6 from "@/assets/profile6.svg";
import profile7 from "@/assets/profile7.svg";
import profile8 from "@/assets/profile8.svg";
import profile9 from "@/assets/profile9.svg";
import profile10 from "@/assets/profile10.svg";
import profile16 from "@/assets/profile16.svg";

const profiles = [
  {
    id: 1,
    gender: "female",
    image: profile1,
    name: "Emma Johnson",
    age: 28,
    address: "1234 Elm Street, IL",
  },
  {
    id: 3,
    gender: "female",
    image: profile3,
    name: "Sophia Brown",
    age: 26,
    address: "9101 Pine Street, IL",
  },
  {
    id: 4,
    gender: "male",
    image: profile4,
    name: "Noah Williams",
    age: 29,
    address: "1122 Maple Drive, IL",
  },
  {
    id: 5,
    gender: "female",
    image: profile5,
    name: "Isabella Davis",
    age: 24,
    address: "1314 Birch Road, IL",
  },
  {
    id: 6,
    gender: "male",
    image: profile6,
    name: "Mason Garcia",
    age: 31,
    address: "1415 Cedar Lane, IL",
  },
  {
    id: 7,
    gender: "female",
    image: profile7,
    name: "Ava Wilson",
    age: 27,
    address: "1516 Walnut Way, IL",
  },
  {
    id: 8,
    gender: "male",
    image: profile8,
    name: "Ethan Martinez",
    age: 32,
    address: "1617 Spruce Court, IL",
  },
  {
    id: 9,
    gender: "female",
    image: profile9,
    name: "Ethan Martinez",
    age: 25,
    address: "1819 Cherry Boulevard, IL",
  },
  {
    id: 10,
    gender: "male",
    image: profile10,
    name: "James Anderson",
    age: 33,
    address: "2021 Fir Street, IL",
  },
  {
    id: 16,
    gender: "male",
    image: profile16,
    name: "Lucas King",
    age: 29,
    address: "2727 Orchid Way, IL",
  },
];

const ShortBy = [
  {
    value: "Newest",
    label: "Newest",
  },
];

const location = [
  {
    value: "BanglaDesh",
    label: "Bangladesh",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "China",
    label: "China",
  },
  {
    value: "USA",
    label: "USA",
  },
];

const MaritalStatus = [
  {
    value: "Single",
    label: "Single",
  },
  {
    value: "Mingle",
    label: "Mingle",
  },
  {
    value: "Married",
    label: "Married",
  },
];

const children = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
];

const height = [
  {
    value: "150cm",
    label: "150cm",
  },
  {
    value: "160cm",
    label: "160cm",
  },
  {
    value: "170cm",
    label: "170cm",
  },
];

const bodyShape = [
  {
    value: "Fit",
    label: "Fit",
  },
  {
    value: "Fat",
    label: "Fat",
  },
];

const hairColor = [
  {
    value: "Black",
    label: "black",
  },
  {
    value: "Brown",
    label: "Brown",
  },
];

const eyeColor = [
  {
    value: "Black",
    label: "Black",
  },
  {
    value: "Brown",
    label: "Brown",
  },
];

const education = [
  {
    value: "Graduate",
    label: "Graduate",
  },
];

const occupation = [
  {
    value: "Teacher",
    label: "Teacher",
  },
  {
    value: "Programmer",
    label: "Programmer",
  },
];

const religion = [
  {
    value: "Cristian",
    label: "Cristian",
  },
  {
    value: "Muslim",
    label: "Muslim",
  },
  {
    value: "Hindu",
    label: "Hindu",
  },
];

const SearchClient = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 16;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentPageProfiles = profiles.slice(startIndex, endIndex);

  const handleFilter = () => {
    setIsFilter(!isFilter);
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
          />
          <div className="flex items-center w-full gap-3 mt-4  ">
            {/* filter   */}
            <div
              className=" bg-primary text-white font-medium  px-4 py-3 rounded-lg w-full flex  items-center justify-between cursor-pointer"
              onClick={handleFilter}
            >
              <p className=" flex items-center gap-1">
                <span>
                  {" "}
                  <IoFilterSharp size={22} />{" "}
                </span>{" "}
                <span> Filter</span>
              </p>
              <p className="text-white ">
                {" "}
                <FaAngleDown
                  className={`font-semibold rotate-icon`}
                  style={{
                    transform: `rotate(
                ${isFilter ? 0 : 270}deg)`,
                  }}
                />{" "}
              </p>
            </div>
            {/* reload  */}
            <button
              className={`bg-black text-white w-[60px] h-[45px] rounded-lg flex justify-center items-center`}
            >
              <TfiReload size={22} />
            </button>
          </div>

          {isFilter ? (
            <div
              className={`bg-[#F7F7F7] p-2 w-full transition-all duration-600 ease-in-out z-10`}
            >
              <Form layout="vertical">
                <DropdownInput
                  name="shortBy"
                  label="Short by"
                  defaultValue="Newest"
                  options={ShortBy}
                />
                <DropdownInput
                  name="location"
                  label="Location"
                  defaultValue="BanglaDesh"
                  options={location}
                />
                <DropdownInput
                  name="maritalStatus"
                  label="Marital Status"
                  defaultValue="Single"
                  options={MaritalStatus}
                />
                <DropdownInput
                  name="children"
                  label="Children"
                  defaultValue="1"
                  options={children}
                />
                <DropdownInput
                  name="height"
                  label="Height"
                  defaultValue="150cm"
                  options={height}
                />
                <DropdownInput
                  name="bodyShape"
                  label="Body Shape"
                  defaultValue="Fit"
                  options={bodyShape}
                />
                <DropdownInput
                  name="hairColor"
                  label="Hair Color"
                  defaultValue="Black"
                  options={hairColor}
                />
                <DropdownInput
                  name="eyeColor"
                  label="Eye Color"
                  defaultValue="Black"
                  options={eyeColor}
                />
                <DropdownInput
                  name="education"
                  label="Education"
                  defaultValue="Graduate"
                  options={education}
                />
                <DropdownInput
                  name="occupation"
                  label="Occupation"
                  defaultValue="Teacher"
                  options={occupation}
                />
                <DropdownInput
                  name="religion"
                  label="Religion"
                  defaultValue="Cristian"
                  options={religion}
                />
              </Form>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="lg:col-span-9 col-span-12 mb-5 ">
          <div className=" cards grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 justify-self-center z-0 ">
            {currentPageProfiles?.map((value, index: number) => (
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
          total={profiles.length}
          onChange={(page) => setPage(page)}
          pageSize={pageSize}
        />
      </ConfigProvider>

      </div>
    </div>
  );
};

export default SearchClient;
