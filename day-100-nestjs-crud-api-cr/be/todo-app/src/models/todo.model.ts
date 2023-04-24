import * as mongoose from 'mongoose';

export interface Todo {
  id: string;
  title: string;
  comleted: boolean;
}

export const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});
