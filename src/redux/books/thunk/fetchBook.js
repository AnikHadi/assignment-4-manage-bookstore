import { loadedBook } from "../action";

const fetchBook = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();

    dispatch(loadedBook(books));
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchBook;
