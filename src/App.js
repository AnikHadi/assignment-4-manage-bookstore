import "./App.css";
import BookList from "./Component/BookList/BookList";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
