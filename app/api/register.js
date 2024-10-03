import clientPromise from '../../app/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('your-database-name'); // 替換為您的數據庫名稱

    // 檢查用戶是否已存在
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: '用戶已存在' });
    }

    // 創建新用戶
    const newUser = {
      email,
      password, // 這裡應該使用加密庫（如bcrypt）來加密密碼
    };

    await db.collection('users').insertOne(newUser);

    res.status(201).json({ message: '註冊成功' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '服務器錯誤' });
  }
}
