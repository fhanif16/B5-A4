import App from "@/App";
import AddBook from "@/home/AddBook";
import AllBooks from "@/home/AllBooks";


import  BorrowSummary from "@/home/BorrowSummary";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllBooks />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },

       {
    path: "/borrowbook",
    element: <BorrowSummary></BorrowSummary>
  },
    ],
  },
 
 
]);