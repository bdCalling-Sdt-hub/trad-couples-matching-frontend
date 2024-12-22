import { baseApi } from "@/redux/base/baseApi";
import { GetLocalStorage } from "@/util/LocalStroage";


const resetToken = GetLocalStorage("resetToken") 
const authSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({ 

      register:builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "/user/sign-up",
            body: data,
          };
        },
      }) ,
        otpVerify: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/verify-email",
                    body: data,
                }
            }
        }),
        login: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/login",
                    body: data
                }
            },
        }),
        forgetPassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/forget-password",
                    body: data
                }
            }
        }),
        resetPassword: builder.mutation({
            query:(value)=>({
                url:"/auth/reset-password" ,
                headers: {authorization: resetToken},
                method:"POST" ,
                body: value
            })
        }) ,  

        changePassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/change-password",
                    body: data,
                }
            }
        }),

        updateProfile: builder.mutation({
            query: (data) => {
                return{
                    method: "PATCH",
                    url: "/user/profile-update",
                    body: data,
                }
            }
        }),

        profile: builder.query({
            query: () => {
                return{
                    url: "/user/profile",   
                }
            },
        }),
    })
});

export const { 
  useRegisterMutation ,
  useLoginMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useOtpVerifyMutation,
  useUpdateProfileMutation,
  useProfileQuery
} = authSlice;