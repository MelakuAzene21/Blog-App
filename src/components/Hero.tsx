import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { BlogPostData } from '../types/blog';

interface HeroProps {
  featuredPost: BlogPostData;
  onReadLatest: () => void;
  onPostClick: (post: BlogPostData) => void;
}

const Hero: React.FC<HeroProps> = ({ featuredPost, onReadLatest, onPostClick }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="block text-yellow-300">Stories & Ideas</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Explore our collection of thoughtfully crafted articles, tutorials, and insights 
                from industry experts and creative minds.
              </p>
            </div>
            
            {/* Featured Post Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 transition-all duration-200"
                 onClick={() => onPostClick(featuredPost)}>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1"
                  alt="Author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2 text-sm text-blue-100">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-100">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 hover:text-yellow-300 transition-colors duration-200">
                {featuredPost.title}
              </h3>
              <p className="text-blue-100 text-sm">
                {featuredPost.excerpt.substring(0, 120)}...
              </p>
            </div>

            <button 
              onClick={onReadLatest}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span>Read Latest Posts</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <img 
              src={featuredPost.image}
              alt="Featured content"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => onPostClick(featuredPost)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;