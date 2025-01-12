import { baseApi } from "@/redux/base/baseApi";

const favoriteSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({    
 
        getFavorite: builder.query({
            query: () => "/favorite",
        }), 

        createFavorite: builder.mutation({
            query: (data) => {
                return {
                    method: "POST",
                    url: "/favorite/make-favorite",
                    body: data,
                }
            },
        }), 


    }) 
}) 

export const {useGetFavoriteQuery, useCreateFavoriteMutation} = favoriteSlice 