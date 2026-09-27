# StayNorth 🏔️

**StayNorth** is a full-stack web application for discovering and listing vacation stays across the northern areas of Pakistan — from the valleys of Hunza to the meadows of Naran.

🌐 **Live Demo:** https://wanderlust-1iua.onrender.com/

## Features

- 🔐 User authentication — sign up, log in, log out (Passport.js)
- 🏠 Full CRUD for stay listings — only the owner can edit or delete
- 🖼️ Image uploads with Cloudinary
- ⭐ Reviews with star ratings (only the author can delete)
- 🗺️ Interactive location map (Leaflet + OpenStreetMap)
- ✅ Server-side validation with Joi
- 💬 Flash messages for user feedback
- 📱 Fully responsive design (Bootstrap 5)

## Tech Stack

| Layer      | Technology                              |
|------------|------------------------------------------|
| Frontend   | EJS, Bootstrap 5, custom CSS, Leaflet.js |
| Backend    | Node.js, Express.js 5                    |
| Database   | MongoDB Atlas (Mongoose), connect-mongo  |
| Auth       | Passport.js (local strategy)             |
| Uploads    | Multer + Cloudinary                      |
| Validation | Joi                                      |
| Deployment | Render                                   |

## Getting Started

### Prerequisites

- Node.js v18 or higher
- A MongoDB Atlas account (free tier works)
- A Cloudinary account (free tier works)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/TariqTechie-dev/WanderLust.git
cd WanderLust

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# then open .env and fill in your own values

# 4. Start the server
npm run dev
Open http://localhost:3000 in your browser. 🎉

Environment Variables
Variable	Description
ATLASDB_URL	MongoDB Atlas connection string
SECRET	Secret key for express sessions
CLOUD_NAME	Cloudinary cloud name
CLOUD_API_KEY	Cloudinary API key
CLOUD_API_SECRET	Cloudinary API secret
PORT	Port to run the server (optional)
Project Structure


├── app.js              # App entry point, DB + middleware setup
├── routes/             # Express routes (listings, reviews, users)
├── controllers/        # Route logic
├── models/             # Mongoose schemas (Listing, Review, User)
├── views/              # EJS templates
├── public/             # CSS, client-side JS, images
├── middleware.js       # Auth, ownership & validation middleware
├── schema.js           # Joi validation schemas
├── cloudConfig.js      # Cloudinary configuration
└── init/               # Seed data
Author
Tariq Hussain — MERN Stack Developer

Portfolio: https://tariqweb-engineer.vercel.app/
GitHub: https://github.com/TariqTechie-dev
LinkedIn: https://www.linkedin.com/in/tariq-hussain-65bbb3288


