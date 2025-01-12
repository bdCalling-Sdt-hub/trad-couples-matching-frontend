import { baseApi } from "@/redux/base/baseApi"

const detailsSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({  
 
        getPersonDetails: builder.query({
            query: (id) => `/user/user-details/${id}`, 
            transformResponse: (response: any) => {
             
                const {questionary , ...rest} = response.data 
                const data = Array.isArray(questionary) ? [] : Object.values(questionary)  
                const values = {questionary: data, ...rest}
                return values
            }
        }), 

    }) 
}) 

export const {useGetPersonDetailsQuery} = detailsSlice