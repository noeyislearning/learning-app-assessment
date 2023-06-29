const ItemModel = require('../models/mongoose/Item');

class ItemService {
  static async getAll() {
    return ItemModel.find({}).sort(
      {createdAt: -1}
    ).exec();
  }

  static async getOne(itemId) {
    return ItemModel.findById(itemId).exec();
  }

  static async create(data) {
    const item = new ItemModel(data);
    const savedItem = await item.save();
    console.log(`Created item with ID ${savedItem._id}:`, savedItem);
    return savedItem;
  }

  static async update(itemId, data) {
    console.info(`The item was ${itemId} updated!`)
    return ItemModel.findByIdAndUpdate(itemId, data).exec();
  }

  static async remove(itemId) {
    console.info(`The item was ${itemId} deleted!`);
    return ItemModel.deleteOne({_id: itemId}).exec();  
  }
}

module.exports = ItemService;