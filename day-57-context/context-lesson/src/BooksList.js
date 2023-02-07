import Books from "./components/Books";
import { BookContextProvider } from "./contexts/BookContext";

export default function BooksList() {
  return (
    <div>
      <BookContextProvider>
        <Books />
      </BookContextProvider>
    </div>
  );
}
