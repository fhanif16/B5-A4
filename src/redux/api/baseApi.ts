import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://b5-a3.vercel.app/' }),
  tagTypes: ['Books'],
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => `/api/books`,
      providesTags: ['Books'],
    }),
    addBook: build.mutation({
      query: (newBook) => ({
        url: "/api/books",
        method: "POST",
        body: newBook,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ['Books'],
    }),
    updateBook: build.mutation({
      query: ({ id, data }) => ({
        url: `/api/books/${id}`,
        method: "PUT", 
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ['Books'],
    }),
 deleteBook: build.mutation({
  query: ({ id }) => ({
    url: `/api/books/${id}`,
    method: "DELETE",
 
  }),
  invalidatesTags: ['Books'],
}),

//  borrowBook: build.mutation({
//       query: ({ bookId, quantity, dueDate }) => ({
//         url: '/api/borrow',
//         method: 'POST',
//         body: { bookId, quantity, dueDate },
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }),
//       invalidatesTags: ['Books'],
//     }),

borrowBook: build.mutation({
  query: (borrowData) => ({
    url: "/api/borrow", 
    method: "POST",
    body: borrowData
  }),
  invalidatesTags: ['Books'],
}),

getBorrowSummary : build.query({
   query: () => `/api/borrow`,
      providesTags: ['Books'],

})
   
    
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  
} = baseApi;
