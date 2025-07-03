import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetBooksQuery, useDeleteBookMutation } from "@/redux/api/baseApi";
import EditBookDialog from "./EditBookDialog";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import BorrowBookDialog from "./BorrowBookDialog";
import { closeBorrowModal, openBorrowModal } from "@/redux/features/borrowModalSlice";

export default function AllBooks() {
  const dispatch = useDispatch();
  const { data, refetch } = useGetBooksQuery();
  const { isOpen, selectedBook } = useSelector((state) => state.borrowModal);
  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const [editBook, setEditBook] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.data?.map((book, index) => (
        <Card key={index} className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{book.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500">{book.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2 text-gray-700">
            <div>
              <span className="font-medium">Author:</span> {book.author}
            </div>
            <div>
              <span className="font-medium">Genre:</span> {book.genre}
            </div>
            <div>
              <span className="font-medium">Copies:</span> {book.copies}
            </div>
            <div>
              <span className="font-medium">Availability:</span>{" "}
              <span className={book.copies > 0 ? "text-green-600" : "text-red-600"}>
                {book.copies > 0 ? "Available" : "Unavailable"}
              </span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-start gap-3 text-sm text-gray-500">
            <div>
              <span className="font-medium">ISBN:</span> {book.isbn}
            </div>
            <div className="flex gap-2 mt-4 w-full">
              <Button
                className="w-1/3 bg-blue-500"
                onClick={() => {
                  setEditBook(book);
                  setOpenDialog(true);
                }}
              >
                Edit Book
              </Button>
              <Button
                className="w-1/3 bg-green-600"
                disabled={book.copies === 0}
                onClick={() => dispatch(openBorrowModal(book))}
              >
                Borrow
              </Button>
              <Button
                className="bg-red-500 w-1/3"
                size="sm"
                onClick={() => {
                  Swal.fire({
                    title: `Delete "${book.title}"?`,
                    text: "This action cannot be undone.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, delete it!",
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      try {
                        await deleteBook({ id: book._id });
                        Swal.fire("Deleted!", "The book has been removed successfully", "success");
                        refetch();
                      } catch (error) {
                        Swal.fire("Error!", "Something went wrong.", "error");
                      }
                    }
                  });
                }}
              >
                Delete
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}

      {/* Edit Book Dialog */}
      {editBook && (
        <EditBookDialog
          book={editBook}
          open={openDialog}
          setOpen={(val) => {
            setOpenDialog(val);
            if (!val) {
              setEditBook(null);
              refetch();
            }
          }}
        />
      )}

 
      {selectedBook && (
        <BorrowBookDialog
          book={selectedBook}
          open={isOpen}
          setOpen={(val) => {
            if (!val) dispatch(closeBorrowModal());
          }}
          refetchBooks={refetch}
        />
      )}
    </div>
  );
}
