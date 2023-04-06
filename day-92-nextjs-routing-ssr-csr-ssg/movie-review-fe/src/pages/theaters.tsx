import { useEffect, useState } from "react";

interface IGeo {
  type: {
    type: string;
    enum: ["Point"];
    required: true;
  };
  coordinates: {
    type: [number, number];
    required: true;
  };
}

interface IAddress {
  street1: string;
  city: string;
  state: string;
  zipcode: string;
}

interface ILocation {
  address: IAddress;
  geo: IGeo;
}

interface ITheater {
  theaterId: number;
  location: ILocation;
}

export default function Theaters(): JSX.Element {
  const THEATER_LIST_URL = "http://localhost:8080/theaters/list";

  const [theaters, setTheaters] = useState<ITheater[]>([]);

  // useEffect(() => {
  //   fetchTheaters();
  // }, []);

  // async function fetchTheaters(): Promise<void> {
  //   const FETCHED_DATA = await fetch(THEATER_LIST_URL);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   setTheaters(FETCHED_JSON);
  //   console.log(theaters);
  // }

  return (
    <div>
      <h1>Theaters</h1>
      {/* {theaters.map((theater, index) => (
        <div key={index}>
          <h2>{theater.theaterId}</h2>
        </div>
      ))} */}
    </div>
  );
}
