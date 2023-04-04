import { Router } from "express";
import { getComments } from "../controllers/comments.controller";

const commentApi = Router();

commentApi.get("/list", getComments);

export default commentApi;
