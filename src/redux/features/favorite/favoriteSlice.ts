import { baseApi } from "@/redux/base/baseApi";

const favoriteSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getFavorite: builder.query({
            query: () => "/favorite", 
            providesTags: ["favorites"]
        }),

        createFavorites: builder.mutation({
            query: (data) => {
                return {
                    method: "POST",
                    url: "/favorite/make-favorite",
                    body: data,
                }
            }, 
            invalidatesTags: ["favorites"]
        }),


    })
})

export const { useGetFavoriteQuery, useCreateFavoritesMutation } = favoriteSlice 