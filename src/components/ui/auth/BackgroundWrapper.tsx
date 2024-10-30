"use client"
import { GetLocalStorage } from "@/util/LocalStroage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BackgroundWrapperProps {
    children: React.ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
    const pathname = usePathname();
    const [userType, setUserType] = useState<string | null>(null);

    useEffect(() => {
        const userInfo = GetLocalStorage("userInfo");
        setUserType(userInfo?.userType || null);
    }, []);

    let backgroundImage = "/Banner.jpg";
    if (pathname === "/register" || userType === "registerUser") {
        backgroundImage = "/Banner.jpg";
    }

    return (
        <div
            className="lg:h-[100vh] w-full"
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
