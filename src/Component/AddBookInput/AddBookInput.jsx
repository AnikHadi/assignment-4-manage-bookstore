import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addedBook from "../../redux/books/thunk/addedBook";
import updatedBook from "../../redux/books/thunk/updatedbook";
import { updateBookBtn } from "../../redux/filters/action";

const AddBookInput = () => {
  const updateBookInfo = useSelector((state) => state.featured).updateBtnData;
  const { id, title, btn } = updateBookInfo;
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = books.filter((book) => book.id === id)[0];

  // Default btn state
  const defaultBtn = {
    id: 0,
    btn: "Add Book",
    title: "Add New Book",
  };

  // Submit Btn Handler
  const submitFormHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: book?.id,
      name: e.target.name.value,
      author: e.target.author.value,
      thumbnail: e.target.thumbnail.value,
      price: parseInt(e.target.price.value),
      rating: parseInt(e.target.rating.value),
      featured: e.target.featured.checked,
    };

    if (btn === "Update Book") {
      dispatch(updatedBook(id, newBook));
    } else if (btn === "Add Book") {
      dispatch(addedBook(newBook));
    }
    e.target.reset();
    dispatch(updateBookBtn(defaultBtn));
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center"> {title}</h4>
      <form onSubmit={submitFormHandler} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            defaultValue={book?.name}
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            className="text-input"
            defaultValue={book?.author}
            type="text"
            id="input-Bookauthor"
            name="author"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            className="text-input"
            defaultValue={book?.thumbnail}
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="text-input"
              defaultValue={book?.price}
              type="number"
              id="input-Bookprice"
              name="price"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              className="text-input"
              defaultValue={book?.rating}
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            defaultChecked={book?.id === id && book?.featured}
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book?{" "}
          </label>{" "}
          <p
            id="add-product-btn"
            onClick={() => dispatch(updateBookBtn(defaultBtn))}
          >
            Add Book?
          </p>
        </div>

        <button type="submit" className="submit" id="submit">
          {btn}
        </button>
      </form>
    </div>
  );
};

export default AddBookInput;
