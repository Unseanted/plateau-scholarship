export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle login logic
        return res.status(200).json({ message: 'Login successful' });
    }
    return res.status(405).json({ message: 'Method Not Allowed' });
}
