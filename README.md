# Bus Booking System 
# 🚌 Colombo Bus Booking Website - Complete Setup Guide

A modern, AI-powered bus booking website for Sri Lankan bus routes in the Colombo district with an intelligent chatbot assistant.

## ✨ Features

- 🤖 **Intelligent Chatbot** - AI assistant that answers questions about routes, prices, bookings
- 🔍 **Smart Search** - Search buses by origin, destination, and date
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Beautiful gradient backgrounds and smooth animations
- 🚍 **Route Information** - Detailed info about popular bus routes
- 💳 **Booking System** - Complete booking functionality
- 📊 **My Bookings** - View and manage your bookings

## 🚀 Step-by-Step Setup (For Complete Beginners)

### Prerequisites

First, install these on your computer:

1. **Node.js** (v18 or higher)
   - Go to https://nodejs.org/
   - Download and install the LTS version
   - After installation, verify by opening terminal/command prompt and typing:
     ```bash
     node --version
     npm --version
     ```

2. **A Code Editor** (VS Code recommended)
   - Go to https://code.visualstudio.com/
   - Download and install

### Installation Steps

#### Step 1: Create Your Project

Open your terminal (Mac/Linux) or Command Prompt (Windows) and run:

```bash
# Create a new Next.js project
npx create-next-app@latest colombo-bus-booking

# When prompted, answer these questions:
# ✔ Would you like to use TypeScript? › No
# ✔ Would you like to use ESLint? › Yes
# ✔ Would you like to use Tailwind CSS? › Yes
# ✔ Would you like to use `src/` directory? › Yes
# ✔ Would you like to use App Router? › Yes
# ✔ Would you like to customize the default import alias? › No

# Navigate into your project folder
cd colombo-bus-booking

# Install additional packages
npm install lucide-react date-fns
```

#### Step 2: Copy All the Files

Now you need to copy all the code files I provided above into your project. Here's where each file goes:

1. **src/app/layout.js** - Replace the existing file
2. **src/app/page.js** - Replace the existing file
3. **src/app/globals.css** - Replace the existing file
4. **Create src/app/bookings/page.js** - New file
5. **Create src/app/api/chat/route.js** - New folder and file
6. **Create src/data/busRoutes.js** - New folder and file
7. **Create these in src/components/** (new folder):
   - Navbar.js
   - Hero.js
   - SearchForm.js
   - PopularRoutes.js
   - Features.js
   - Chatbot.js
   - Footer.js

**Quick way to create folders in terminal:**

```bash
# Make sure you're in the project folder
cd colombo-bus-booking

# Create the folders
mkdir -p src/components
mkdir -p src/data
mkdir -p src/app/api/chat
mkdir -p src/app/bookings
```

Then copy each code file I provided into the corresponding location using your code editor.

#### Step 3: Run Your Website

```bash
# Start the development server
npm run dev
```

Now open your browser and go to: **http://localhost:3000**

🎉 **Your website should now be running!**

## 📁 Project Structure

```
colombo-bus-booking/
├── src/
│   ├── app/
│   │   ├── layout.js          # Main layout wrapper
│   │   ├── page.js            # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── bookings/
│   │   │   └── page.js        # Bookings page
│   │   └── api/
│   │       └── chat/
│   │           └── route.js   # Chatbot API endpoint
│   ├── components/
│   │   ├── Navbar.js          # Navigation bar
│   │   ├── Hero.js            # Hero section
│   │   ├── SearchForm.js      # Search functionality
│   │   ├── PopularRoutes.js   # Display bus routes
│   │   ├── Features.js        # Features section
│   │   ├── Chatbot.js         # Chatbot UI
│   │   └── Footer.js          # Footer section
│   └── data/
│       └── busRoutes.js       # Bus routes data
├── package.json
└── README.md
```

## 🤖 Chatbot Features

The chatbot can help users with:

- **Find Routes**: "Show me buses from Colombo Fort to Negombo"
- **Check Prices**: "How much does it cost to go to Kalutara?"
- **Booking Info**: "How do I book a ticket?"
- **Payment Methods**: "What payment methods do you accept?"
- **Cancellation Policy**: "Can I cancel my booking?"
- **Operating Hours**: "What time do buses operate?"
- **List Locations**: "What locations do you serve?"

The chatbot uses pattern matching and responds intelligently to user queries!

## 🎨 Customization

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: #2563eb;    /* Change primary color */
  --secondary: #f59e0b;  /* Change secondary color */
}
```

### Add More Routes

Edit `src/data/busRoutes.js` and add more routes to the `busRoutes` array.

### Modify Chatbot Responses

Edit `src/app/api/chat/route.js` to customize chatbot responses.

## 📱 Testing Your Website

1. **Homepage** - http://localhost:3000
2. **Bookings Page** - http://localhost:3000/bookings
3. **Chatbot** - Click the blue chat icon in the bottom-right corner

## 🚀 Deploying Your Website

### Deploy on Vercel (Free & Easy)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

Done! Your website will be live in minutes.

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
npm install
```

### Port already in use
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

### Chatbot not responding
- Check that `src/app/api/chat/route.js` exists
- Restart the development server: `npm run dev`

## 📞 Support

Need help? The chatbot in the app can answer questions, or you can:

- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs

## 🎯 Next Steps

Want to enhance your website? Consider adding:

1. **Real Database** - Use MongoDB or PostgreSQL
2. **User Authentication** - Add login/signup with NextAuth.js
3. **Payment Integration** - Integrate PayHere or Stripe
4. **Email Notifications** - Send booking confirmations
5. **Admin Dashboard** - Manage routes and bookings
6. **Real-time Availability** - Show available seats
7. **GPS Tracking** - Track bus locations

## 📝 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

Happy Coding! 🚀