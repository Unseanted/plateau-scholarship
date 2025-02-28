import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-green-700 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold">📜 Plateau Scholarship</a>

                {/* Navigation Links */}
                <div className="space-x-6">
                    <a href="/" className="hover:text-yellow-400">Home</a>
                    <a href="/register" className="hover:text-yellow-400">Apply</a>
                    <a href="/login" className="hover:text-yellow-400">Login</a>
                </div>
            </div>
        </nav>
    );
}
