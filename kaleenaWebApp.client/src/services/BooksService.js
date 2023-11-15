import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BooksService {
  async getAll() {
    try {
      const res = await api.get('api/books')
      AppState.books = res.data
      return res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const booksService = new BooksService()
