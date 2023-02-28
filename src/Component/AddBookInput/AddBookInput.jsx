import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import addedBook from "../../redux/books/thunk/addedBook";
import updatedBook from "../../redux/books/thunk/updatedbook";

const AddBookInput = ({ children, id, setIsVisible }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);
  const book = books.filter((book) => book.id === id)[0];

  // all local state
  const { register, handleSubmit, reset } = useForm();

  const submitFormHandler = (data) => {
    const newBook = {
      id: book?.id,
      name: data.name,
      author: data.author,
      thumbnail: data.thumbnail,
      price: parseInt(data.price),
      rating: parseInt(data.rating),
      featured: data.featured,
    };

    if (children.btn === "Update Book") {
      dispatch(updatedBook(id, newBook));
    } else if (children.btn === "Add Book") {
      dispatch(addedBook(newBook));
    }
    reset();
  };

  const addBookBtn = () => {
    try {
      setIsVisible(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">{children.title}</h4>
      <form onSubmit={handleSubmit(submitFormHandler)} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            defaultValue={book?.name}
            className="text-input"
            type="text"
            id="input-Bookname"
            // name="name"
            {...register("name", { required: "Name is require" })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            className="text-input"
            defaultValue={book?.author}
            {...register("author", { required: true })}
            type="text"
            id="input-Bookauthor"
            // name="author"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            className="text-input"
            defaultValue={book?.thumbnail}
            {...register("thumbnail", { required: true })}
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="text-input"
              defaultValue={book?.price}
              {...register("price", { required: true })}
              type="number"
              id="input-Bookprice"
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              className="text-input"
              defaultValue={book?.rating}
              {...register("rating", { required: true })}
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            defaultChecked={book?.featured}
            {...register("featured")}
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>{" "}
          <span id="add-product-btn" onClick={addBookBtn}>
            Add Book?
          </span>
        </div>

        <button type="submit" className="submit" id="submit">
          {children.btn}
        </button>
      </form>
    </div>
  );
};

export default AddBookInput;
