import { Linkedin, Rss, Bot } from 'lucide-react';
import type { Story } from '../placeholder-data';

export const storyIconMapper = (source: Story['source']) => {
    switch (source) {
      case 'LinkedIn':
        return Linkedin;
      case 'Reddit':
        return Bot;
      case 'Product Hunt':
        return Rss;
      default:
        return Rss;
    }
  };