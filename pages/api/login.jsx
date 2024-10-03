export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { email, password } = req.body;
  
    // 這裡可以添加實際的登錄邏輯，例如查詢數據庫
    if (email === 'user@example.com' && password === 'password') {
      res.status(200).json({ message: '登錄成功' });
    } else {
      res.status(401).json({ message: '電子郵件或密碼錯誤' });
    }
  }
