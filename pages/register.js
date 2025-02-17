import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
            <Header />
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Full Name" className="p-2 border rounded" />
                    <input type="email" placeholder="Email" className="p-2 border rounded" />
                    <input type="password" placeholder="Password" className="p-2 border rounded" />
                    <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}