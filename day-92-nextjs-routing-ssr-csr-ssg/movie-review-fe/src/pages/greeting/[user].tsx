import React from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(req: any) {
  console.log(req.params);
  const { user } = req.params;

  console.log(user);
  return {
    props: {
      user,
    },
  };
}

export default function Greeting(props: any): JSX.Element {
  const { query } = useRouter(); //query param -iig front end heseg deer hiine
  console.log(query);
  return (
    <div>
      <h1>Hello {props.user}</h1>
      <h2>He is {query.age} yo.</h2>
    </div>
  );
}
