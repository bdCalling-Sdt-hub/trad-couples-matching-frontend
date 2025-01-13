import { baseApi } from "@/redux/base/baseApi";

const discoverSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({  
 
        getAllDiscover: builder.query({
            query: () => {
                return {
                    url: "/bio/discover", 
                } 
            }
        }),
    }) 
}) 

export const {useGetAllDiscoverQuery} = discoverSlice
