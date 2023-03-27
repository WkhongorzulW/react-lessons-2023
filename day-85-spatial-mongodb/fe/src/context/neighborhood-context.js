import { createContext, useEffect, useState } from "react";

const NeighborhoodContext = createContext(null);

const NeighborhoodContextProvider = ({ children }) => {
  const ALL_NEIGHBORHOOD_URL = "http://localhost:8081/neighborhood/lists";

  const [neighborhoods, setNeighborhoods] = useState([]);

  async function fetchNeighborhoods(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhoods(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchNeighborhoods(ALL_NEIGHBORHOOD_URL);
  }, []);
  return (
    <NeighborhoodContext.Provider value={neighborhoods}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodContextProvider };
