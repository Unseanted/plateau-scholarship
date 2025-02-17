export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle registration logic
        return res.status(200).json({ message: 'User registered successfully' });
    }
    return res.status(405).json({ message: 'Method Not Allowed' });
}