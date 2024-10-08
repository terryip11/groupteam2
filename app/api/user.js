// pages/api/users.js
import mongoose from "mongoose";
import connectToMongoDB from "../../lib/mongodb"; // 假设您的连接函数在lib/mongodb.js中

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default async function handler(req, res) {
  await connectToMongoDB(); // 确保连接到MongoDB

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
