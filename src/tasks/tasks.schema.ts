import * as moongose from 'mongoose';

export const TasksSchema = new moongose.Schema({
  createdAt: Date,
  createdBy: {
    id: moongose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
  },
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
