import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi=createApi({
  reducerPath:"Products",
  baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
  endpoints:(builder)=>({
    getAllProducts:builder.query({
      query:()=>'/products'
    }),
    getProductById:builder.query({
      query:(id)=>`/products/${id}`
    })
  }),
})

export const {useGetAllProductsQuery,useGetProductByIdQuery}=productApi