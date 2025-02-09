import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTradeFederation, FaTrademark, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Club Info */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">FC Kasangati Lions</h2>
            <p className="text-gray-400 mt-2">
              The home of champions. Join us in making history on and off the pitch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-blue-700">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/matches" className="hover:text-yellow-400">Matches</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 ml-5">Follow Us</h3>
            <div className="flex space-x-4 mt-3 text-blue-700">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" title="Our WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" title="Our Facebook">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" title="Our Twitter">
              <FaXTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" title="Our Instagram">
              <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" title="Our Youtube">
              <FaYoutube />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" title="Our Telegram">
              <FaTelegram />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} FC Kasangati Greater Lions Club&trade;. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
