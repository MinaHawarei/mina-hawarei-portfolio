# Mina Hawarei - Portfolio

A modern, responsive portfolio website showcasing the work and skills of Mina Hawarei , a Software Developer & Technical Leader based in Alexandria, Egypt.

## 🚀 Live Demo

Visit the live portfolio: [https://minahawarei.github.io/mina-portfolio](https://minahawarei.github.io/mina-portfolio)

## ✨ Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Dynamic Projects**: Fetches real-time data from GitHub API
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Interactive contact form with validation
- **Mobile-First**: Responsive navigation with mobile menu

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **API**: GitHub API for projects
- **Deployment**: GitHub Pages

## 📋 Sections

1. **Hero Section**: Introduction with animated background and call-to-action buttons
2. **About**: Personal bio, strengths, and values
3. **Projects**: Featured projects and dynamic GitHub repositories
4. **Skills**: Technical skills with interactive icons
5. **Experience**: Professional experience with timeline
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/minahawarei/mina-portfolio.git
cd mina-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 📁 Project Structure

```
mina-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `primary` color palette.

### Content
Update the content in each component file to match your personal information:
- `Hero.jsx`: Update name, title, and location
- `About.jsx`: Modify bio and strengths
- `Projects.jsx`: Add your featured projects
- `Skills.jsx`: Update skills and technologies
- `Experience.jsx`: Add your work experience
- `Contact.jsx`: Update contact information

### GitHub Integration
The projects section automatically fetches repositories from your GitHub account. Update the GitHub username in `Projects.jsx` to display your repositories.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## �� Contact

- **Email**: mina.hawarei@example.com
- **GitHub**: [@minahawarei](https://github.com/minahawarei)
- **LinkedIn**: [Mina Hawarei](https://linkedin.com/in/minahawarei)

---

Built with ❤️ by Mina Hawarei
