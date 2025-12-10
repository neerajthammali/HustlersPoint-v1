import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post, Story } from './placeholder-data';
import {-icon-mappers/story-icon-mapper} from './icon-mappers/story-icon-mapper';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const storiesDirectory = path.join(process.cwd(), 'content/stories');

type AllPostsData = (Post & { slug: string })[];

export function getSortedPostsData(): AllPostsData {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<Post, 'id'>),
      id: slug,
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

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<Post, 'id'>),
    id: slug,
  };
}

type AllStoriesData = (Story & { slug: string })[];

export function getSortedStoriesData(): AllStoriesData {
    const fileNames = fs.readdirSync(storiesDirectory);
    const allStoriesData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(storiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const source = matterResult.data.source as Story['source'];
  
      return {
        slug,
        ...matterResult.data,
        sourceIcon: storyIconMapper(source),
        id: slug,
      } as Story & { slug: string };
    });
  
    return allStoriesData.sort((a, b) => {
        // You might want to sort stories by a date or another field
        return a.title > b.title ? 1 : -1;
      });
  }
  
  export async function getStoryData(slug: string) {
    const fullPath = path.join(storiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
  
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    const source = matterResult.data.source as Story['source'];
  
    return {
      slug,
      contentHtml,
      ...matterResult.data,
      id: slug,
      sourceIcon: storyIconMapper(source),
    } as Omit<Story, 'id'> & { id: string, slug: string, contentHtml: string };
  }
  