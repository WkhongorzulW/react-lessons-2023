import mongoose, { Schema } from "mongoose";

interface IComment {
  name: {
    type: string;
    required: true;
  };
  email: {
    type: string;
    required: true;
  };
  movie_id: { type: mongoose.Schema.Types.ObjectId; ref: "Movies" };
  text: string;
  date: Date;
}

const CommentSchema: Schema = new Schema({});

const CommentModel = mongoose.model<IComment>("Comments", CommentSchema);

export default CommentModel;
