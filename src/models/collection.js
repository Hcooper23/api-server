class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const createdRecord = await this.model.create(data);
      return createdRecord;
    } catch (error) {
      throw new Error(`Error creating record: ${error.message}`);
    }
  }

  async read() {
    try {
      const records = await this.model.findAll();
      return records;
    } catch (error) {
      throw new Error(`Error retrieving records: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const updatedRecord = await this.model.update(data, {
        where: { id },
      });
      return updatedRecord;
    } catch (error) {
      throw new Error(`Error updating record: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const deletedRecord = await this.model.destroy({
        where: { id },
      });
      return deletedRecord;
    } catch (error) {
      throw new Error(`Error deleting record: ${error.message}`);
    }
  }
}

module.exports = Collection;