import { baseApi } from "@/redux/base/baseApi"

const questionsSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({  
 
        createBioQuestions: builder.mutation({
            query: (data) => {
                return {
                    url: "/bio/create-bio",
                    method: "POST",
                    body: data,
                }
            },
        }), 

        createOthersQuestions: builder.mutation({
            query: (data) => {
                return {
                    url: "/questionnaire/answer",
                    method: "POST",
                    body: data,
                }
            },
        }),
    }) 
})  

export const { useCreateBioQuestionsMutation , useCreateOthersQuestionsMutation} = questionsSlice

