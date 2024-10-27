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

    let backgroundImage = "/Banner.jpg";
    if (pathname === "/register" || userType === "registerUser") {
        backgroundImage = "/Banner.jpg";
    }

    return (
        <div
            className="lg:h-[100vh]  w-full"
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
