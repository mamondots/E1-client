"use client";
import { MessageSquareMore } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const MessengerBtn = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [zoom, setZoom] = useState(false);

  const toggleOptions = () => {
    setZoom(!zoom);
    setShowOptions(!showOptions);

    setTimeout(() => setZoom(false), 300);
  };

  return (
    <div className="md:bottom-12 bottom-20 right-4 fixed z-50">
      {/* Main Messenger Button */}
      <button
        onClick={toggleOptions}
        className={`btnzoom text-white p-2 rounded shadow-md transition-all duration-300 cursor-pointer $
        }`}
        style={{
          background: "linear-gradient(135deg, #087096, #0072FF)",
        }}
      >
        <MessageSquareMore className="text-xl" />
      </button>

      {/* Popup Buttons */}
      {showOptions && (
        <div className="absolute -top-24  right-1.5 mt-2 flex flex-col space-y-2">
          {/* WhatsApp Button */}
          <a
            // href="https://wa.me/+8801746770324"

            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-8 h-8 mx-auto flex justify-center items-center rounded shadow-md   transition duration-300"
          >
            <FaWhatsapp className="text-xl" />
          </a>

          {/* Messenger Button */}
          <Link
            // to="https://m.me/107585752267101"
            href="https://www.messenger.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0766FF] text-white w-8 h-8 mx-auto flex justify-center items-center rounded shadow-md   transition duration-300"
          >
            <FaFacebookMessenger className="text-xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MessengerBtn;
