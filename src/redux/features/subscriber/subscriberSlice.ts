import { baseApi } from "@/redux/base/baseApi";

const subscriberSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({     

        createSubscriber: builder.mutation({
            query: (data) => {
                return {
                    url: "/subscriber",
                    method: "POST",
                    body: data,
                }
            }
        }),

    }) 
})  

export const { useCreateSubscriberMutation } = subscriberSlice