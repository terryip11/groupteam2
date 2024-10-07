import mongoose from "mongoose";
import express from 'express';
import User from './models/User';


 const connectToMongoDB = async ()=> {
  if(mongoose.connections[0].readyState){
    console.log("Already connected");
    return;
  }

  try{
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  }catch(err){
    console.log('Error connecting to MongoDB:', err);
  }
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

const app = express();

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



export default connectToMongoDB;