# Developer Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases a clean, professional design with smooth animations and an intuitive user experience.

## 🌟 Features

### Core Sections
- **Hero Section** - Eye-catching introduction with animated gradient background
- **About** - Personal story and key development principles
- **Skills** - Organized technology showcase with interactive badges
- **Projects** - Portfolio gallery with project details and links
- **Contact** - Functional contact form with validation

### Design & UX
- **Responsive Design** - Optimized for all device sizes
- **Smooth Animations** - Engaging hover effects and scroll animations
- **Modern UI** - Clean design with gradient accents and elegant shadows
- **Accessibility** - Proper contrast ratios and semantic HTML
- **Performance** - Optimized loading and smooth interactions

### Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** with custom design system
- **Responsive Navigation** with mobile menu
- **Form Validation** with toast notifications
- **Smooth Scroll** navigation between sections
- **Custom Components** built with Radix UI primitives

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Form Handling:** React Hook Form
- **Routing:** React Router DOM

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, cards, etc.)
│   ├── Hero.tsx         # Hero section component
│   ├── About.tsx        # About section component
│   ├── Skills.tsx       # Skills showcase component
│   ├── Projects.tsx     # Projects gallery component
│   ├── Contact.tsx      # Contact form component
│   ├── Navigation.tsx   # Navigation component
│   └── Footer.tsx       # Footer component
├── pages/               # Page components
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Global styles and design tokens
```

## 🎨 Customization

### Design System
The project uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`. You can easily customize:

- **Colors:** Modify CSS custom properties in `src/index.css`
- **Typography:** Update font families and sizes in the Tailwind config
- **Animations:** Add or modify keyframes and animations
- **Components:** Customize component variants in `src/components/ui/`

### Content
Update the following files to personalize the portfolio:

- **Personal Information:** `src/components/Hero.tsx`
- **About Content:** `src/components/About.tsx`
- **Skills:** `src/components/Skills.tsx`
- **Projects:** `src/components/Projects.tsx`
- **Contact Details:** `src/components/Contact.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop:** Full-featured layout with hover effects
- **Tablet:** Adapted grid layouts and navigation
- **Mobile:** Collapsible navigation and stacked content

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel:** Connect your GitHub repository for automatic deployments
- **Netlify:** Drag and drop the `dist` folder or connect via Git
- **GitHub Pages:** Use GitHub Actions for automated deployment
- **AWS S3:** Upload the build files to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons provided by [Lucide React](https://lucide.dev/)
- UI components built with [Radix UI](https://www.radix-ui.com/)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ and lots of coffee ☕**
