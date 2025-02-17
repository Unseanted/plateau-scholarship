import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import SlidingImages from '../src/components/SlidingImages';
import { Button } from '../src/components/Button';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-yellow-400 flex flex-col justify-center items-center text-white">
            <Header />
            <SlidingImages />
            <p className="mt-8 text-lg text-center max-w-2xl font-semibold font-roboto">
                Empowering students through education, financial support, and opportunities for a brighter future.
            </p>
            <div className="mt-8 flex gap-4">
                <Button href="/register" text="Register" color="green" />
                <Button href="/login" text="Login" color="yellow" />
            </div>
            <Footer />
        </div>
    );
}
