import { baseApi } from "@/redux/base/baseApi";

const viewMeSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({   
         
        getViewMe: builder.query({
            query: () => "/viewMe", 
            providesTags: ["favorites"]
        })
    }) 
}) 

export const {useGetViewMeQuery} = viewMeSlice