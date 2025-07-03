import { createSlice } from "@reduxjs/toolkit";

const borrowModalSlice = createSlice({
  name: "borrowModal",
  initialState: {
    isOpen: false,
    selectedBook: null,
  },
  reducers: {
    openBorrowModal(state, action) {
      state.isOpen = true;
      state.selectedBook = action.payload; // book object
    },
    closeBorrowModal(state) {
      state.isOpen = false;
      state.selectedBook = null;
    },
  },
});

export const { openBorrowModal, closeBorrowModal } = borrowModalSlice.actions;
export default borrowModalSlice.reducer;
