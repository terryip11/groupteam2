import 'tailwindcss/tailwind.css';


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 您的公司名稱. 保留所有權利。</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">關於我們</a></li>
            <li><a href="#" className="hover:text-gray-400">聯繫我們</a></li>
            <li><a href="#" className="hover:text-gray-400">隱私政策</a></li>
          </ul>
        </div>
      </footer>
    )
  }
  
  export default Footer;