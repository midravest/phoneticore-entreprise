# PhonetiCore Enterprise - NotebookLM Video Overview

A TikTok-style vertical scrolling video overview application inspired by NotebookLM, designed for presenting educational and informational video content in an engaging, modern interface.

## Features

### 🎬 Video Feed
- **Vertical Scrolling**: Smooth, snap-to-section scrolling just like TikTok
- **Full-Screen Experience**: Each video takes up the entire viewport
- **Beautiful Gradients**: Dynamic background gradients for visual appeal

### 🎮 Navigation
- **Touch/Swipe Gestures**: Native mobile gestures for navigation
- **Keyboard Controls**: Arrow keys for desktop navigation
- **Navigation Buttons**: On-screen buttons for precise control
- **Progress Indicators**: Visual dots showing current position in feed

### 📱 Responsive Design
- Fully responsive layout
- Mobile-first approach
- Touch-optimized controls
- Adaptive UI elements

### ⚡ Interactive Features
- **Like/Favorite**: Heart button with animation
- **Share**: Native share API integration
- **Bookmark/Save**: Save videos to your library
- **Play Controls**: Interactive play buttons
- **Notifications**: Toast notifications for user actions

### 🎨 Modern UI
- Glassmorphism effects
- Smooth animations and transitions
- Clean, minimalist design
- Accessible interface

## Getting Started

### Installation

1. Clone this repository:
```bash
git clone https://github.com/midravest/phoneticore-entreprise.git
cd phoneticore-entreprise
```

2. Open `index.html` in your web browser:
```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node.js
npx serve

# Or simply open the file
open index.html
```

3. Navigate to `http://localhost:8000` in your browser

### Usage

#### Desktop Navigation
- **Arrow Up/Down**: Navigate between videos
- **Click Navigation Buttons**: Use on-screen up/down arrows
- **Click Progress Dots**: Jump to specific videos
- **Click Action Buttons**: Like, share, or bookmark videos

#### Mobile Navigation
- **Swipe Up/Down**: Navigate between videos
- **Tap Play Button**: Start video playback (simulated)
- **Tap Action Buttons**: Interact with content

## Project Structure

```
phoneticore-entreprise/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Application logic and interactivity
└── README.md          # This file
```

## Customization

### Adding Your Own Videos

Edit the `videoData` array in `script.js`:

```javascript
const videoData = [
    {
        id: 1,
        title: "Your Video Title",
        description: "Your video description",
        tags: ["Tag1", "Tag2", "Tag3"],
        duration: "5:24",
        views: "1.2M",
        likes: "45K"
    },
    // Add more videos...
];
```

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4285f4;
    --secondary-color: #34a853;
    --background-color: #000;
    --text-color: #fff;
}
```

### Customizing Gradients

Update the `.video-placeholder` nth-child selectors in `styles.css` to change gradient colors.

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Features Implemented

- [x] Vertical scrolling video feed
- [x] Snap-to-section scrolling
- [x] Touch/swipe gestures
- [x] Keyboard navigation
- [x] Progress indicators
- [x] Action buttons (like, share, bookmark)
- [x] Responsive design
- [x] Smooth animations
- [x] Toast notifications
- [x] Glassmorphism UI effects

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **SVG**: Scalable icons

## Performance

- Lightweight (< 30KB total)
- No external dependencies
- Optimized animations
- Smooth 60fps scrolling
- Mobile-optimized

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- High contrast text
- Focus indicators

## Future Enhancements

Possible additions for future versions:

- [ ] Actual video playback integration
- [ ] Comments system
- [ ] User authentication
- [ ] Backend API integration
- [ ] Video upload functionality
- [ ] Advanced filtering and search
- [ ] Playlist creation
- [ ] Analytics dashboard

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

PhonetiCore Enterprise Team

## Acknowledgments

- Inspired by NotebookLM's video overview feature
- UI/UX patterns from TikTok
- Modern web design principles
