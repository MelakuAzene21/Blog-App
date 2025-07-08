import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { BlogPostData } from '../types/blog';

interface BlogPostProps extends BlogPostData {
  onReadMore: (post: BlogPostData) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  id,
  title, 
  excerpt, 
  content,
  image, 
  author, 
  date, 
  readTime, 
  category,
  tags,
  onReadMore 
}) => {
  const post: BlogPostData = {
    id, title, excerpt, content, image, author, date, readTime, category, tags
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onReadMore(post)}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h2 
          className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          onClick={() => onReadMore(post)}
        >
          {title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{tags.length - 3} more
            </span>
          )}
        </div>
        
        <button 
          onClick={() => onReadMore(post)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </article>
  );
};

export default BlogPost;