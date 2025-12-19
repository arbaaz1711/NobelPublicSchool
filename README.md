# Nobel Public School - School Website

**Diligence Earns Eminence**

A stunning, modern, and minimal school website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, minimal interface with beautiful gradients and animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Interactive Components**: Smooth animations and hover effects
- **Easy to Customize**: Well-organized component structure with dummy data

## 🎨 Sections

- **Hero Section**: Eye-catching landing with key statistics
- **About**: School mission, values, and achievements
- **Programs**: Showcase of academic and extracurricular programs
- **Faculty**: Meet the dedicated educators
- **Events**: Upcoming school events calendar
- **Contact**: Contact form and information
- **Footer**: Newsletter signup and comprehensive links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
school-website/
├── public/                # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Faculty.jsx
│   │   ├── Events.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎨 Customization

### Update School Information

Edit the dummy data in each component file:

- **School Name & Logo**: Update in `Navbar.jsx` and `Footer.jsx`
- **Hero Content**: Modify text and stats in `Hero.jsx`
- **About Section**: Update mission and values in `About.jsx`
- **Programs**: Add/edit programs in `Programs.jsx`
- **Faculty**: Update faculty members in `Faculty.jsx`
- **Events**: Modify events calendar in `Events.jsx`
- **Contact Info**: Update contact details in `Contact.jsx`

### Change Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### Add Backend Integration

The Contact form currently shows an alert. To integrate with a backend:

1. Install axios: `npm install axios`
2. Update the `handleSubmit` function in `Contact.jsx`
3. Connect to your API endpoint

## 🛠 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Router DOM** - Navigation (ready for multi-page setup)

## 🚀 Deployment on Render

This project is configured for easy deployment on Render as a static site.

### Deploy to Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
   - Sign in or create a free account

2. **Create a New Static Site**
   - Click "New +" button → Select "Static Site"
   - Connect your GitHub repository

3. **Configure Build Settings**
   ```
   Build Command:    npm install && npm run build
   Publish Directory: dist
   ```

4. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site
   - You'll get a free `.onrender.com` URL

### Auto-Deploy on Push

Render automatically redeploys your site whenever you push changes to your GitHub repository!

### Custom Domain (Optional)

- Go to your site's "Settings" on Render
- Add your custom domain under "Custom Domains"
- Follow the DNS configuration instructions

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your school!

## 📧 Support

For questions or support, please contact the development team.

---

Built with ❤️ for Nobel Public School

