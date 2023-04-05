import React from "react";

export async function getServerSideProps(req: any) {
  const { date, slug } = req.params;
  console.log(req.params);
  return {
    props: {
      date,
      slug,
    },
  };
}

export default function Greeting(props: any): JSX.Element {
  return (
    <div>
      <h1>Hello {props.slug}</h1>
      <h3>Today is {props.date}</h3>
    </div>
  );
}
