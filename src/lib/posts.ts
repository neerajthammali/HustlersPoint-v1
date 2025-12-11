import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Story as StoryType } from './placeholder-data';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const storiesDirectory = path.join(process.cwd(), 'content/stories');

export type Post = {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  authorBio: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  contentHtml?: string;
};

export type Story = StoryType & {
    slug: string;
    contentHtml?: string;
};


export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: slug,
      slug,
      ...(matterResult.data as Omit<Post, 'id' | 'slug'>),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: slug,
    slug,
    contentHtml,
    ...(matterResult.data as Omit<Post, 'id' | 'slug' | 'contentHtml'>),
  };
}

export function getSortedStoriesData(): Story[] {
    const fileNames = fs.readdirSync(storiesDirectory);
    const allStoriesData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(storiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
  
      return {
        id: slug,
        slug,
        ...matterResult.data,
      } as Story;
    });
  
    // Sorting by title as a default
    return allStoriesData.sort((a, b) => a.title.localeCompare(b.title));
  }
  
  export async function getStoryData(slug: string): Promise<Story> {
    const fullPath = path.join(storiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
  
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    return {
      id: slug,
      slug,
      contentHtml,
      ...matterResult.data,
    } as Story;
  }

  export function getPostsByAuthor(authorSlug: string): Post[] {
    const allPosts = getSortedPostsData();
    return allPosts.filter(post => post.authorSlug === authorSlug);
  }
