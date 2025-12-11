import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PlaceHolderImages } from './placeholder-images';

const servicesDirectory = path.join(process.cwd(), 'content/services');

export type ServiceProfile = {
    id: string;
    slug: string;
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    imageHint: string;
};

export function getSortedServiceProfiles(): ServiceProfile[] {
    const fileNames = fs.readdirSync(servicesDirectory);
    const allServicesData = fileNames.map((fileName, index) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const profileImage = PlaceHolderImages.find(p => p.id === `profile${index + 1}`);

        return {
            id: slug,
            slug,
            imageUrl: profileImage?.imageUrl || `https://picsum.photos/seed/s${index + 1}/128/128`,
            ...matterResult.data,
        } as ServiceProfile;
    });

    return allServicesData.sort((a, b) => a.name.localeCompare(b.name));
}
