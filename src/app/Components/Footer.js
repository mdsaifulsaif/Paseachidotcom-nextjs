// components/Footer.js
import Image from "next/image";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0081C9] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 mb-2">
            <FaWhatsapp /> WhatsApp: +1 202-918-2132
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> Call Us: +1 202-918-2132
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/appstore.png" // Replace with your App Store image path
                alt="App Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/playstore.png" // Replace with your Play Store image path
                alt="Google Play"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Most Popular Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Most Popular Categories
          </h2>
          <ul className="space-y-2">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Services</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/30 pt-4 text-center text-sm">
        © 2022 All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
}
