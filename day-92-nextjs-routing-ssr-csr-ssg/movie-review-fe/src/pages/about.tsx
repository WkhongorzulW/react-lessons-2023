import React from "react";

export async function getStaticProps() {
  return {
    props: {
      theater: "test",
    },
    revalidate: 600,
  };
}

export default function About(props: any): JSX.Element {
  return (
    <div>
      <h1>I am an about page</h1>
      <div>
        <p>Theater name: {props.theater}</p>
      </div>
    </div>
  );
}
