import { ApiItem } from '@/types';
import { DownloadSimple, Brain, Toolbox } from '@phosphor-icons/react';

export const apiList: ApiItem[] = [
  {
    title: 'AI',
    description:
      'A platform offering artificial intelligence capabilities that can be applied to a wide range of use cases, enabling smarter and more efficient solutions.',
    href: '/api/ai',
    icon: <Brain size={20} />,
  },
  {
    title: 'Downloader',
    description:
      'A service designed to manage and facilitate the download of various types of content. It ensures an efficient and user-friendly experience for accessing media and files.',
    href: '/api/downloader',
    icon: <DownloadSimple size={20} />,
  },
  {
    title: 'Tools',
    description:
      'A comprehensive suite of utilities that simplify complex tasks and provide essential features for improving productivity and workflows.',
    href: '/api/tools',
    icon: <Toolbox size={20} />,
  },
];
