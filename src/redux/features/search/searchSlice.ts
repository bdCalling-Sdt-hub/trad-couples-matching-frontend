import { baseApi } from "@/redux/base/baseApi"

const searchSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({  

        getAllPersons: builder.query({
            query: (params) =>{ 
                console.log(params);
                return{
                    url: "/bio/find-people", 
                    params
                }
            }
        }),
    }) 
}) 

export const {useGetAllPersonsQuery} = searchSlice