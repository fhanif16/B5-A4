# 📚 Minimal Library Management System

A responsive, user-friendly library management system built using **React**, **Redux Toolkit Query (RTK Query)**, **TypeScript**, and **Tailwind CSS**. This application allows users to manage books and borrowing operations through a clean interface—without any authentication or payment systems.

---

## ✨ Project Highlights

- 🔧 Built with **React**, **TypeScript**, **RTK Query** for state management and API integration.
- 🎨 Styled with **Tailwind CSS** for a clean, responsive UI.
- ✅ Functional CRUD operations on books.
- 📊 Borrowing system with quantity restrictions and summary reporting.
- 🚫 No login or registration required.

---

## 🔍 Features

### 📘 Book Management

- View all books in a table format.
- Add new books via a form.
- Edit and update existing book details.
- Delete books with confirmation prompt.
- Borrow books directly from the table.

> **Business logic:**  
> - If copies = 0, book is marked unavailable.  
> - Cannot borrow more than available copies.  

### 📥 Borrow Functionality

- Borrow form with:
  - Quantity (number input)
  - Due Date (calendar input)
- Updates book availability in real time.
- Redirects to **Borrow Summary** on success.

### 📈 Borrow Summary

- Aggregated view of all borrowed books.
- Fields: **Title**, **ISBN**, **Total Quantity Borrowed**
- Pulled from a dedicated borrow summary API.

---

## 📁 Project Structure

src/
├── components/
├── pages/
│ ├── AllBooks.tsx
│ ├── AddBook.tsx
│ ├── EditBook.tsx
│ ├── BookDetails.tsx
│ ├── BorrowForm.tsx
│ └── BorrowSummary.tsx
├── redux/
│ ├── api/
│ └── store.ts
├── types/
├── App.tsx
├── main.tsx
└── index.css