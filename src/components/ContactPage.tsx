import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <span>contact@CYGNUS.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span>NIT Manipur, Langol, Imphal, Manipur, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}