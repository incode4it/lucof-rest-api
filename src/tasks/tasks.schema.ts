import * as moongose from 'mongoose';

export const TasksSchema = new moongose.Schema({
  createdAt: Date,
  createdBy: moongose.Schema.Types.ObjectId,
  title: String,
  description: String,
  online: Boolean,
  location: String,
  category: String,
  budget: String,
  pendingExecutors: [{
    userId: moongose.Schema.Types.ObjectId,
    commentText: String,
    createdAt: Date,
  }],
  assets: [[Buffer]],
});
