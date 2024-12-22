import { baseApi } from "@/redux/base/baseApi";

const faqSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({ 
 
        getAllFaqs:builder.query({
            query: () => "/faq",
        })
    }),
}); 

export const {useGetAllFaqsQuery} = faqSlice