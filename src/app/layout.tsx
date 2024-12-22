import type { Metadata } from "next";
// import localFont from "next/font/local"; 
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import { Montserrat } from 'next/font/google'
import ReduxProvider from "@/redux/lib/ReduxProvider";
const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });
export const metadata: Metadata = {
  title: "TradeCouples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={`${montserrat.className}`} suppressHydrationWarning={true}
      > 
       <AntdRegistry>  
        <ReduxProvider > 
        {children}
        </ReduxProvider>
       </AntdRegistry>
      </body>
    </html>
  );
}
