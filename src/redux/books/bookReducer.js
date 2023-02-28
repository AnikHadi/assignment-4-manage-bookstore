import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from "./actionType";

// initializeState
const initializeState = [];

const bookReducer = (state = initializeState, action) => {
  switch (action.type) {
    case LOADED_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          author: action.payload.author,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          rating: action.payload.rating,
          featured: action.payload.featured > 5 ? 5 : action.payload.featured,
        },
      ];

    case UPDATE_BOOK:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            author: action.payload.author,
            thumbnail: action.payload.thumbnail,
            price: action.payload.price,
            rating: action.payload.rating,
            featured: action.payload.featured > 5 ? 5 : action.payload.featured,
          };
        }
        return book;
      });

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
