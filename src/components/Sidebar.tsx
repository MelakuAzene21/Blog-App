import React, { useState } from 'react';
import { Search, TrendingUp, Calendar, Tag } from 'lucide-react';
import { BlogPostData } from '../types/blog';
import { categories, allTags } from '../data/blogPosts';

interface SidebarProps {
  onSearch: (query: string) => void;
  onCategoryClick: (category: string) => void;
  onPostClick: (post: BlogPostData) => void;
  recentPosts: BlogPostData[];
  searchQuery: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  onSearch, 
  onCategoryClick, 
  onPostClick, 
  recentPosts,
  searchQuery 
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
  };

  const handleTagClick = (tag: string) => {
    setLocalSearchQuery(tag);
    onSearch(tag);
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <Search className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Search</h3>
        </div>
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <input 
              type="text" 
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              placeholder="Search articles..." 
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
        {searchQuery && (
          <div className="mt-3">
            <span className="text-sm text-gray-600">
              Searching for: <span className="font-semibold text-blue-600">"{searchQuery}"</span>
            </span>
            <button
              onClick={() => {
                setLocalSearchQuery('');
                onSearch('');
              }}
              className="ml-2 text-sm text-red-600 hover:text-red-700"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div 
              key={post.id} 
              className="flex space-x-3 group cursor-pointer"
              onClick={() => onPostClick(post)}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <Tag className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
        </div>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onCategoryClick(category.name)}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0 w-full text-left"
            >
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                {category.name}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;