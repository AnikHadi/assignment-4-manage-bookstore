import { addBook } from "../action";

const addedBook = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:9000/books", {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
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

      dispatch(addBook(books));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default addedBook;
