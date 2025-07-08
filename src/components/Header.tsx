import React, { useState } from 'react';
import { Menu, X, Search, Home, FolderOpen, Mail } from 'lucide-react';
import { ViewMode } from '../types/blog';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onSearch, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavigation = (view: ViewMode) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
    setIsSearchOpen(false);
  };

  const getNavItemClass = (view: ViewMode) => {
    const baseClass = "flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200";
    return currentView === view ? `${baseClass} text-blue-600 font-semibold` : baseClass;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              ModernBlog
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={getNavItemClass('home')}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </button>
            <button 
              onClick={() => handleNavigation('categories')}
              className={getNavItemClass('categories')}
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              Categories
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={getNavItemClass('contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </button>
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:block">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={toggleSearch}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button 
                  onClick={toggleSearch}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => handleNavigation('home')}
                className={`${getNavItemClass('home')} w-full justify-start px-3 py-2 hover:bg-gray-50 rounded-md`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
              <button 
                onClick={() => handleNavigation('categories')}
                className={`${getNavItemClass('categories')} w-full justify-start px-3 py-2 hover:bg-gray-50 rounded-md`}
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                Categories
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`${getNavItemClass('contact')} w-full justify-start px-3 py-2 hover:bg-gray-50 rounded-md`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </button>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="px-3 py-2">
                <div className="flex">
                  <input
                    type="text"
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;