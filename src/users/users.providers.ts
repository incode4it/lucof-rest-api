import { Connection } from 'mongoose';
import { UsersSchema } from './users.schema';
import { DB_PROVIDER, USER_MODEL_PROVIDER } from 'src/core/constants';

export const usersProvider = [
  {
    provide: USER_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('Users', UsersSchema),
    inject: [DB_PROVIDER],
  },
];
