import { deleteBook } from "../action";

const deletedBook = (bookId) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:9000/books/${bookId}`, {
        method: "DELETE",
      });

      dispatch(deleteBook(bookId));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default deletedBook;
