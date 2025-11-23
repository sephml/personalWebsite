<h2 align="center">
  Portfolio Website - v2.5 (Enhanced)<br/>
  <a href="https://sepehr.uk/" target="_blank">Sepehr.uk</a>
</h2>

<div align="center">

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;
[![Netlify Status](https://api.netlify.com/api/v1/badges/60453082-5aac-4675-9d0b-44a4bf7c44b9/deploy-status)](https://app.netlify.com/sites/sephml/deploys)

</div>

## 🚀 Recent Enhancements

This portfolio has been significantly enhanced with professional improvements:

### ✨ New Features
- **Experience Section** - Interactive timeline showcasing work history and education
- **Contact Section** - Professional contact form with direct email integration
- **Categorized Skills** - Organized by expertise level (Expert, Proficient)
- **Enhanced Projects** - Added metrics, achievements, and role information
- **SEO Optimization** - Comprehensive meta tags for better discoverability
- **CTAs** - Strategic call-to-action buttons throughout the site

### 🎯 Content Improvements
- Fixed all typos and grammar issues
- Enhanced professional tone and branding
- Added quantifiable achievements to projects
- Improved value propositions
- Better personal positioning as an LLM/AI specialist

### 📁 Documentation
- `IMPROVEMENTS_SUMMARY.md` - Complete list of all improvements
- `CUSTOMIZATION_GUIDE.md` - Guide for updating personal information

---

## 🛠️ Built With

### Core Technologies
- **React.js** - Frontend framework
- **React Router** - Navigation
- **React Bootstrap** - UI components
- **CSS3** - Custom styling

### Key Libraries
- **react-vertical-timeline-component** - Experience timeline
- **typewriter-effect** - Animated text
- **react-parallax-tilt** - 3D tilt effects
- **react-tsparticles** - Particle animations
- **react-icons** - Icon library

### Tools
- **Node.js** - Runtime environment
- **npm** - Package manager
- **Git** - Version control
- **VS Code** - Development environment
- **Netlify** - Hosting & deployment

---

## 📋 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sephml/personalWebsite.git

# Navigate to project directory
cd personalWebsite

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The site will open at `http://localhost:3000`

---

## 🎨 Customization

To make this portfolio your own:

1. **Update Personal Information:**
   - See `CUSTOMIZATION_GUIDE.md` for detailed instructions
   - Update experience in `src/components/Experience/Experience.js`
   - Change email in `src/components/Contact/Contact.js`
   - Update social links throughout the project

2. **Modify Content:**
   - Edit project descriptions in `src/components/Projects/Projects.js`
   - Update about section in `src/components/About/AboutCard.js`
   - Customize skills in `src/components/About/Skills.js`

3. **Change Styling:**
   - Primary color: `#4a90e2` (defined in `src/style.css`)
   - Search and replace hex codes for different color scheme

---

## 📄 Pages

- **Home** (`/`) - Hero section with introduction and CTAs
- **About** (`/about`) - Personal background and categorized skills
- **Experience** (`/experience`) - Professional timeline and education
- **Projects** (`/project`) - Showcase of projects with metrics
- **Resume** (`/resume`) - Downloadable PDF resume
- **Contact** (`/contact`) - Contact form and direct email

---

## 🎯 Features

### Professional Presentation
✅ Clean, modern design  
✅ Responsive on all devices  
✅ Smooth animations and transitions  
✅ Professional color scheme  

### Content Quality
✅ Quantifiable achievements  
✅ Clear value propositions  
✅ Strategic CTAs  
✅ SEO optimized  

### User Experience
✅ Intuitive navigation  
✅ Fast loading times  
✅ Interactive timeline  
✅ Easy contact options  

---

## 📊 Project Structure

```
personalWebsite/
├── public/
│   ├── index.html          # SEO meta tags
│   └── ...
├── src/
│   ├── components/
│   │   ├── About/          # About page components
│   │   ├── Contact/        # Contact page (NEW)
│   │   ├── Experience/     # Experience timeline (NEW)
│   │   ├── Home/           # Landing page
│   │   ├── Projects/       # Projects showcase
│   │   └── Resume/         # Resume viewer
│   ├── Assets/             # Images and files
│   ├── App.js              # Main app with routing
│   └── style.css           # Global styles
├── CUSTOMIZATION_GUIDE.md  # How to customize (NEW)
├── IMPROVEMENTS_SUMMARY.md # Complete changelog (NEW)
└── package.json            # Dependencies
```

---

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Manual Deployment
```bash
npm run build
# Upload the 'build' folder to your hosting service
```

---

## 📝 TODO After Setup

- [ ] Update Experience section with actual work history
- [ ] Review and adjust project metrics
- [ ] Change email addresses
- [ ] Update social media links
- [ ] Replace avatar image
- [ ] Test all functionality
- [ ] Deploy to production

---

## 🤝 Contributing

This is a personal portfolio website. Feel free to fork and customize for your own use!

---

## 📧 Contact

**Sep Aminian**
- Website: [sepehr.uk](https://sepehr.uk)
- LinkedIn: [@amirsepehr-aminian](https://www.linkedin.com/in/amirsepehr-aminian/)
- GitHub: [@sephml](https://github.com/sephml)
- Email: amirsepehr.aminian@gmail.com

---

## 📄 License

This project is open source and available for personal use.

---

<div align="center">
Made with ❤️ and React
</div>
