import { baseApi } from "@/redux/base/baseApi";

const viewMeSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({   
         
        getViewMe: builder.query({
            query: () => "/viewMe",
        })
    }) 
}) 

export const {useGetViewMeQuery} = viewMeSlice