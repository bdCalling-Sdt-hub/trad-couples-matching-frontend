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
            transformResponse: (response: any) => { 
            
                const data = Array.isArray(response?.data) ? [] : Object.values(response?.data)
                return data
            }
        }),  

        getAllQuestions: builder.query({
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

        getProfilePicture:builder.query({
            query: () => "/gallery",
        }),  

        CreateProfilePicture:builder.mutation({
            query: (data) => {
                return {
                    method: "POST",
                    url: "/gallery/upload-picture",
                    body: data,
                }
            },
        }),


      
    }) 
})  

export const { useGetBioQuery , useUpdateBioMutation , useGetQuestionnaireQuery , useUpdateQuestionnaireMutation , useGetAllQuestionsQuery , useCreateProfilePictureMutation , useGetProfilePictureQuery } = profileSlice
