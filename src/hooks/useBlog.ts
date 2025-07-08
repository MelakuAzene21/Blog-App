import { useState, useMemo } from 'react';
import { BlogPostData, ViewMode, SortOption } from '../types/blog';
import { blogPosts } from '../data/blogPosts';

export const useBlog = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  const [postsToShow, setPostsToShow] = useState(6);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = [...blogPosts];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'popular':
          // Simulate popularity based on read time (longer = more popular)
          return parseInt(b.readTime) - parseInt(a.readTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const displayedPosts = filteredAndSortedPosts.slice(0, postsToShow);
  const hasMorePosts = postsToShow < filteredAndSortedPosts.length;

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + 6);
  };

  const resetPosts = () => {
    setPostsToShow(6);
  };

  const navigateToPost = (post: BlogPostData) => {
    setSelectedPost(post);
    setCurrentView('post');
  };

  const navigateToCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('category');
    resetPosts();
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedCategory('');
    setSearchQuery('');
    resetPosts();
  };

  const navigateToCategories = () => {
    setCurrentView('categories');
    setSelectedCategory('');
    resetPosts();
  };

  const navigateToContact = () => {
    setCurrentView('contact');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('home');
    setSelectedCategory('');
    resetPosts();
  };

  const getFeaturedPost = () => {
    return blogPosts.find(post => post.featured) || blogPosts[0];
  };

  const getRecentPosts = (limit: number = 3) => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  return {
    currentView,
    selectedPost,
    selectedCategory,
    searchQuery,
    sortBy,
    displayedPosts,
    hasMorePosts,
    filteredAndSortedPosts,
    loadMorePosts,
    navigateToPost,
    navigateToCategory,
    navigateToHome,
    navigateToCategories,
    navigateToContact,
    handleSearch,
    setSortBy,
    getFeaturedPost,
    getRecentPosts
  };
};