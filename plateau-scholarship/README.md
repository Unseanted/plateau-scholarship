# Plateau State Students Scholarship Platform

This is a **Next.js**-based web application designed to help Plateau State students apply for scholarships, verify their eligibility, and track disbursements.

## Features
- **Student Registration**: Users can sign up and apply for scholarships.
- **Sliding Images on Welcome Page**: Showcases student success stories.
- **Authentication & Role-Based Access Control (RBAC)**:
  - Admin, Reviewer, and Finance Officer roles.
  - JWT authentication with **Multi-Factor Authentication (MFA)** for admins.
- **Scholarship Disbursement Management**: Tracks approved and disbursed scholarships.
- **Export Reports to CSV**: Filtered reports based on date range, institution, and eligibility status.
- **Responsive UI**: Designed with **Tailwind CSS** and a **green-yellow gradient background**.
- **Deployed on Vercel**.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS, ShadCN, Swiper.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL or MongoDB
- **Authentication**: JWT, MFA (Google Authenticator + Email OTP)
- **Payments**: Paystack API

## Installation
### Prerequisites
- Node.js (v16+ recommended)
- NPM or Yarn

### Clone the Repository
```bash
git clone https://github.com/your-username/plateau-scholarship/plateau-scholarship-platform.git
cd plateau-scholarship-platform
```

### Install Dependencies
```bash
npm install  # or yarn install
```

### Environment Variables
Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
```

### Run the Development Server
```bash
npm run dev  # or yarn dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment on Vercel
1. **Sign in to Vercel**: Create an account at [vercel.com](https://vercel.com/).
2. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```
3. **Login to Vercel**:
   ```bash
   vercel login
   ```
4. **Deploy the App**:
   ```bash
   vercel
   ```
   Follow the on-screen prompts to set up the project.

### Automatic Deployment
For continuous deployment:
- **Connect GitHub Repository** to Vercel.
- **Push changes to `main` branch** → Vercel will deploy automatically.

## License
This project is open-source under the MIT License.

## Contributors
- **Sean Samuel** - [GitHub Profile](https://github.com/Unseanted)

---
_Deployed with ❤️ on Vercel._


