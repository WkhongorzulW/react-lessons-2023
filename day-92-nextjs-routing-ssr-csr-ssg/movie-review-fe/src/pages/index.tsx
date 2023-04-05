import React from "react";

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theaters/list");
  const theaterData = await theaterRequest.json();
  console.log(theaterData);
  return {
    props: {
      theater: theaterData,
    },
  };
}

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server";
  return (
    <div>
      {" "}
      <div>Welcome</div>
      <div>You are currently on the {side}-side.</div>
    </div>
  );
}
