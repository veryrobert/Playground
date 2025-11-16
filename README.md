# Playground

## Share Card Widgets

This repository now contains a drop-in React implementation of Braun-inspired share cards for productivity links such as Google Docs, Figma, and Dropbox.

### Structure

```
src/
├─ App.tsx                // Example canvas rendering the widgets
├─ components/ShareCard.tsx // Share card component following Tailwind tokens
├─ data/shareCards.ts     // Sample data for Docs, Figma, Dropbox
└─ types/shareCard.ts     // Shared TypeScript types
```

### Usage

1. Ensure your project is configured with the Tailwind tokens described in the design system (e.g., `bg-surface-1`, `rounded-card`).
2. Import the `ShareCard` component and feed it brand information (logo, accent color, soft tint) along with metadata and actions.
3. When you receive a link, map it to a provider palette and render the widget.

```tsx
import { ShareCard } from './components/ShareCard';
import type { ShareCard as ShareCardType } from './types/shareCard';

const linkCard: ShareCardType = {
  id: 'figma',
  title: 'Mobile Flow Wireframe',
  provider: {
    name: 'Figma',
    logo: 'https://www.svgrepo.com/show/342148/figma.svg',
    accentColor: '#F24E1E',
    accentSoft: 'rgba(242, 78, 30, 0.15)',
  },
  description: 'Explorations for the quick capture experience.',
  meta: [
    { label: 'Access', value: 'Edit' },
    { label: 'Updated', value: 'Yesterday' },
    { label: 'Versions', value: '12' },
  ],
  actions: [
    { label: 'Open in Figma', href: 'https://www.figma.com', variant: 'primary' },
    { label: 'Share', href: '#', variant: 'secondary' },
  ],
  sharedBy: 'Jonas Salk',
  lastUpdated: '2024-01-09T19:00:00Z',
  status: 'new',
};

<ShareCard card={linkCard} />;
```

The actions auto-inherit the provider accent for primary buttons, while the badge and avatar circle use the softer tint to keep everything flat but tactile.
