export type ShareCardProvider = {
  name: string;
  logo: string;
  accentColor: string;
  accentSoft: string;
};

export type ShareCardMeta = {
  label: string;
  value: string;
};

export type ShareCardAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

export type ShareCard = {
  id: string;
  title: string;
  provider: ShareCardProvider;
  description: string;
  meta: ShareCardMeta[];
  actions: ShareCardAction[];
  sharedBy: string;
  lastUpdated: string;
  status?: 'active' | 'viewed' | 'new';
};
