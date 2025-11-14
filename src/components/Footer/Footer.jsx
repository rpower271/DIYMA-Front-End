import { Link } from "react-router";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="fixed bottom-0 center-0 w-full bg-white shadow-md z-50 flex justify-between items-center bg-white shadow-md px-6 py-3">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/images/diy.png"
          alt="DIYMA logo"
          className="w-14 h-14 object-contain"
        />
        <p className="text-2xl font-bold text-gray-800">DIYMA</p>
      </Link>
      <ul className="footer-links">
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>Resources</li>
      </ul>
    </footer>
  );
}
