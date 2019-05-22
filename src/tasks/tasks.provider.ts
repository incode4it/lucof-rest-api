import { Connection } from 'mongoose';
import { DB_PROVIDER, TASKS_MODEL_PROVIDER } from 'src/core/constants';
import { TasksSchema } from './tasks.schema';

export const tasksProvider = [
  {
    provide: TASKS_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Tasks', TasksSchema),
    inject: [DB_PROVIDER],
  },
];
