import React from 'react';
import { FolderOpen, ArrowRight } from 'lucide-react';
import { categories } from '../data/blogPosts';

interface CategoriesViewProps {
  onCategoryClick: (category: string) => void;
}

const CategoriesView: React.FC<CategoriesViewProps> = ({ onCategoryClick }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Browse Categories
        </h1>
        <p className="text-xl text-gray-600">
          Explore our content organized by topics and interests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategoryClick(category.name)}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <FolderOpen className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {category.count} posts
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {category.name}
            </h3>
            
            <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
              <span>View Posts</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesView;