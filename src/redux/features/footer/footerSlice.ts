import { baseApi } from "@/redux/base/baseApi";

const footerSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // press  
        getPress: builder.query({
            query: () => "/resources/press",
        }),

        // affiliate  
        getAffiliate: builder.query({
            query: () => "/resources/affiliate",
        }),

        // support  
        getSupport: builder.query({
            query: () => "/resources/support",
        }),

        // terms  
        getTerms: builder.query({
            query: () => "/resources/terms",
        }),

        // privacy  
        getPrivacy: builder.query({
            query: () => "/resources/policy",
        }),

        // safety  
        getSafety: builder.query({
            query: () => "/resources/safety",
        }),

        //Cookie 
        getCookie: builder.query({
            query: () => "/resources/cookie",
        }),

        //about 
        getAbout: builder.query({
            query: () => "/resources/about",
        }),

        // blogs  
        getAllBlogs: builder.query({
            query: () => "/blogs",
        }),

        // blog
        getBlog: builder.query({
            query: (id) => `/blogs/${id}`,
        })


    }),
})

export const { useGetPressQuery, useGetAboutQuery, useGetAffiliateQuery, useGetSupportQuery, useGetTermsQuery, useGetPrivacyQuery, useGetSafetyQuery, useGetCookieQuery, useGetAllBlogsQuery, useGetBlogQuery } = footerSlice