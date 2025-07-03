
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BorrowBookDialog({ book, open, setOpen, refetchBooks }) {
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState('');
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async () => {
    if (quantity < 1 || quantity > book.copies) {
      Swal.fire("Invalid quantity", `Please enter between 1 and ${book.copies}`, "warning");
      return;
    }
    if (!dueDate) {
      Swal.fire("Missing due date", "Please select a due date", "warning");
      return;
    }

    try {
     await borrowBook({ book: book._id, quantity, dueDate }).unwrap();

      Swal.fire("Success", `You borrowed ${quantity} copy(ies) of "${book.title}"`, "success");
      setOpen(false);
      refetchBooks(); // refresh after borrowing
    } catch (error) {
      Swal.fire("Error", "Failed to borrow the book. Please try again.", "error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow "{book.title}"</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <Input
              type="number"
              min={1}
              max={book.copies}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Due Date</label>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button
            className="bg-green-600"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Borrow"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
