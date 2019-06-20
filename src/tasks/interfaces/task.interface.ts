import { Document } from 'mongoose';
import { User } from 'src/users/intefaces/user.interface';

export interface ITask extends Document {
  _id: string;
  createdAt: Date;
  createdBy: Partial<User>;
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
