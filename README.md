# Tirinya Campsite - Pure HTML, CSS & JavaScript

A beautiful, fully responsive website for Tirinya Campsite built with **pure HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools required.

## 📁 Project Structure

```
tirinya-campsite-pure/
├── index.html              # Homepage
├── about.html              # About Us page
├── contact.html            # Contact & Inquiry form
├── conversation.html       # Interactive Kibo Chatbot
├── css/
│   └── styles.css          # Main stylesheet (Earthy Heritage theme)
├── js/
│   ├── script.js           # Core functionality (navigation, forms, utilities)
│   └── chat.js             # Kibo chatbot logic
└── README.md               # This file
```

## 🎨 Design Theme

**Earthy Heritage & Wilderness Safari** - A warm, rustic aesthetic inspired by traditional East African safari lodges.

### Color Palette
- **Primary**: Forest Green (#1E3F20)
- **Secondary**: Terracotta Orange (#C86B45)
- **Background**: Warm Cream (#FDFBF7)
- **Accent**: Soft Cream/Sand (#E5D4B8)

### Typography
- **Headings**: Cormorant Garamond (Serif) — elegant and literary
- **Body**: Plus Jakarta Sans (Sans-serif) — clean and readable

## 🚀 Getting Started

### Option 1: Local Development (Recommended)
1. Download or clone this folder
2. Open any HTML file directly in your browser (e.g., double-click `index.html`)
3. Or use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 2: Deploy to Web Hosting
1. Upload all files to your web hosting provider (e.g., Bluehost, GoDaddy, Netlify)
2. Ensure the folder structure is preserved
3. Visit your domain in a browser

## 📄 Pages Overview

### 1. **index.html** - Homepage
- Hero banner with stunning campsite imagery
- Key highlights & features (4 cards)
- Accommodation showcase (Canvas Tents, Wooden Bandas, Restaurant & Dining)
- Call-to-action section
- Footer with contact info & links

### 2. **about.html** - About Us
- Brand story & heritage
- Environmental stewardship & values (4 value cards)
- Eco-friendly initiatives
- Call-to-action banner

### 3. **contact.html** - Contact & Inquiry
- Contact information (address, phone, email)
- Interactive contact form with validation
- Form submission feedback
- Footer with links

### 4. **conversation.html** - Kibo Chatbot
- Interactive AI-powered chatbot (Kibo)
- Pre-built responses for common questions:
  - Accommodation rates
  - Location & directions
  - Dining & restaurant info
  - Activities & attractions
  - Booking inquiries
- Suggestion buttons for quick responses
- Real-time chat interface

## 🛠️ Customization Guide

### Change Colors
Edit the CSS variables in `css/styles.css` (lines 8-23):

```css
:root {
    --primary: #1E3F20;           /* Change primary color */
    --secondary: #C86B45;         /* Change secondary color */
    --background: #FDFBF7;        /* Change background */
    /* ... other variables ... */
}
```

### Update Content
1. **Homepage**: Edit `index.html` directly
2. **Text & Images**: Replace placeholder text and image URLs
3. **Contact Info**: Update phone, email, address in all pages (search for "+254 712 345 678")
4. **Chatbot Responses**: Edit `js/chat.js` (lines 8-60) to add/modify bot responses

### Add New Pages
1. Create a new `.html` file (e.g., `gallery.html`)
2. Copy the header and footer from an existing page
3. Add your content in the middle
4. Link it in the navigation (update all HTML files)

### Modify Chatbot Responses
Edit the `botResponses` object in `js/chat.js`:

```javascript
const botResponses = {
    rates: {
        keywords: ['rate', 'price', 'cost'],  // Add more keywords
        response: 'Your custom response here',
        suggestions: ['Suggestion 1', 'Suggestion 2']
    },
    // Add more categories as needed
};
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

Mobile menu automatically appears on smaller screens.

## ✨ Features

✅ **Fully Responsive** - Works on all devices
✅ **No Dependencies** - Pure HTML, CSS, JavaScript
✅ **Fast Loading** - Optimized images & minimal code
✅ **SEO Friendly** - Semantic HTML structure
✅ **Accessible** - WCAG compliant
✅ **Interactive Chatbot** - Kibo AI assistant
✅ **Contact Forms** - Client-side validation
✅ **Mobile Menu** - Hamburger navigation
✅ **Smooth Animations** - CSS transitions & scroll effects
✅ **Dark Mode Ready** - Easy to add dark theme

## 🔧 JavaScript Features

### Mobile Menu Toggle
Automatic hamburger menu on mobile devices with smooth animations.

### Form Validation
- Contact form validates required fields
- Email format validation
- Success/error messages
- Form reset after submission

### Chat Bot (Kibo)
- Intelligent keyword matching
- Contextual responses
- Suggestion buttons
- Auto-scroll to latest message

### Scroll Effects
- Active nav link highlighting
- Smooth scroll animations
- Intersection Observer for lazy loading

## 📊 Performance Tips

1. **Image Optimization**: Use WebP format for faster loading
2. **Caching**: Enable browser caching on your server
3. **Minification**: Minify CSS & JS for production
4. **CDN**: Use a CDN for image delivery (already using Cloudfront)

## 🐛 Troubleshooting

### Images not loading?
- Check image URLs in HTML files
- Ensure images are accessible (not blocked by CORS)
- Use absolute URLs or relative paths correctly

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML `<link>` tag
- Verify CSS file is in the `css/` folder

### Chat bot not responding?
- Check browser console for errors (F12)
- Ensure `chat.js` is loaded in `conversation.html`
- Verify keywords in `botResponses` object

## 📞 Support & Customization

For questions or custom modifications:
- Email: info@tirinyacampsite.com
- Phone: +254 712 345 678

## 📄 License

This website is custom-built for Tirinya Campsite. All rights reserved.

## 🎯 Next Steps

1. **Update Contact Information**: Replace placeholder phone, email, address
2. **Add Your Logo**: Replace Terinya logo/icon
3. **Customize Colors**: Adjust CSS variables to match your brand
4. **Update Chatbot**: Add more responses for common questions
5. **Deploy**: Upload to web hosting provider
6. **Domain**: Connect a custom domain (optional)

---

**Built with kosh for Tirinya Campsite**

Pure HTML • Pure CSS • Pure JavaScript • No Frameworks
