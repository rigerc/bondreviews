# Astro Micro Site Documentation

## Overview

This is a comprehensive documentation of the Astro Micro site, a lightweight and accessible blog theme built with Astro 5.x. The site features a modern design with multiple content collections (blog, projects, reviews), search functionality, and a responsive layout.

## Project Structure

### Root Configuration

**`package.json`**
- **Name**: astro-micro
- **Framework**: Astro 5.9.2
- **Styling**: TailwindCSS 4.1.10 with Typography plugin
- **Key Dependencies**:
  - `@astrojs/mdx`: MDX support for content
  - `@astrojs/rss`: RSS feed generation
  - `@astrojs/sitemap`: Automatic sitemap generation
  - `astro-pagefind`: Full-text search functionality
  - `@fontsource/geist-sans` & `@fontsource/geist-mono`: Typography

**`astro.config.mjs`**
- **Site URL**: https://bondg.github.io
- **Integrations**:
  - Sitemap generation
  - MDX support
  - Pagefind search integration
- **Vite Plugins**: TailwindCSS integration
- **Markdown Configuration**: Shiki syntax highlighting with CSS variables theme

### Content Architecture

**Content Collections** (`src/content.config.ts`):
1. **Blog Collection**
   - Schema: title, description, date, draft, tags
   - Supports both `.md` and `.mdx` files
   - Glob loader for automatic content discovery

2. **Projects Collection**
   - Schema: title, description, date, draft, demoURL, repoURL
   - For showcasing personal projects and repositories

3. **Reviews Collection**
   - Schema: title, date, draft, rating (1-5), related_link, release_year, categories
   - For book, movie, or product reviews

### Constants & Configuration

**`src/consts.ts`**
- **Site Configuration**:
  - Title: "Bond Reviews"
  - Email: bond@bsgb.nl
  - Homepage limits: 15 posts, 0 projects
- **Social Links**:
  - X (Twitter)
  - GitHub
  - Website
- **Section Metadata**: Blog, Reviews, Projects descriptions

**`src/types.ts`**
- TypeScript definitions for Site, Metadata, and Socials interfaces

## Component Architecture

### Layout Components

**`Layout.astro`**
- Main HTML structure with `<head>`, `<header>`, `<main>`, `<footer>`
- Integrates Head, Header, Footer, and Pagefind components
- Handles page title formatting: `{pageTitle} | {SITE.TITLE}`

**`Container.astro`**
- Responsive wrapper component for consistent spacing
- Maximum width constraints and padding

### Navigation Components

**`Header.astro`**
- Fixed header with site title and navigation
- Navigation links: Blog, Projects, Reviews
- Integrated search button with magnifying glass icon
- Responsive design with backdrop blur effect

**`Footer.astro`**
- Site footer with consistent styling

### Content Display Components

**`ArrowCard.astro`**
- Reusable card component for blog posts and projects
- Features animated arrow icon on hover
- Responsive design with truncation for long text
- Props: `CollectionEntry<"blog"> | CollectionEntry<"projects">`

**`ReviewCard.astro`**
- Specialized card for reviews collection
- Displays rating (1-5 stars) and release year
- Shows categories as small badges
- Props: `CollectionEntry<"reviews">`

### Utility Components

**`Link.astro`**
- Enhanced link component with external link handling
- Supports underline customization
- Proper accessibility attributes

**`FormattedDate.astro`**
- Date formatting component using Intl.DateTimeFormat
- US locale formatting (MM/dd/yyyy)

**`BackToPrevious.astro`**
- Navigation component for returning to parent pages
- Consistent styling with hover effects

**`BackToTop.astro`**
- Scroll-to-top functionality
- Appears on scroll with smooth animations

**`PostNavigation.astro`**
- Previous/Next post navigation for blog posts
- Shows post titles and navigation arrows

**`TableOfContents.astro`**
- Automatic table of contents generation
- Based on heading structure in content
- Smooth scroll navigation

**`TagCloud.astro`**
- Tag display component (likely used in tag listings)

### Interactive Components

**`PageFind.astro`**
- Search functionality integration
- Keyboard shortcuts: `/`, `Ctrl+K`, `Cmd+K`
- Full-text search across all content

**`Giscus.astro`**
- GitHub Discussions-based comment system
- Requires GitHub repository configuration

**`Callout.astro`**
- Alert/notification component with different types:
  - Default (info)
  - Warning
  - Error
  - Success

## Page Structure

### Static Pages

**`index.astro`**
- Homepage with hero section
- Latest blog posts (up to 15)
- Recent projects (configurable, currently 0)
- Social media contact section
- Introduction to Astro Micro theme

**`404.astro`**
- Custom 404 error page

### Dynamic Routes

**Blog System** (`pages/blog/`)
- **`[...id].astro`**: Individual blog post pages
  - Features: Reading time calculation, date display, tags
  - Table of contents for long posts
  - Previous/Next navigation
  - Giscus comments integration
- **`index.astro`**: Blog listing page with chronological sorting

**Projects System** (`pages/projects/`)
- **`[...id].astro`**: Individual project pages
- **`index.astro`**: Projects listing page

**Reviews System** (`pages/reviews/`)
- **`[...id].astro`**: Individual review pages with rating display
- **`index.astro`**: Reviews listing by year

**Tags System** (`pages/tags/`)
- **`[...id].astro`**: Tag-specific post filtering
- **`index.astro`**: All available tags with post counts

### API Routes

**`rss.xml.js`**
- RSS feed generation for all content types
- Combines blog, projects, and reviews
- Sorted by publication date

## Styling & Theme System

### CSS Architecture

**`global.css`**
- **TailwindCSS v4** configuration
- **Typography plugin** for prose styling
- **Dark mode support** with CSS custom properties
- **Animation system** with `.animate` classes
- **Syntax highlighting** themes for light/dark modes
- **Custom variants** for dark mode targeting

### Theme Features

- **System preference detection**
- **Manual theme switching** (light/dark)
- **CSS custom properties** for theme variables
- **Consistent color scheme** using neutral colors
- **Typography optimization** for readability

### Animation System

- **Scroll-triggered animations** using Intersection Observer
- **Smooth transitions** for interactive elements
- **Hover effects** on buttons and links
- **Focus indicators** for accessibility

## Content Management

### Frontmatter Schema

**Blog Posts**:
```yaml
---
title: "Post Title"
description: "Brief description"
date: "2024-05-09"
draft: false
tags: ["tag1", "tag2"]
---
```

**Projects**:
```yaml
---
title: "Project Name"
description: "Project description"
date: "2024-05-09"
draft: false
demoURL: "https://demo.example.com"
repoURL: "https://github.com/user/project"
---
```

**Reviews**:
```yaml
---
title: "Review Title"
date: "2024-05-09"
draft: false
rating: 4
related_link: "https://example.com/product"
release_year: 2023
categories: ["category1", "category2"]
---
```

### Content Organization

- **Flat structure** for blog posts and projects
- **MDX support** for interactive content
- **Draft system** for unpublished content
- **Automatic sorting** by date (newest first)
- **Tag system** for blog post categorization

## Build & Development

### Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npx astro check
```

### Build Process

1. **Type checking** with Astro's built-in checker
2. **Content processing** with MDX transformation
3. **Asset optimization** and bundling
4. **Search indexing** with Pagefind
5. **Sitemap generation**
6. **RSS feed generation**

### Deployment Features

- **Static site generation** for optimal performance
- **SEO optimization** with meta tags and structured data
- **Accessibility features** with proper ARIA labels
- **Progressive enhancement** for JavaScript features

## Utilities & Helpers

**`src/lib/utils.ts`**
- **`cn()`**: TailwindCSS class merging utility
- **`formatDate()`**: Consistent date formatting
- **`readingTime()`**: Reading time calculation based on word count

## Search & Discovery

### Pagefind Integration

- **Full-text search** across all content
- **Keyboard shortcuts** for quick access
- **Build-time indexing** for performance
- **UI components** for search interface

### Navigation Features

- **Table of Contents** for long-form content
- **Tag-based filtering** for blog posts
- **Chronological browsing** with pagination
- **Related content** discovery

## Performance Optimizations

- **Static generation** for fast loading
- **Optimized images** with Astro's image optimization
- **Minimal JavaScript** footprint
- **Efficient CSS** with TailwindCSS purging
- **Font loading** optimization with fontsource

## Accessibility Features

- **Semantic HTML** structure
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus management** for modals and search
- **Color contrast** compliance
- **Screen reader** compatibility

## Extensibility

### Adding New Collections

1. Define schema in `content.config.ts`
2. Create corresponding page structure
3. Add navigation links in Header
4. Create specialized card components if needed

### Customizing Styling

- Modify `global.css` for theme changes
- Update TailwindCSS configuration in `astro.config.mjs`
- Add custom components in `src/components/`

### Adding Features

- Follow component-based architecture
- Use TypeScript for type safety
- Integrate with existing styling system
- Add proper accessibility features

This documentation provides a comprehensive overview of the Astro Micro site's architecture, features, and development practices.