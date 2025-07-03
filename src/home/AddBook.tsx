import Swal from "sweetalert2"; 
import { useState } from "react";
import { useAddBookMutation } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button";

export default function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    isbn: "",
    copies: 1,
  });

  const [addBook, { isLoading }] = useAddBookMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "copies" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(formData).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Book added successfully.",
      });
      setFormData({
        title: "",
        author: "",
        genre: "",
        description: "",
        isbn: "",
        copies: 1,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to add book.",
      });
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "author", "genre", "description", "isbn"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        ))}

        <input
          type="number"
          name="copies"
          value={formData.copies}
          onChange={handleChange}
          placeholder="Copies"
          className="w-full px-3 py-2 border rounded"
          min={0}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Book"}
        </Button>
      </form>
    </div>
  );
}
