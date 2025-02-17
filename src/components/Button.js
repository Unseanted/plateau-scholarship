//components/Button.js
import Link from 'next/link';

export function Button({ href, text, color }) {
    const colorClasses = {
        green: "text-green-600",
        yellow: "text-yellow-600"
    };

    return (
        <Link href={href} className={`px-6 py-3 bg-white ${colorClasses[color] || "text-black"} font-bold rounded-lg shadow-lg`}>
            {text}
        </Link>
    );
}
