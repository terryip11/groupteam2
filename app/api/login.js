import clientPromise from '../../app/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('your-database-name'); // 替換為您的數據庫名稱

    // 查找用戶
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(401).json({ message: '電子郵件或密碼錯誤' });
    }

    // 這裡可以添加密碼驗證邏輯（例如使用bcrypt）
    if (user.password !== password) {
      return res.status(401).json({ message: '電子郵件或密碼錯誤' });
    }

    // 登錄成功
    res.status(200).json({ message: '登錄成功' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '服務器錯誤' });
  }
}
