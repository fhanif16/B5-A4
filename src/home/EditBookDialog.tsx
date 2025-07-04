
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";
interface EditBookDialogProps {
  book: any;
  open: boolean;
  setOpen: (val: boolean) => void;
}
export default function EditBookDialog({ book, open, setOpen }:EditBookDialogProps) {
  const [formData, setFormData] = useState({ ...book });
  const [updateBook] = useUpdateBookMutation();


  useEffect(() => {
    setFormData({ ...book });
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: name === "copies" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateBook({ id: book._id, data: formData }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Book updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setOpen(false);
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: "Something went wrong while updating the book.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <Input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <Input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <Input
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="ISBN"
          />
          <Input
            name="copies"
            type="number"
            value={formData.copies}
            onChange={handleChange}
            placeholder="Copies"
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

