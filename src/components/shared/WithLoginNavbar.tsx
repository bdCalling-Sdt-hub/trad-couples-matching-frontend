"use client";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Montserrat } from "next/font/google";
import profile1 from "@/assets/profile12.svg";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { SiDiscover } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BadgeInfo, Eye, } from "lucide-react";
import { PiHeartDuotone, PiPackageDuotone } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const WithLoginNavbar = ({
  onDrawerToggle,
}: {
  onDrawerToggle: (isOpen: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter(); 
  const pathname = usePathname()

  const user = {
    image: profile1,
    name: "Mariam Star",
    age: "25",
    location: "New York, USA",
  };

  const showDrawer = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    onDrawerToggle(newOpenState);
  };

  const onClose = () => {
    setOpen(false);
    onDrawerToggle(false);
  };

  const items = [
    {
      name: "Discover",
      path: "/discover",
    },
    {
      name: "Message",
      path: "/chat",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  const smallDeviceIcon = [
    {
      icon: (
          <CgProfile size={22} color="#4E4E4E" />
     
      ),
      title: "Profile",
      path: "/profile",
    },
    {
      icon: (
          <SiDiscover size={22} color="#4E4E4E" />
      ),
      title: "Discover",
      path: "/discover",
    },
    {
      icon: ( <MdOutlineSubscriptions size={22} color="#4E4E4E" /> ),
      title: "Subscription",
      path: "/subscriptions",
    },
    {
      icon: (<AiOutlineMessage size={22} color="#4E4E4E" /> ),
      title: "Message",
      path: "/chat",
    },
  ];

  const Icons = [
    {
      icon: <PiPackageDuotone size={24} color="#4E4E4E" />,
      title: "My Package",
      path: "/subscriptions",
    },
    {
      icon: <PiHeartDuotone size={24} color="#4E4E4E" fill="#4E4E4E" />,
      title: "My Favorites",
      path: "/my-favorites",
    },
    {
      icon: <Eye size={24} color="#4E4E4E" />,
      title: "View Me",
      path: "/view-me",
    },
    {
      icon: <BadgeInfo size={24} color="#4E4E4E" />,
      title: "Support",
      path: "/support",
    },
    {
      icon: <LuLogOut size={24} color="#4E4E4E" />,
      title: "Log Out",
      path: "/login",
    },
  ];

  return (
    <div>
      <div
        className={`bg-[#FEFEFE] w-full h-[85px] fixed z-50 top-0 flex items-center justify-center`}
      >
        <div className="container flex items-center justify-between gap-6">
          <div className=" flex lg:gap-8 gap-2">
            <button
              onClick={showDrawer}
              className="text-primary"
            >
              {" "}
              <RxHamburgerMenu size={24} />{" "}
            </button>

            <div
              className={`flex flex-col cursor-pointer  ${montserrat.className}`}
              onClick={() => router.push("/discover")}
            >
              <p className="font-[540] text-[#222222] lg:text-[24px] text-[20px] leading-none tracking-wider">
                TradCouples
              </p>
              <p className="text-[13px] leading-none text-[#222222] font-sans tracking-wider">
                Matchmaking Services
              </p>
            </div>
          </div>

          <div
            className={`flex lg:gap-12 gap-2 items-center text-[#6B6B6B] tracking-wider font-medium ${montserrat.className}`}
          >
            <div className="lg:flex gap-12 items-center hidden uppercase">
              {items.map((value, index: number) => (
                <Link key={index} href={value.path} className={`${pathname === value.path ? "text-primary" : ""}`}>
                  <span className="text-[15px]">{value.name}</span>
                </Link>
              ))}
            </div>

            <div
              className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center font-semibold cursor-pointer"
              onClick={() => {
                router.push("/search");
              }}
            >
              <CiSearch size={22} />
            </div>

            <Link href="/subscriptions">
              <button className=" lg:flex hidden lg:px-5 px-3 lg:py-3 py-3 bg-primary  text-white rounded-lg uppercase font-normal">
                Subscription{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Drawer 
      title={<div className="  flex items-end justify-end cursor-pointer text-primary" onClick={()=>{setOpen(false)  , onDrawerToggle(false);}}> <IoClose size={22} />
</div>}
        onClose={onClose}
        open={open}
        placement="left"
        className="" 
        closable={false}
      > 
        <div className={`${montserrat.className}`}>
          <div className="mt-5 mb-8">
            <Image
              src={user?.image}
              alt=""
              height={60}
              width={120}
              className=" rounded-lg "
            />
            <p className="text-lg font-medium text-primary py-1 mt-3">
              {user?.name}
            </p>
            <p className="text-[#6B6B6B]">Age : {user?.age}</p>
            <p className="py-1 text-[#6B6B6B]">{user?.location}</p>
          </div>

          <div className="flex flex-col gap-5 my-3 ">
            <div className="flex flex-col gap-5 lg:hidden">
              {smallDeviceIcon.map((value, index: number) => (
                <Link
                  key={index}
                  href={value.path}
                  onClick={() => {
                    setOpen(false);
                    onDrawerToggle(false);
                  }} 
                  
                  className="flex items-center gap-3 "
                >
                  <div className={`${montserrat.className} `}>{value.icon}</div>
                  <p className={`${pathname === value.path ? "text-primary" : "text-[#4E4E4E]"} text-[18px] font-[400]`} >
                    {value?.title}
                  </p>
                </Link>
              ))}
            </div>
            {Icons.map((value, index: number) => (
              <Link
                key={index}
                href={value.path}
                onClick={() => {
                  setOpen(false);
                  onDrawerToggle(false);
                }}
                className="flex items-center gap-3 "
              >
                <div className={`${montserrat.className}`}>{value.icon}</div>
                <p className={`${pathname === value.path ? "text-primary" : "text-[#4E4E4E]"} text-[18px] font-[400]`}>
                  {value?.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default WithLoginNavbar;
