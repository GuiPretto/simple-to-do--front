import ApiService from './apiService'

import ValidationError from '../exceptions/validationError'

export default class CardService extends ApiService {

  constructor() {
    super('/api/cards')
  }

  getAllByContainer(id) {
    return this.get(`/getCards/${id}`)
  }

  getById(id) {
    return this.get(`/get/${id}`)
  }

  create(card) {
    return this.post('/create', card)
  }

  update(card) {
    return this.put(`/update/${card.id}`, card)
  }

  remove(id) {
    return this.delete(`/delete/${id}`)
  }

  validar(card) {
    const errors = []

    if (!card.title) {
      errors.push('É obrigatório ter um título.')
    }

    if (errors && errors.length > 0) {
      throw new ValidationError(errors)
    }
  }
}