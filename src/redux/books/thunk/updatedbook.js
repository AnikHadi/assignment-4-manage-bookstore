import { updateBook } from "../action";

const updatedBook = (bookId, data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${bookId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          author: data.author,
          thumbnail: data.thumbnail,
          price: data.price,
          rating: data.rating,
          featured: data.featured > 5 ? 5 : data.featured,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      const books = await response.json();

      dispatch(updateBook(books));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default updatedBook;
