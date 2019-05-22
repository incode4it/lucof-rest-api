import { Document } from 'mongoose';

export interface ITask extends Document {
  _id: string;
  createdAt: Date;
  createdBy: string;
  title: string;
  description: string;
  online: boolean;
  location: string;
  category: string;
  budget: string;
  pendingExecutors: IPendingExecutor[];
  assets: Buffer[];
}

export interface IPendingExecutor extends Document {
  userId: string;
  commentText: string;
  createdAt: Date;
}
