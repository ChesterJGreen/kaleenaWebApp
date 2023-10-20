import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BooksSchema } from '../models/Books';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Books = mongoose.model('Books', BooksSchema);
}

export const dbContext = new DbContext()
