import { createContext } from "react";
import { DATA } from "../data/data";

const BookContext = createContext(null);

const data = DATA;

const BookContextProvider = ({ children }) => {
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export { BookContext, BookContextProvider };
