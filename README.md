# 💻 Abdiel H. Rodriguez - Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Science student specializing in backend development, security, and software engineering.

## 🌟 Features

- **Futuristic Design**: Cyan/teal color scheme with animated backgrounds and effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with social links and resume download
  - Animated statistics cards
  - Skills showcase with 6 technology categories
  - Project filtering system
  - Timeline for experience and education
  - Services offered with pricing
  - Contact form (ready to integrate with backend)
- **Smooth Animations**: Scroll-triggered reveals and parallax effects
- **Accessibility**: Reduce motion toggle and keyboard navigation support

## 🚀 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks, pure JS for better performance
- **Google Fonts**: Poppins & JetBrains Mono

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and animations
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   └── images/         # Place your images here
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🛠️ Setup & Installation

### Option 1: Direct Use
1. Download all files
2. Replace placeholder content with your information
3. Open `index.html` in a browser

### Option 2: GitHub Pages Deployment
```bash
# Clone or download this repo
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
cd YOUR-USERNAME.github.io

# Add your files
cp -r portfolio/* .

# Commit and push
git add .
git commit -m "Initial portfolio"
git push origin main
```

Your site will be live at: `https://YOUR-USERNAME.github.io`

## ✏️ Customization

### Update Personal Information

1. **Hero Section** (`index.html` line ~52):
   - Change name, description, and profile image
   - Update social media links

2. **Projects** (`index.html` line ~305):
   - Add your real projects
   - Update GitHub repository links
   - Add screenshots

3. **Experience** (`index.html` line ~625):
   - Update timeline with your education and work history

4. **Contact Info** (`index.html` line ~775):
   - Replace email and social handles

### Customize Colors

Edit CSS variables in `css/styles.css` (lines 1-15):

```css
:root {
    --cyan-primary: #00d9ff;      /* Main color */
    --teal-accent: #00ffc8;       /* Accent color */
    --bg-primary: #000000;        /* Background */
}
```

### Connect Contact Form

Update `js/main.js` (line ~85) to integrate with:
- [Formspree](https://formspree.io) (easiest)
- [EmailJS](https://www.emailjs.com)
- Your own backend API

Example with Formspree:
```javascript
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 📊 Adding Analytics

To track visitors, add Google Analytics to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 TODO / Future Enhancements

- [ ] Add real project screenshots
- [ ] Connect contact form to backend
- [ ] Add blog posts
- [ ] Implement dark/light theme toggle
- [ ] Add more projects
- [ ] Create actual blog content
- [ ] Set up custom domain

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Found a bug or want to contribute? Feel free to open an issue or submit a pull request!

## 📧 Contact

- **Email**: abdielrodriguez.668@gmail.com
- **GitHub**: [@abdielrodriguez](https://github.com/Zeurodite)
- **LinkedIn**: [Abdiel H. Rodriguez](https://linkedin.com/in/abdielrodriguez)

---

Built with ❤️ from Puerto Rico 🇵🇷

**⭐ If you like this portfolio, give it a star!**
