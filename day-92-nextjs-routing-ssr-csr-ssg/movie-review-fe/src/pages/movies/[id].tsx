import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import NavigationBar from "@/components/navigation.bar";

export default function MovieDetail({ data }: { data: any }): JSX.Element {
  console.log(data[0].genres);
  return (
    <div className="w-[70rem] m-auto my-5">
      <NavigationBar />
      <div className="mt-2 flex justify-center gap-5 w-[60rem] mx-auto">
        <img
          src={
            data[0].poster
              ? data[0].poster
              : "https://images.unsplash.com/photo-1680264534453-27b46832ffe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
          }
          alt="poster"
          className="h-80 rounded-xl"
        />
        <div className="bg-gray-100 rounded-xl py-8 px-20 text-center">
          <h2 className="font-bold text-gray-700 text-2xl">{data[0].title}</h2>
          <div>
            {data[0].year}/{" "}
            {data[0].genres.map((g: string, idx: number) => (
              <span key={idx}>{g},</span>
            ))}
            /{data[0].runtime}
          </div>
          <div className="flex justify-center mt-5">
            <div>
              <div className="flex">
                <img
                  src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg"
                  alt=""
                  className="w-12 inline"
                />
                <span className="text-4xl font-bold mt-2">
                  {data[0].imdb.rating}
                </span>
              </div>
              <div className="font-semibold mt-5">TOMATOMETER</div>
              <div className="font-light text-sm text-blue-600">8 Reviews</div>
            </div>
            <div>
              <div className="flex">
                <img
                  src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg"
                  alt="popcorn"
                  className="w-12 ms-20 inline"
                />
                <span className="text-4xl font-bold mt-2">
                  {data[0].imdb.votes}
                </span>
              </div>
              <div className="font-semibold ms-10 mt-5">AUDIENCE SCORE</div>
              <div className="font-light text-sm ms-10 text-blue-600">
                Fewer than 50 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[43rem] mx-auto mt-10">
        <div className="flex justify-start gap-2">
          <div className="w-1 h-6 bg-red-500 "></div>
          <div className="font-semibold text-xl">RATE AND REVIEW</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(req: any) {
  const { id } = req.params;
  const res = await axios(`http://localhost:8080/movies/byId/${id}`);
  const data = await res.data;

  // console.log(id);
  // console.log(data);

  return {
    props: {
      data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await axios(`http://localhost:8080/movies/list`);
//   const movies = await res.data;
//   // console.log("res" + res);
//   // console.log("movies" + movies);

//   const ids = movies.map((movie: any) => movie._id);
//   const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
