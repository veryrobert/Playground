import type { ShareCard } from '../types/shareCard';

export const shareCards: ShareCard[] = [
  {
    id: 'google-doc',
    title: 'Kickoff Notes – Q3 Launch',
    provider: {
      name: 'Google Docs',
      logo: 'https://www.svgrepo.com/show/475656/google-docs.svg',
      accentColor: '#3D7DFF',
      accentSoft: 'rgba(61, 125, 255, 0.15)',
    },
    description: 'Shared document with agenda, owners, and status fields.',
    meta: [
      { label: 'Access', value: 'Comment' },
      { label: 'Updated', value: '2h ago' },
      { label: 'Views', value: '18' },
    ],
    actions: [
      { label: 'Open Doc', href: 'https://docs.google.com', variant: 'primary' },
      { label: 'Copy Link', href: '#', variant: 'secondary' },
    ],
    sharedBy: 'Marie Curie',
    lastUpdated: '2024-01-11T09:12:00Z',
    status: 'active',
  },
  {
    id: 'figma-wireframe',
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
  },
  {
    id: 'dropbox-folder',
    title: 'Research Assets',
    provider: {
      name: 'Dropbox',
      logo: 'https://www.svgrepo.com/show/33058/dropbox.svg',
      accentColor: '#4C9EEB',
      accentSoft: 'rgba(76, 158, 235, 0.18)',
    },
    description: 'Reference photos, interview recordings, exports.',
    meta: [
      { label: 'Access', value: 'View' },
      { label: 'Updated', value: '5 days ago' },
      { label: 'Items', value: '248' },
    ],
    actions: [
      { label: 'Open Folder', href: 'https://dropbox.com', variant: 'primary' },
      { label: 'Manage Access', href: '#', variant: 'secondary' },
    ],
    sharedBy: 'Amelia Earhart',
    lastUpdated: '2024-01-05T08:42:00Z',
    status: 'viewed',
  },
];
