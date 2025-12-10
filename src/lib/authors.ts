import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Author = {
    slug: string;
    name: string;
    bio: string;
    avatar: string;
    imageHint: string;
};

export function getSortedAuthorsData(): Author[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allAuthorsMap = new Map<string, Author>();

    fileNames.forEach((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const authorSlug = matterResult.data.authorSlug;

        if (authorSlug && !allAuthorsMap.has(authorSlug)) {
            allAuthorsMap.set(authorSlug, {
                slug: authorSlug,
                name: matterResult.data.author,
                bio: matterResult.data.authorBio || '',
                // In a real app, you'd have dedicated author avatars
                avatar: `/images/profile${allAuthorsMap.size + 1}.jpg`,
                imageHint: 'person portrait'
            });
        }
    });

    const allAuthors = Array.from(allAuthorsMap.values());

    return allAuthors.sort((a, b) => a.name.localeCompare(b.name));
}

export function getAuthorData(slug: string): Author | undefined {
    const authors = getSortedAuthorsData();
    return authors.find(author => author.slug === slug);
}
