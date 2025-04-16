import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Restored original styled heading */}
          <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2 text-gray-900">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start bg-white shadow-xl rounded-2xl p-10">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:ring-black focus:outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:ring-black focus:outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:ring-black focus:outline-none shadow-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-gray-800">cygnus@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-gray-800">+91 0123456789</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-gray-800">
                  NIT Manipur, Imphal, Manipur, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
