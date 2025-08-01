# 🌐 WebCastle Clone – Fullstack CMS Website

A responsive **WebCastle homepage & about page clone** built using **Next.js (App Router)** and **Strapi CMS with MySQL**. This fullstack project includes dynamic CMS-driven sections, frontend authentication with regex validation, and form handling via Strapi.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Backend**: [Strapi v4](https://strapi.io) with MySQL
- **Auth**: Custom frontend auth using regex, JWT in `localStorage`
- **Forms**: Contact & other forms handled via Strapi endpoints

---

## ✨ Features

- 🏠 Homepage and 📄 About page UI cloned from [WebCastle](https://webcastle.com)
- 📦 Dynamic CMS integration (e.g., services, testimonials, awards)
- 🧾 Form submission from frontend to Strapi backend
- 🔐 Signup / Signin system:
  - Regex-based field validation
  - Session stored in `localStorage`
  - Auth-based conditional UI
- 💾 Clean, scalable folder structure

---

## 📁 Folder Structure

webcastle-clone/
├── frontend/ # Next.js app
│ ├── app/ # App Router structure
│ ├── components/ # Reusable UI components
│ ├── utils/ # Helpers (auth, fetch, etc.)
│ └── public/
└── backend/ # Strapi CMS
├── src/api/ # Collection types and controllers
├── config/ # Database + server config
└── public/uploads/ # Media uploads


---

## 🔧 Getting Started

### 1. Clone the Project


git clone https://github.com/nasri-webcastle/webcastle-clone.git
cd webcastle-clone

### 2. Start the Strapi Backend

cd backend
cp .env.example .env
npm install
npm run develop

Make sure your MySQL DB is running and credentials are correct in .env.

### 3. Start the Next.js Frontend

cd ../frontend
cp .env.example .env
npm install
npm run dev

Now visit: http://localhost:3000

🌐 Environment Variables

frontend/.env

NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337


DATABASE_CLIENT=mysql
DATABASE_NAME=your_database
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password

APP_KEYS=some_random_keys
JWT_SECRET=your_jwt_secret
API_TOKEN_SALT=random_token_salt
ADMIN_JWT_SECRET=admin_jwt_secret


🔒 Auth & Validation

Regex Validations Used:

| Field        | Regex Pattern                             |
| ------------ | ----------------------------------------- |
| **Email**    | `/^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/`   |
| **Username** | `/^[a-zA-Z0-9]{3,}$/`                     |
| **Password** | `Min 8 characters, 1 number, 1 uppercase` |

Auth Flow:
Signup/Signin sends credentials to Strapi (/api/auth/local)

JWT token saved in localStorage

Navbar shows user state (logged in/out)

Logout clears token and redirects

Protected routes/components are guarded with auth checks

📬 Forms
All form submissions (like Contact Us) are:

Sent to custom Strapi API endpoints

Saved to Strapi collections

Available in the Strapi Admin Panel

📦 Deployment Notes
You can deploy:

Frontend: Vercel

Backend: Render, Railway, VPS

Make sure to allow CORS from your frontend domain in Strapi.

📄 License
This project is open-source and available for learning purposes only.
It is not affiliated with the official WebCastle agency.

🙏 Acknowledgements
💻 Next.js

⚙️ Strapi CMS

💅 Tailwind CSS

🎨 WebCastle — for the visual inspiration

---

Let me know if you'd like:

- A `LICENSE` file (MIT or custom)
- GitHub project badges (build passing, hosted on Vercel, etc.)
- A deployment tutorial (`vercel.json`, `Procfile`, CI/CD)

I'm ready to help with any of those too!