import { Book, Tag } from 'lucide-react';

export const CategoryIcon = ({ category }: { category: string }) => {
    switch (category.toLowerCase()) {
      case 'research':
        return <Book className="mr-1 h-3 w-3" />;
      case 'productivity':
        return <Tag className="mr-1 h-3 w-3" />;
      case 'growth':
        return <Tag className="mr-1 h-3 w-3" />;
      default:
        return <Tag className="mr-1 h-3 w-3" />;
    }
  };
