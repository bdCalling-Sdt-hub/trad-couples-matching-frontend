import { baseApi } from "@/redux/base/baseApi"

const profileSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({  
        
        getBio: builder.query({
            query: () => "/bio",
        }), 

        updateBio: builder.mutation({
            query: (data) => {
                return {
                    method: "PATCH",
                    url: "/bio",
                    body: data,
                }
            },
        }), 

         getQuestionnaire: builder.query({
            query: () => "/questionnaire",
        }), 

        updateQuestionnaire: builder.mutation({
            query: (data) => {
                return {
                    method: "PATCH",
                    url: "/questionnaire",
                    body: data, 
                }
            } ,
        }),
      
    }) 
})  

export const { useGetBioQuery , useUpdateBioMutation , useGetQuestionnaireQuery , useUpdateQuestionnaireMutation } = profileSlice
