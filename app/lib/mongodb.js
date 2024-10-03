import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // 從環境變量中獲取MongoDB URI
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('請在.env.local文件中添加MONGODB_URI');
}

if (process.env.NODE_ENV === 'development') {
  // 在開發模式下，使用一個全局變量來避免重複連接
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 在生產模式下，直接連接
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
