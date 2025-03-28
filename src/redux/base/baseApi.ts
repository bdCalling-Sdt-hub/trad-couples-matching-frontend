import { GetLocalStorage } from "@/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://147.93.85.29:5000/api/v1" ,
      // baseUrl: "http://192.168.10.15:8000/api/v1" , 
      prepareHeaders: (headers) => {
        const token = GetLocalStorage("tradeToken");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
  endpoints: () => ({}), 
  tagTypes: ["favorites" , "chats"],
});

// export const imageUrl = "http://192.168.10.15:8000/";
export const imageUrl = "http://147.93.85.29:5000/"; 
export const socketURL = "http://147.93.85.29:5000" 