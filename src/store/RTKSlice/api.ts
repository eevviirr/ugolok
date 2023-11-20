import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface IPostCode {
    code: string;
    body: {
        name: string;
        surname: string;
        phone_number: string;
    };
}

export const ugolokApi = createApi({
    reducerPath: "ugolokApi",
    tagTypes: ["getUser", "addPoint", "getPoints"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://xn--90abdibneekjf0abcbbqil3bejr0c1r.xn--p1ai:8000/",
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (token: string) => `proprietors/by/token?token=${token}`,
            providesTags: ["getUser"],
        }),
        getPhone: builder.mutation({
            query: (phone) => ({
                url: `proprietors/verify/phone?phone_number=%2B${phone}`,
                method: "GET",
            }),
        }),
        postCode: builder.mutation({
            query: ({ code, body }: IPostCode) => ({
                url: `proprietors?code=${code}`,
                method: "POST",
                body: body,
            }),
        }),
        getPoints: builder.query({
            query: (pointId) => `points?pointID=${pointId}`,
            providesTags: ["getPoints"],
        }),
        addPoint: builder.mutation({
            query: ({ token, body }) => ({
                url: `points?token=${token}`,
                method: "POST",
                body: body,
            }),
            invalidatesTags: ["getUser"],
        }),
        patchPoint: builder.mutation({
            query: ({ token, pointId, body }) => ({
                url: `/points?token=${token}&pointID=${pointId}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["getPoints"],
        }),
    }),
});

export const {
    useGetUserQuery,
    useGetPhoneMutation,
    usePostCodeMutation,
    useLazyGetPointsQuery,
    useGetPointsQuery,
    useAddPointMutation,
    usePatchPointMutation,
} = ugolokApi;