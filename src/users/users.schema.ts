import * as moongose from 'mongoose';

export const UsersSchema = new moongose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});
