import { booksdata } from '@/home/booksData'
import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    books : booksdata
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers:{

    }


})


export default bookSlice.reducer