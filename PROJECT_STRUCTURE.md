# FreeBuild Construction Website - Project Structure

## 📁 Project Organization

This document outlines the clean and organized file structure of the FreeBuild construction website.

## 🏗️ Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   └── index.ts            # Layout exports
│   ├── ui/                     # UI components (future)
│   │   └── index.ts            # UI exports
│   ├── forms/                  # Form components (future)
│   │   └── index.ts            # Forms exports
│   └── index.ts                # Main components export
└── sections/                   # Page sections
    ├── blog/
    │   ├── Blog.tsx           # Blog component
    │   └── index.tsx          # Blog section
    ├── footer/
    │   ├── Footer.tsx         # Footer component
    │   └── index.tsx          # Footer section
    ├── home/
    │   ├── Carousel.tsx       # Carousel component
    │   └── index.tsx          # Home section
    ├── service/
    │   ├── Services.tsx       # Services component
    │   └── index.tsx          # Service section
    ├── faq/
    │   ├── FAQ.tsx            # FAQ component
    │   └── index.tsx          # FAQ section
    ├── services-overview/
    │   ├── ServicesOverview.tsx # Services overview component
    │   └── index.tsx          # Services overview section
    └── index.ts               # Sections export

public/
├── logos/                      # Logo assets
│   ├── logo.png               # Main logo
│   └── man.db64c1ff.png       # Construction worker image
└── [other assets]
```

## 🎯 Component Categories

### Layout Components (`/layout/`)
- **Header.tsx**: Site navigation and logo
- **Footer.tsx**: Contact info, links, and social media

### Section Components (`/sections/`)
- **Carousel.tsx**: Hero section with swipeable images
- **Services.tsx**: 4 service cards with descriptions
- **FAQ.tsx**: Accordion-style frequently asked questions
- **ServicesOverview.tsx**: 6 service categories with icons
- **Blog.tsx**: News and blog posts section

### UI Components (`/ui/`) - Future
- Reusable UI elements like buttons, cards, modals
- Will be added as needed

### Forms Components (`/forms/`) - Future
- Contact forms, newsletter signup
- Will be added as needed

## 📦 Import Structure

### Clean Imports
```typescript
// Layout components
import { Header, Footer } from "@/components/layout";

// Section components
import { Carousel, Services, FAQ, ServicesOverview, Blog } from "@/sections";

// All components
import { Header, Footer, Carousel, Services } from "@/components";
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1E40AF` (text, accents)
- **Orange**: `#FF6B35` (buttons, highlights)
- **Gray**: Various shades for text and backgrounds
- **White**: `#FFFFFF` (backgrounds)

### Typography
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes
- **Navigation**: Medium weight with hover effects

## 🚀 Features

### Interactive Elements
- **Hover Effects**: All buttons and links have smooth color transitions
- **Non-functional**: All elements are visual-only (no actual functionality)
- **Responsive**: Works on desktop, tablet, and mobile

### Carousel
- **Swipeable**: Mouse drag to navigate between images
- **3 Images**: All using construction worker image
- **Static Text**: Content doesn't change, only images rotate

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: Uses Tailwind CSS responsive classes
- **Grid System**: CSS Grid and Flexbox for layouts

## 🔧 Development

### Technologies
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Hooks**: State management and effects

### File Naming
- **Components**: PascalCase (e.g., `Header.tsx`)
- **Folders**: lowercase (e.g., `layout/`)
- **Assets**: kebab-case (e.g., `freebuild-logo.svg`)

## 📝 Future Enhancements

1. **UI Components**: Reusable button, card, modal components
2. **Forms**: Contact forms and newsletter signup
3. **Animations**: Smooth page transitions and micro-interactions
4. **Content Management**: CMS integration for easy content updates
5. **SEO**: Meta tags, structured data, sitemap

## 🎯 Benefits of This Structure

1. **Clean Organization**: Easy to find and maintain components
2. **Scalable**: Easy to add new components and features
3. **Reusable**: Components can be easily reused across pages
4. **Maintainable**: Clear separation of concerns
5. **Developer Friendly**: Intuitive import paths and file locations
