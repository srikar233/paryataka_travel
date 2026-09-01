# Paryataka - Project Structure Guide

## 📁 Production-Ready Folder Structure

```
paryataka_travel/
├── src/
│   ├── app/                    # Next.js App Router pages and routes
│   │   ├── (routes)/           # Route groups (optional)
│   │   ├── about/
│   │   ├── blogs/
│   │   ├── contact/
│   │   ├── destinations/
│   │   ├── packages/
│   │   ├── services/
│   │   ├── tripDetails/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── favicon.ico
│   │
│   ├── components/             # Reusable React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── features/           # Feature-specific components
│   │   │   ├── DestinationList.jsx
│   │   │   ├── DestinationSearch.jsx
│   │   │   ├── FeaturedDestinations.jsx
│   │   │   ├── Stories.jsx
│   │   │   └── WeekendTrips.jsx
│   │   │
│   │   └── common/             # Common/shared components
│   │       ├── BookButton.jsx
│   │       └── BookingCard.jsx
│   │
│   ├── lib/                    # Utilities and libraries
│   │   ├── api.ts              # Centralized API client
│   │   └── utils/
│   │       └── formatDate.js   # Utility functions
│   │
│   ├── config/                 # Configuration files
│   │   └── constants.ts        # App constants and config
│   │
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Common types
│   │
│   ├── styles/                 # Global styles
│   │   └── globals.css         # Global CSS
│   │
│   └── hooks/                  # Custom React hooks (empty, add as needed)
│
├── public/                     # Static assets
│   ├── paryataka.jpg
│   └── [other images]
│
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation

```

## 🎯 Key Principles

### Component Organization

1. **Layout Components** (`components/layout/`)
   - Navbar, Footer
   - Persistent UI elements
   - Import from here in root layout

2. **Feature Components** (`components/features/`)
   - Feature-specific components
   - Can be organized by feature if grows larger
   - Self-contained feature logic

3. **Common Components** (`components/common/`)
   - Reusable across multiple features
   - Buttons, cards, forms
   - Stateless or minimally stateful

### Import Paths

Use absolute imports with the `@/*` alias for cleaner imports:

```typescript
// ✅ Good
import Navbar from '@/components/layout/Navbar';
import { formatDate } from '@/lib/utils/formatDate';
import { API_ENDPOINTS } from '@/config/constants';

// ❌ Avoid
import Navbar from '../../../components/layout/Navbar';
import { formatDate } from '../../../../lib/utils/formatDate';
```

### API Integration

- Centralized API calls in `src/lib/api.ts`
- Use constants from `src/config/constants.ts`
- Type responses with types from `src/types/index.ts`

```typescript
import { fetchAPI } from '@/lib/api';
import { API_ENDPOINTS } from '@/config/constants';
import type { Package } from '@/types';

const packages = await fetchAPI<Package[]>(API_ENDPOINTS.PACKAGES);
```

## 🚀 Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# Opens http://localhost:3000
```

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📋 Environment Variables

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

See `.env.example` for available configuration options.

## 🏗️ Architecture Decisions

1. **src/ folder**: Separates source code from configuration files
2. **Feature-based organization**: Makes it easier to locate and maintain components
3. **Centralized config**: Single source of truth for constants
4. **Type safety**: TypeScript types centralized in `src/types/`
5. **API abstraction**: `lib/api.ts` for consistent API handling

## 📝 Adding New Components

1. Determine if it's a layout, feature, or common component
2. Create in appropriate folder under `src/components/`
3. Use PascalCase for component file names
4. Export from the component file

Example:
```typescript
// src/components/features/MyFeature.jsx
export default function MyFeature() {
  return <div>Feature</div>;
}

// Usage in page or another component
import MyFeature from '@/components/features/MyFeature';
```

## 📝 Adding New Pages

1. Create folder structure under `src/app/`
2. Add `page.tsx` or `page.jsx`
3. Update imports to use `@/*` aliases
4. Keep pages lean, move logic to components

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 📞 Support

For issues or questions about the project structure, refer to this guide or reach out to the development team.
