const UserModel = require('../models/mongoose/User');

class UserService {
  static async getAll() {
    return UserModel.find({}).sort({ createdAt: -1 });
  }

  static async getOne(userId) {
    return UserModel.findById(userId).exec();
  }

  static async create(data) {
    const user = new UserModel(data);
    const newUser = await user.save();
    console.log(`[CREATE] User: ${newUser._id}:`, newUser);
    return newUser;
  }

  static async update(userId, data) {
    console.info(`[UPDATE] User: ${userId}.`);
    // Fetch the user first
    const user = await UserModel.findById(userId);
    user.email = data.email;

    // Only set the password if it was modified
    if(data.password) {
      user.password = data.password;
    }

    return user.save();
  }

  static async remove(userId) {
    console.info(`[DELETE] User: ${userId}.`);
    return UserModel.deleteOne({ _id: userId }).exec();
  }
}

module.exports = UserService;