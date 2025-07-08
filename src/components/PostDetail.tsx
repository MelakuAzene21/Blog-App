import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from 'lucide-react';
import { BlogPostData } from '../types/blog';

interface PostDetailProps {
  post: BlogPostData;
  onBack: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Posts</span>
      </button>

      {/* Post Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Featured Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8"
        />
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div 
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Tags */}
      <div className="border-t border-gray-200 pt-8 mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Tag className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author Info */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-8">
        <div className="flex items-start space-x-4">
          <img
            src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
            alt={post.author}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              About {post.author}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {post.author} is a passionate writer and developer with years of experience in 
              web development and design. They love sharing knowledge and helping others 
              learn new technologies.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;