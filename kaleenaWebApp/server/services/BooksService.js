import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BooksService {
  async getAll(query = {}) {
    const books = await dbContext.Books.find(query).populate('creator', 'name picture')
    return books
  }

  async getById(id) {
    const book = await dbContext.Books.findById(id).populate('creator', 'name picture')
    if (!book) {
      throw new BadRequest('Invalid Id')
    }
    return book
  }

  async create(body) {
    const book = await dbContext.Books.create(body)
    return await dbContext.Books.findById(book._id).populate('creator', 'name picture')
  }

  async edit(body) {
    const book = await dbContext.Books.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    // findOneAndUpdate
    if (!book) {
      throw new BadRequest('Invalid Id')
    }
    return book
  }

  async destroy(id, userId) {
    const book = await dbContext.Books.findOneAndUpdate({ _id: id, creatorId: userId }, { closed: true })
    if (!book) {
      throw new BadRequest('Invalid Id')
    }
    return book
  }
}

export const booksService = new BooksService()