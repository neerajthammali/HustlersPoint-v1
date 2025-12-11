import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PlaceHolderImages } from './placeholder-images';

const authorsDirectory = path.join(process.cwd(), 'content/authors');

export type Author = {
    slug: string;
    name: string;
    bio: string;
    avatar: string;
    imageHint: string;
};

export function getSortedAuthorsData(): Author[] {
    const fileNames = fs.readdirSync(authorsDirectory);
    const allAuthorsData = fileNames.map((fileName, index) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(authorsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const profileImage = PlaceHolderImages.find(p => p.id === `profile${index+1}`);

        return {
            slug,
            avatar: profileImage?.imageUrl || `https://picsum.photos/seed/${index + 1}/128/128`,
            ...matterResult.data,
        } as Author;
    });

    return allAuthorsData.sort((a, b) => a.name.localeCompare(b.name));
}

export function getAuthorData(slug: string): Author | undefined {
    const authors = getSortedAuthorsData();
    return authors.find(author => author.slug === slug);
}
