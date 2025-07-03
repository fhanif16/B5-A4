import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/bookSlice";
import { baseApi } from "./api/baseApi";
import borrowModalReducer from "../redux/features/borrowModalSlice"


export const store = configureStore({
    reducer:{
        // book: bookSlice.reducer
        [baseApi.reducerPath] : baseApi.reducer,
        borrowModal: borrowModalReducer,
      
    },


    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
