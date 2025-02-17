//components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full flex justify-between p-4 items-center">
            <Link href="/">
                <img src="/images/plateau_logo.png" width={60} height={60} alt="Plateau State Logo" className="cursor-pointer" />
            </Link>
            <h1 className="text-3xl font-extrabold tracking-wide font-poppins">
                Plateau State Scholarship Program
            </h1>
            <Link href="/">
                <img src="/images/students_logo.png" width={60} height={60} alt="Students Logo" className="cursor-pointer" />
            </Link>
            <Link href="/" className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600">
                Home
            </Link>
        </header>
    );
}
