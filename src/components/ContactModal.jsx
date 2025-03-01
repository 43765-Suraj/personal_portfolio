import { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <p className="text-lg mb-2">Email: <a href="mailto:surajshende0512@mail.com" className="text-blue-500">surajshende0512@mail.com</a></p>
        <p className="text-lg mb-2">Phone: <a href="tel:+1234567890" className="text-blue-500">+91 9767776695</a></p>
        <p className="text-lg mb-4">Address: Shop no 1, Royal Tower, Next to Bakers company, Sainik Nagar, Clover Park, Viman Nagar, Pune, Maharashtra 411014</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
