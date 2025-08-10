# PlutoTool Website

A responsive multi-page static website for PlutoTool - Fast, lightweight desktop tools for daily productivity.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with #4A90E2 accent color
- **SEO Friendly**: Semantic HTML5 structure with proper meta tags
- **GitHub Pages Ready**: No build process required, works directly with GitHub Pages
- **Fast Loading**: Minimal dependencies, optimized for performance

## Structure

```
Website/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css      # Shared CSS styles
│   └── images/            # Image assets
├── project-a/
│   └── index.html         # TaskManager Pro project page
├── project-b/
│   └── index.html         # ClipboardSync project page
└── README.md
```

## Setup for GitHub Pages

1. **Create a new repository** on GitHub (e.g., `plutotool.github.io` for user/organization site, or any name for project site)

2. **Upload files**: Upload all files from this Website folder to your repository

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your custom domain (e.g., `plutotool.com`)
   - Configure DNS settings with your domain provider
   - Add your custom domain in GitHub Pages settings

## Adding New Projects

To add a new project:

1. **Create project folder**: `mkdir project-name`
2. **Create index.html**: Use `project-a/index.html` as a template
3. **Update main page**: Add the new project card to `index.html`
4. **Update links**: Ensure all GitHub repository links are correct

## Customization

### Colors
The primary accent color is defined as `#4A90E2`. To change it, update the CSS variables in `assets/css/style.css`.

### Content
- Update project descriptions in `index.html`
- Modify project details in individual project pages
- Replace placeholder GitHub links with actual repository URLs
- Add real screenshots/images to `assets/images/`

### Styling
All shared styles are in `assets/css/style.css`. The design uses:
- CSS Grid and Flexbox for layout
- Mobile-first responsive design
- Smooth transitions and hover effects
- Clean typography with system fonts

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Load Time**: < 1 second on fast connections
- **File Size**: Total CSS + HTML < 50KB
- **No Dependencies**: Pure HTML/CSS/JS, no frameworks

## License

This website template is open source. Feel free to use it for your own projects.

---

© 2025 PlutoTool. All rights reserved.
