import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/productTypes/" }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => "/",
      providesTags: ["Product"],
    }),
    getProductById: build.query<IProduct, string>({
      query: (id) => `/${id}`,
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    editProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useEditProductMutation,
} = productsApi;
