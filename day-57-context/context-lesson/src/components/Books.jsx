import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

export default function Books() {
  const data = useContext(BookContext);
  return (
    <ul>
      {data.map((item, index) => {
        return <Book key={index} item={item} />;
      })}
    </ul>
  );
}
