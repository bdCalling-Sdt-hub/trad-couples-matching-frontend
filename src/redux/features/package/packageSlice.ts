import { baseApi } from "@/redux/base/baseApi";

const packageSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({  
 
        getAllPackages: builder.query({
            query: () => "/package", 
        }),
    }) 
}) 

export const { useGetAllPackagesQuery} = packageSlice