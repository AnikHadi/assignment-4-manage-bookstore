import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBook from "../../redux/books/thunk/fetchBook";
import { isFeature } from "../../redux/filters/action";
import AddBookInput from "../AddBookInput/AddBookInput";
import SingleBook from "../SingleBook/SingleBook";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterState = useSelector((state) => state.featured);
  const { featured, searchText } = filterState;
  const dispatch = useDispatch();
  const sendChild = { title: "Add New Book", btn: "Add Book" };
  const [idCatch, setIdCatch] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const sendChildForUpdate = { title: "Update the Book", btn: "Update Book" };
  const editBtnHandler = (id) => {
    setIsVisible(true);
    setIdCatch(id);
  };

  useEffect(() => {
    dispatch(fetchBook);
  }, [dispatch]);

  // filter by Featured
  const filterByFeatured = (book) => {
    switch (featured) {
      case "Featured":
        return book.featured;
      default:
        return true;
    }
  };

  // Search filter
  const filterBySearch = (book) => {
    switch (searchText) {
      case searchText:
        return book.name.toLowerCase().includes(searchText.toLowerCase());
      default:
        return true;
    }
  };

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => dispatch(isFeature("All"))}
                className={`filter-btn ${
                  filterState.featured === "All" && "active-filter"
                }`}
                id="lws-filterAll"
              >
                All
              </button>
              <button
                onClick={() => dispatch(isFeature("Featured"))}
                className={`filter-btn ${
                  filterState.featured === "Featured" && "active-filter"
                }`}
                id="lws-filterFeatured"
              >
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {/* <!-- Card  --> */}
            {books
              .filter(filterByFeatured)
              .filter(filterBySearch)
              .map((book) => (
                <SingleBook
                  book={book}
                  key={book.id}
                  editBtnHandler={editBtnHandler}
                />
              ))}
          </div>
        </div>
        <div>
          {/* Add new book & update book input section */}
          {isVisible ? (
            <AddBookInput id={idCatch} setIsVisible={setIsVisible}>
              {sendChildForUpdate}
            </AddBookInput>
          ) : (
            <AddBookInput>{sendChild}</AddBookInput>
          )}
        </div>
      </div>
    </main>
  );
};

export default BookList;
