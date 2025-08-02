# Header System Documentation

## Overview

The header system in Mysher Aviary is designed to provide a consistent, responsive navigation experience across all pages. It automatically adapts its appearance based on the current page and scroll position.

## Features

### Universal Implementation

- **Single Component**: The header is implemented once in `App.js` and used across all routes
- **Automatic Styling**: Automatically applies appropriate styling based on current page
- **Responsive Design**: Adapts to all screen sizes with mobile-first approach

### Smart Behavior

- **Home Page**: Transparent background initially, shows background when scrolled
- **Other Pages**: Always shows background for better readability
- **Smooth Transitions**: Animated slide-down effect when scrolling

### Mobile Optimized

- **Hamburger Menu**: Collapsible navigation for mobile devices
- **Touch Friendly**: Proper touch targets and spacing
- **Performance**: Uses passive scroll listeners for better mobile performance

## File Structure

```
src/
├── components/
│   ├── Header.js          # Main header component
│   └── Header.css         # Header styles
├── lib/
│   └── useHeaderScroll.js # Custom hooks for header behavior
└── pages/
    └── Page.css           # Page layout styles
```

## How It Works

### 1. Header Component (`Header.js`)

- Uses `useLocation()` to detect current page
- Uses `useHeaderScroll()` hook for scroll detection
- Automatically applies `header-scrolled` class when needed

### 2. Custom Hooks (`useHeaderScroll.js`)

- `useHeaderScroll(threshold)`: Detects scroll position
- `useHeaderBackground(path, isScrolled)`: Determines background visibility

### 3. Styling (`Header.css`)

- Base styles for transparent header
- Scrolled styles with background, blur, and animation
- Responsive breakpoints for all screen sizes

## Usage

### Automatic Usage

The header is automatically included in all pages through `App.js`:

```jsx
// App.js
<Router>
  <div className="App">
    <Header /> {/* Automatically handles all pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      {/* ... other routes */}
    </Routes>
  </div>
</Router>
```

### Manual Usage (if needed)

If you need to use the header hooks in other components:

```jsx
import { useHeaderScroll, useHeaderBackground } from "../lib/useHeaderScroll";

const MyComponent = () => {
  const isScrolled = useHeaderScroll(20);
  const shouldShowBackground = useHeaderBackground("/current-path", isScrolled);

  // Use the values as needed
};
```

## Behavior by Page

| Page                 | Initial State     | Scrolled State    |
| -------------------- | ----------------- | ----------------- |
| Home (`/`)           | Transparent       | Background + Blur |
| Store (`/store`)     | Background + Blur | Background + Blur |
| Videos (`/videos`)   | Background + Blur | Background + Blur |
| Blog (`/blog`)       | Background + Blur | Background + Blur |
| Birds (`/birds`)     | Background + Blur | Background + Blur |
| Contact (`/contact`) | Background + Blur | Background + Blur |

## CSS Classes

### Base Classes

- `.header`: Base header styles (transparent, absolute positioning)
- `.header-scrolled`: Applied when header should show background

### Animation Classes

- `@keyframes slideDown`: Desktop slide-down animation
- `@keyframes slideDownMobile`: Mobile slide-down animation

### Responsive Classes

- `.desktop-only`: Hidden on mobile
- `.mobile-only`: Hidden on desktop
- `.mobile-actions`: Action buttons in mobile menu

### Button Classes

- `.btn-link`: Transparent link button (About Us)
- `.btn-primary`: Primary action button (Create an Appointment)
- `.btn-admin`: Admin login button (Admin Login)

## Customization

### Changing Scroll Threshold

```jsx
// In Header.js
const isScrolled = useHeaderScroll(30); // Change from 20 to 30px
```

### Adding New Pages

The header automatically works with new pages. Just add the route to `App.js`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

### Modifying Styles

Edit `Header.css` to change appearance:

```css
.header-scrolled {
  background: rgba(0, 0, 0, 0.95); /* Darker background */
  border-radius: 25px; /* Different border radius */
}
```

## Best Practices

1. **Don't duplicate**: The header is already universal, don't add it to individual pages
2. **Use hooks**: If you need scroll detection, use the provided hooks
3. **Test responsive**: Always test on mobile devices
4. **Performance**: The header uses passive scroll listeners for optimal performance

## Troubleshooting

### Header not showing background on other pages

- Check that the page route is properly added to `App.js`
- Verify that `Page.css` is imported in the page component

### Animation not working

- Ensure `Header.css` is properly imported
- Check that the `header-scrolled` class is being applied

### Mobile menu not working

- Verify that the mobile menu toggle button is present
- Check that `Header.css` mobile styles are loaded

## Future Enhancements

- [ ] Add scroll progress indicator
- [ ] Implement sticky header option
- [ ] Add header search functionality
- [ ] Support for dynamic header content
