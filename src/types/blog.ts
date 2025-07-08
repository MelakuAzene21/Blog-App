export interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export type ViewMode = 'home' | 'categories' | 'contact' | 'post' | 'category';
export type SortOption = 'latest' | 'popular' | 'oldest';