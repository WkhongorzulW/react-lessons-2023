import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import theaterRouter from "./routes/theaters.api";
import cors from "cors";
import movieApi from "./routes/movie.api";
import commentApi from "./routes/comments.api";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;
const MONGODB_CONNECTION_STRING =
  process.env.MONGODB_STRING || "mongodb://localhost:27017/test";

let name: string = `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Day-92 SSR - CSR - SSG</h1>`;
let phoneNumber: number = 99119911;
let isMarried: boolean = false;
let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"];
let sheep: string[] = ["sheep1", "sheep2", "sheep3"];
let sheepObject: { name: string; age: number } = {
  name: "sheep1",
  age: 1,
};
sheepObject.name = "sheep2";
//sheepObject.age = "2"

interface Student {
  name: string;
  age: number;
  isVerified: boolean;
}

//name = 12;

app.use(express.json());
app.use(cors());
// app.use("/theaters", theaterRouter);
app.use("/movies", movieApi);
app.use("/comments", commentApi);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(name);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
