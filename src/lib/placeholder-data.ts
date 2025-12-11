import type { LucideIcon } from 'lucide-react';
import { BookOpen, Newspaper, Users, Briefcase, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
};

export const features: Feature[] = [
  {
    title: 'Insightful Blog',
    description: 'Explore research articles and productivity hacks tailored for the ambitious.',
    Icon: BookOpen,
    href: '/blog',
  },
  {
    title: 'Hustler Stories',
    description: 'Get inspired by real stories from entrepreneurs and builders on their journey.',
    Icon: Sparkles,
    href: '/stories',
  },
  {
    title: 'Services Showcase',
    description: 'Discover and connect with talented freelancers, engineers, and SaaS builders.',
    Icon: Briefcase,
    href: '/services',
  },
  {
    title: 'Trending News',
    description: 'Stay ahead with curated news and trends from the tech and business world.',
    Icon: Newspaper,
    href: '/news',
  },
  {
    title: 'Community Forums',
    description: 'Join discussions, share your interests, and network with peers.',
    Icon: Users,
    href: '/community',
  },
];


export type Story = {
  id: string;
  title: string;
  source: 'LinkedIn' | 'Reddit' | 'Product Hunt';
  excerpt: string;
  author: string;
  imageUrl: string;
  imageHint: string;
};

  export const hustlerStories: Story[] = [
    {
      id: 'from-0-to-10k-mrr',
      title: 'From 0 to $10k MRR in 6 Months with a Simple SaaS',
      source: 'LinkedIn',
      excerpt: 'How I bootstrapped my way to profitability by solving a niche problem I faced myself...',
      author: 'Sarah Chen',
      imageUrl: PlaceHolderImages.find(p => p.id === 'story1')?.imageUrl || '/images/story1.jpg',
      imageHint: PlaceHolderImages.find(p => p.id === 'story1')?.imageHint || 'person laptop'
    },
    {
      id: 'i-quit-my-faang-job',
      title: 'I quit my FAANG job to build an indie game. Best decision ever.',
      source: 'Reddit',
      excerpt: 'The journey was tough, filled with doubt, but the freedom and fulfillment are unparalleled.',
      author: 'u/dev_dreamer',
      imageUrl: PlaceHolderImages.find(p => p.id === 'story2')?.imageUrl || '/images/story2.jpg',
      imageHint: PlaceHolderImages.find(p => p.id === 'story2')?.imageHint || 'game development'
    },
    {
      id: 'launched-on-product-hunt',
      title: 'Launched on Product Hunt and Hit #1 Product of the Day!',
      source: 'Product Hunt',
      excerpt: 'Our launch strategy, the mistakes we made, and what we learned from the experience.',
      author: 'Maker Team',
      imageUrl: PlaceHolderImages.find(p => p.id === 'story3')?.imageUrl || '/images/story3.jpg',
      imageHint: PlaceHolderImages.find(p => p.id === 'story3')?.imageHint || 'startup launch'
    },
  ];


export type ServiceProfile = {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export const serviceProfiles: ServiceProfile[] = [
  {
    id: '1',
    name: 'Emily Carter',
    role: 'Freelance UI/UX Designer',
    description: 'Crafting intuitive and beautiful digital experiences for startups and scale-ups.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'profile1')?.imageUrl || '/images/profile1.jpg',
    imageHint: PlaceHolderImages.find(p => p.id === 'profile1')?.imageHint || 'designer portrait',
  },
  {
    id: '2',
    name: 'Ben "SaaS" Miller',
    role: 'SaaS Builder',
    description: 'Building micro-SaaS solutions that solve real-world business problems efficiently.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'profile2')?.imageUrl || '/images/profile2.jpg',
    imageHint: PlaceHolderImages.find(p => p.id === 'profile2')?.imageHint || 'developer portrait',
  },
  {
    id: '3',
    name: 'Chloe Davis',
    role: 'Growth Marketer',
    description: 'Helping businesses find their first 1000 customers with data-driven strategies.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'profile3')?.imageUrl || '/images/profile3.jpg',
    imageHint: PlaceHolderImages.find(p => p.id === 'profile3')?.imageHint || 'marketer portrait',
  },
];

export type NewsArticle = {
  id: string;
  title: string;
  source: string;
  date: string;
  imageUrl: string;
  imageHint: string;
};

export const trendingNews: NewsArticle[] = [
  {
    id: '1',
    title: 'New AI Model Achieves Human-Level Performance in Code Generation',
    source: 'TechCrunch',
    date: '2 hours ago',
    imageUrl: PlaceHolderImages.find(p => p.id === 'news1')?.imageUrl || '/images/news1.jpg',
    imageHint: PlaceHolderImages.find(p => p.id === 'news1')?.imageHint || 'abstract code',
  },
  {
    id: '2',
    title: 'The Rise of the "Creator Economy" and What It Means for The Future of Work',
    source: 'Forbes',
    date: '5 hours ago',
    imageUrl: PlaceHolderImages.find(p => p.id === 'news2')?.imageUrl || '/images/news2.jpg',
    imageHint: PlaceHolderImages.find(p => p.id === 'news2')?.imageHint || 'person podcasting',
  },
  {
    id: '3',
    title: 'Venture Capital Funding Sees a Shift Towards Sustainable Tech',
    source: 'Bloomberg',
    date: '1 day ago',
    imageUrl: PlaceHolderImages.find(p => p.id === 'news3')?.imageUrl || '/images/news3.jpg',
    imageHint: PlaceHolderImages.find(p => p.id === 'news3')?.imageHint || 'wind turbines',
  },
];

export type ForumTopic = {
  id: string;
  title: string;
  category: string;
  author: string;
  replies: number;
  lastReply: string;
};

export const forumTopics: ForumTopic[] = [
  {
    id: '1',
    title: 'What are your go-to productivity tools for 2024?',
    category: 'Productivity',
    author: 'alex_p',
    replies: 42,
    lastReply: '3m ago',
  },
  {
    id: '2',
    title: 'Show and Tell: Share your latest side project!',
    category: 'Projects',
    author: 'buildergirl',
    replies: 112,
    lastReply: '12m ago',
  },
  {
    id: '3',
    title: 'How to find your first 10 customers for a new SaaS?',
    category: 'Marketing',
    author: 'saas_starter',
    replies: 78,
    lastReply: '25m ago',
  },
];
