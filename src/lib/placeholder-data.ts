import type { LucideIcon } from 'lucide-react';
import { BookOpen, Newspaper, Users, Briefcase, Sparkles, Linkedin, Rss, Bot } from 'lucide-react';

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

export type Post = {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
};

export type Story = {
  id: string;
  title: string;
  source: 'LinkedIn' | 'Reddit' | 'Product Hunt';
  sourceIcon: LucideIcon;
  excerpt: string;
  author: string;
  imageUrl: string;
  imageHint: string;
};

export const blogPosts: Post[] = [
    {
      id: 'the-pomodoro-technique',
      title: 'The Pomodoro Technique: A Guide to Ultimate Productivity',
      author: 'Jane Doe',
      category: 'Productivity',
      date: 'Oct 12, 2023',
      excerpt: 'Discover how a simple tomato timer can revolutionize the way you work and study.',
      imageUrl: 'https://picsum.photos/seed/blog1/600/400',
      imageHint: 'desk timer',
    },
    {
      id: 'decoding-gen-z',
      title: 'Decoding Gen Z: What Motivates the Next Generation of Workers',
      author: 'John Smith',
      category: 'Research',
      date: 'Oct 10, 2023',
      excerpt: 'An in-depth look into the values, aspirations, and work ethics of Gen Z.',
      imageUrl: 'https://picsum.photos/seed/blog2/600/400',
      imageHint: 'young people',
    },
    {
      id: 'side-hustles-that-pay',
      title: 'Side Hustles That Pay: From Passion to Profit',
      author: 'Alex Johnson',
      category: 'Growth',
      date: 'Oct 8, 2023',
      excerpt: 'Turn your hobbies and skills into a profitable side business with these proven ideas.',
      imageUrl: 'https://picsum.photos/seed/blog3/600/400',
      imageHint: 'laptop coffee',
    },
  ];

  export const hustlerStories: Story[] = [
    {
      id: 'from-0-to-10k-mrr',
      title: 'From 0 to $10k MRR in 6 Months with a Simple SaaS',
      source: 'LinkedIn',
      sourceIcon: Linkedin,
      excerpt: 'How I bootstrapped my way to profitability by solving a niche problem I faced myself...',
      author: 'Sarah Chen',
      imageUrl: 'https://picsum.photos/seed/story1/600/400',
      imageHint: 'person laptop'
    },
    {
      id: 'i-quit-my-faang-job',
      title: 'I quit my FAANG job to build an indie game. Best decision ever.',
      source: 'Reddit',
      sourceIcon: Bot,
      excerpt: 'The journey was tough, filled with doubt, but the freedom and fulfillment are unparalleled.',
      author: 'u/dev_dreamer',
      imageUrl: 'https://picsum.photos/seed/story2/600/400',
      imageHint: 'game development'
    },
    {
      id: 'launched-on-product-hunt',
      title: 'Launched on Product Hunt and Hit #1 Product of the Day!',
      source: 'Product Hunt',
      sourceIcon: Rss,
      excerpt: 'Our launch strategy, the mistakes we made, and what we learned from the experience.',
      author: 'Maker Team',
      imageUrl: 'https://picsum.photos/seed/story3/600/400',
      imageHint: 'startup launch'
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
    imageUrl: 'https://picsum.photos/seed/profile1/300/300',
    imageHint: 'designer portrait',
  },
  {
    id: '2',
    name: 'Ben "SaaS" Miller',
    role: 'SaaS Builder',
    description: 'Building micro-SaaS solutions that solve real-world business problems efficiently.',
    imageUrl: 'https://picsum.photos/seed/profile2/300/300',
    imageHint: 'developer portrait',
  },
  {
    id: '3',
    name: 'Chloe Davis',
    role: 'Growth Marketer',
    description: 'Helping businesses find their first 1000 customers with data-driven strategies.',
    imageUrl: 'https://picsum.photos/seed/profile3/300/300',
    imageHint: 'marketer portrait',
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
    imageUrl: 'https://picsum.photos/seed/news1/300/200',
    imageHint: 'abstract code',
  },
  {
    id: '2',
    title: 'The Rise of the "Creator Economy" and What It Means for The Future of Work',
    source: 'Forbes',
    date: '5 hours ago',
    imageUrl: 'https://picsum.photos/seed/news2/300/200',
    imageHint: 'person podcasting',
  },
  {
    id: '3',
    title: 'Venture Capital Funding Sees a Shift Towards Sustainable Tech',
    source: 'Bloomberg',
    date: '1 day ago',
    imageUrl: 'https://picsum.photos/seed/news3/300/200',
    imageHint: 'wind turbines',
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
