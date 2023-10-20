import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BooksSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

BooksSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
