import ApiService from './apiService'

import ValidationError from '../exceptions/validationError'

export default class ContainerService extends ApiService {

  constructor() {
    super('/api/containers')
  }

  getAll() {
    return this.get(`/getAll`)
  }

  getById(id) {
    return this.get(`/get/${id}`)
  }

  create(container) {
    this.validate(container)
    return this.post('/create', container)
  }

  update(container) {
    return this.put(`/update/${container.id}`, container)
  }

  remove(id) {
    return this.delete(`/delete/${id}`)
  }

  validate(container) {
    const errors = []

    if (!container.title) {
      errors.push('É obrigatório ter um título.')
    }

    if (errors && errors.length > 0) {
      throw new ValidationError(errors)
    }
  }
}