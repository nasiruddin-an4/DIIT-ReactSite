import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl">
                    DIIT Digital Campus
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Excellence Through Innovation
                  </p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
                Transforming potential into professional excellence through
                quality education, industry partnerships, and innovative
                learning experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-bold">yt</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-headline font-semibold text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    About DIIT
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/faculty"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="/alumni"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    Alumni
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-headline font-semibold text-lg mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-blue-200">
                <p>
                  Dhanmondi, Dhaka-1205
                  <br />
                  Bangladesh
                </p>
                <p>
                  Phone: +880-2-9661301
                  <br />
                  Email: info@diit.edu.bd
                </p>
                <p>
                  Admission Hotline:
                  <br />
                  +880-1700-000000
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-blue-200 text-sm">
              © {new Date()?.getFullYear()} DIIT Digital Campus. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
