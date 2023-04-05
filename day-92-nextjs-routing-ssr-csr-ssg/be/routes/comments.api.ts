import { Router } from "express";
import {
  getCommentById,
  getComments,
} from "../controllers/comments.controller";

const commentApi = Router();

commentApi.get("/list", getComments);

commentApi.get("/byId/:id", getCommentById);

export default commentApi;
