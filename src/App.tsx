import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail';
import CategoriesView from './components/CategoriesView';
import ContactView from './components/ContactView';
import SortControls from './components/SortControls';
import { useBlog } from './hooks/useBlog';

function App() {
  const {
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
  } = useBlog();

  const renderContent = () => {
    switch (currentView) {
      case 'post':
        return selectedPost ? (
          <PostDetail post={selectedPost} onBack={navigateToHome} />
        ) : null;
      
      case 'categories':
        return <CategoriesView onCategoryClick={navigateToCategory} />;
      
      case 'contact':
        return <ContactView />;
      
      case 'category':
      case 'home':
      default:
        return (
          <>
            {/* Hero Section - only show on home view without search/category filter */}
            {currentView === 'home' && !searchQuery && !selectedCategory && (
              <Hero 
                featuredPost={getFeaturedPost()}
                onReadLatest={navigateToHome}
                onPostClick={navigateToPost}
              />
            )}
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Blog Posts */}
                <div className="lg:col-span-3">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedCategory ? `${selectedCategory} Articles` : 
                       searchQuery ? 'Search Results' : 'Latest Articles'}
                    </h2>
                    <p className="text-gray-600">
                      {selectedCategory ? `Explore our ${selectedCategory.toLowerCase()} content` :
                       searchQuery ? 'Articles matching your search' : 'Discover our latest posts and insights'}
                    </p>
                  </div>

                  {/* Sort Controls */}
                  <SortControls
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    resultsCount={filteredAndSortedPosts.length}
                    searchQuery={searchQuery}
                    selectedCategory={selectedCategory}
                  />
                  
                  {displayedPosts.length > 0 ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {displayedPosts.map((post) => (
                          <BlogPost
                            key={post.id}
                            {...post}
                            onReadMore={navigateToPost}
                          />
                        ))}
                      </div>
                      
                      {/* Load More Button */}
                      {hasMorePosts && (
                        <div className="text-center mt-12">
                          <button 
                            onClick={loadMorePosts}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:scale-105 transform"
                          >
                            Load More Posts
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                      <p className="text-gray-600 mb-4">
                        {searchQuery ? 'Try adjusting your search terms' : 'No articles match your current filters'}
                      </p>
                      {(searchQuery || selectedCategory) && (
                        <button
                          onClick={navigateToHome}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View all articles
                        </button>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <Sidebar 
                    onSearch={handleSearch}
                    onCategoryClick={navigateToCategory}
                    onPostClick={navigateToPost}
                    recentPosts={getRecentPosts()}
                    searchQuery={searchQuery}
                  />
                </div>
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView}
        onNavigate={(view) => {
          switch (view) {
            case 'home':
              navigateToHome();
              break;
            case 'categories':
              navigateToCategories();
              break;
            case 'contact':
              navigateToContact();
              break;
          }
        }}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
}

export default App;