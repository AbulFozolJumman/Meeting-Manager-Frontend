import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importing relevant icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" /> info@coworkingspace.com
            </p>
            <p className="flex items-center justify-center md:justify-start mt-2">
              <FaPhone className="mr-2" /> +123-456-7890
            </p>
            <p className="flex items-center justify-center md:justify-start mt-2">
              <FaMapMarkerAlt className="mr-2" /> 123 Co-working St, City,
              Country
            </p>
          </div>
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://facebook.com"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-2">Additional Links</h4>
            <ul>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © 2024 Meeting Manager Co Working Space. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
