# Components Directory

This directory contains all reusable React components organized by category.

## 📁 Structure

```
components/
├── layout/          # Layout components (Header, Footer)
├── sections/        # Page sections (Carousel, Services, etc.)
├── ui/             # Reusable UI components
├── forms/          # Form components
└── index.ts        # Main export file
```

## 🎯 Component Categories

### Layout Components
Components that define the overall page structure.

- **Header**: Site navigation and logo
- **Footer**: Contact information and links

### Section Components
Components that represent major page sections.

- **Carousel**: Hero section with swipeable images
- **Services**: Service cards showcase
- **FAQ**: Frequently asked questions accordion
- **ServicesOverview**: Services grid with icons
- **Blog**: News and blog posts section

## 📦 Usage

### Import Individual Components
```typescript
import { Header, Footer } from "@/components/layout";
import { Carousel, Services } from "@/components/sections";
```

### Import All Components
```typescript
import { Header, Footer, Carousel, Services } from "@/components";
```

## 🎨 Styling

All components use Tailwind CSS for styling with:
- Consistent color palette
- Responsive design
- Hover effects
- Smooth transitions

## 🔧 Development

When adding new components:
1. Place in appropriate category folder
2. Export from category's `index.ts`
3. Update main `index.ts` if needed
4. Follow existing naming conventions
5. Add TypeScript types
6. Include hover effects for interactive elements
