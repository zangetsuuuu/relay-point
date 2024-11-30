import { ReactNode } from 'react';

export type LayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export type ApiItem = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
};
