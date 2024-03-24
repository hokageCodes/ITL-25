import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white pt-10 px-4 pb-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <Image width={50} height={50} src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Conference</span>
            </a>
            <p>The premier event for professionals in the industry, bringing together experts and enthusiasts from around the world.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6 className="font-bold mb-2">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Speakers</a></li>
              <li><a href="#" className="hover:text-gray-300">Schedule</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h6 className="font-bold mb-2">Resources</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media & Contact */}
          <div>
            <h6 className="font-bold mb-2">Follow Us</h6>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
            <div className="mt-8">
              <h6 className="font-bold mb-2">Contact Us</h6>
              <p>info@conference.com</p>
              <p>+1 234 567 8900</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-xs border-t border-gray-700 pt-4 mt-8">
          © 2024 Conference Name. All rights reserved.
          <div className="mt-2">
            <a href="#" className="hover:text-gray-300 mr-4">Terms of Use</a>
            <a href="#" className="hover:text-gray-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
