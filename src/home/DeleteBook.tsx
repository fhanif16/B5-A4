// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { useDeleteBookMutation } from "@/redux/api/baseApi";

// interface DeleteBookProps {
//   book: {
//     id: string | number;
//     title: string;
//   };
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   onDeleted?: () => void;
// }

// export default function DeleteBook({ book, open, setOpen, onDeleted }: DeleteBookProps) {
//   const [deleteBook, { isLoading }] = useDeleteBookMutation();

//   const handleDelete = async () => {
//     try {
//       await deleteBook(book.id).unwrap();
//       setOpen(false);
//       if (onDeleted) onDeleted();
//     } catch (error) {
//       console.error("Failed to delete book:", error);
//       alert("Failed to delete the book. Check console for details.");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Confirm Delete</DialogTitle>
//         </DialogHeader>
//         <p>Are you sure you want to delete the book &quot;{book.title}&quot;?</p>
//         <DialogFooter className="flex justify-end gap-4">
//           <Button variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
//             Cancel
//           </Button>
//           <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
//             {isLoading ? "Deleting..." : "Delete"}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
