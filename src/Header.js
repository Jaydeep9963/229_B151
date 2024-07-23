import React from "react";

function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-800">
          Your Site Name
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:text-blue-500">
                Categories
              </a>
            </li>
            <li>
              <a href="/subscribe" className="hover:text-blue-500">
                Subscribe
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
