"use client"
import { GetLocalStorage } from "@/util/LocalStroage";
import { usePathname } from "next/navigation";



interface BackgroundWrapperProps {
    children: React.ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
   const pathname = usePathname()

    const userInfo = GetLocalStorage("userInfo");
    const userType = userInfo?.userType; 

    let backgroundImage = "/Banner.svg";
    if (pathname === "/register" || userType === "registerUser") {
        backgroundImage = "/RegisterBanner.svg";
    }

    return (
        <div
            className="lg:h-[90vh+20px]  w-full"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {children}
        </div>
    );
};

export default BackgroundWrapper;
