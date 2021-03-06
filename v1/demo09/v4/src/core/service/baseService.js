const { v4 } = require("uuid");

class BaseService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async create(item) {
    const id = v4();

    return this.repository.create({
      id,
      ...item,
    });
  }

  async findOne(id) {
    return this.repository.findOne(id);
  }

  async findAll(query) {
    return this.repository.findAll(query);
  }
}

module.exports = BaseService;
