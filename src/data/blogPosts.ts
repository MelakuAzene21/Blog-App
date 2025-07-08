import { BlogPostData } from '../types/blog';

export const blogPosts: BlogPostData[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Discover the latest trends and technologies shaping the future of web development. From AI integration to new frameworks, explore what's coming next in the world of web development.",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications.</p>
      
      <h2>AI Integration in Development</h2>
      <p>Artificial Intelligence is becoming increasingly integrated into the development workflow. From AI-powered code completion to automated testing, developers are leveraging AI to boost productivity and code quality.</p>
      
      <h2>New JavaScript Frameworks</h2>
      <p>The JavaScript ecosystem continues to evolve with new frameworks and libraries that promise better performance, developer experience, and maintainability.</p>
      
      <h2>WebAssembly Growth</h2>
      <p>WebAssembly is gaining traction as a way to run high-performance applications in the browser, opening up new possibilities for web applications.</p>
      
      <h2>Conclusion</h2>
      <p>Staying updated with these trends will be crucial for developers looking to remain competitive in the rapidly evolving web development landscape.</p>
    `,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Sarah Johnson",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["JavaScript", "AI", "WebAssembly", "Trends"],
    featured: true
  },
  {
    id: 2,
    title: "Mastering CSS Grid: A Complete Guide",
    excerpt: "Learn how to create complex layouts with CSS Grid. This comprehensive guide covers everything from basic concepts to advanced techniques for modern web design.",
    content: `
      <h2>Getting Started with CSS Grid</h2>
      <p>CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional.</p>
      
      <h2>Basic Grid Concepts</h2>
      <p>Understanding the fundamental concepts of Grid containers, Grid items, and Grid lines is essential for mastering CSS Grid.</p>
      
      <h2>Advanced Techniques</h2>
      <p>Once you've mastered the basics, you can explore advanced features like named grid lines, grid areas, and implicit grids.</p>
    `,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Michael Chen",
    date: "Jan 12, 2025",
    readTime: "12 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Layout", "Web Design"]
  },
  {
    id: 3,
    title: "Building Responsive UIs with React and Tailwind",
    excerpt: "Create beautiful, responsive user interfaces using React and Tailwind CSS. Learn best practices for component design and responsive layout techniques.",
    content: `
      <h2>Why React and Tailwind?</h2>
      <p>The combination of React and Tailwind CSS provides a powerful toolkit for building modern, responsive user interfaces quickly and efficiently.</p>
      
      <h2>Component-First Approach</h2>
      <p>Learn how to structure your React components for maximum reusability and maintainability while leveraging Tailwind's utility classes.</p>
      
      <h2>Responsive Design Patterns</h2>
      <p>Explore common responsive design patterns and how to implement them effectively using Tailwind's responsive utilities.</p>
    `,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Emma Rodriguez",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    category: "React",
    tags: ["React", "Tailwind", "UI", "Responsive"]
  },
  {
    id: 4,
    title: "JavaScript Performance Optimization Tips",
    excerpt: "Boost your JavaScript application's performance with these proven optimization techniques. From memory management to async operations, learn what matters most.",
    content: `
      <h2>Understanding Performance Bottlenecks</h2>
      <p>Before optimizing, it's crucial to identify where your application's performance bottlenecks lie. Learn about profiling tools and techniques.</p>
      
      <h2>Memory Management</h2>
      <p>Proper memory management is essential for maintaining good performance, especially in long-running applications.</p>
      
      <h2>Async Operations</h2>
      <p>Learn how to handle asynchronous operations efficiently to prevent blocking the main thread and improve user experience.</p>
    `,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "David Park",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Performance", "Optimization", "Memory"]
  },
  {
    id: 5,
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt: "Learn how to build and maintain effective design systems that scale across teams and products. Discover the tools and processes that leading companies use.",
    content: `
      <h2>What is a Design System?</h2>
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications.</p>
      
      <h2>Building Your Design System</h2>
      <p>Learn the step-by-step process of creating a design system from scratch, including component libraries and documentation.</p>
      
      <h2>Maintaining and Scaling</h2>
      <p>Discover best practices for maintaining and scaling your design system as your team and product grow.</p>
    `,
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Lisa Thompson",
    date: "Jan 5, 2025",
    readTime: "15 min read",
    category: "Design",
    tags: ["Design System", "UI", "Components", "Consistency"]
  },
  {
    id: 6,
    title: "Getting Started with TypeScript",
    excerpt: "A beginner-friendly introduction to TypeScript and how it can improve your JavaScript development workflow. Learn the basics and start building type-safe applications.",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static type checking to JavaScript, helping catch errors early and improving code maintainability.</p>
      
      <h2>Basic Types and Interfaces</h2>
      <p>Learn about TypeScript's type system, including basic types, interfaces, and how to use them effectively.</p>
      
      <h2>Advanced Features</h2>
      <p>Explore advanced TypeScript features like generics, decorators, and utility types that can make your code more robust.</p>
    `,
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Alex Kumar",
    date: "Jan 3, 2025",
    readTime: "9 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Types", "Development"]
  },
  {
    id: 7,
    title: "Modern Authentication Patterns",
    excerpt: "Explore modern authentication patterns including OAuth, JWT, and passwordless authentication. Learn how to implement secure authentication in your applications.",
    content: `
      <h2>Authentication vs Authorization</h2>
      <p>Understanding the difference between authentication and authorization is crucial for building secure applications.</p>
      
      <h2>JWT and Session Management</h2>
      <p>Learn about JSON Web Tokens and how to implement secure session management in your applications.</p>
      
      <h2>Passwordless Authentication</h2>
      <p>Explore the future of authentication with passwordless solutions and how to implement them.</p>
    `,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Sarah Johnson",
    date: "Dec 28, 2024",
    readTime: "11 min read",
    category: "Security",
    tags: ["Authentication", "Security", "JWT", "OAuth"]
  },
  {
    id: 8,
    title: "API Design Best Practices",
    excerpt: "Learn how to design RESTful APIs that are intuitive, scalable, and maintainable. Discover patterns and practices used by leading tech companies.",
    content: `
      <h2>RESTful Design Principles</h2>
      <p>Understanding REST principles is fundamental to designing APIs that are intuitive and easy to use.</p>
      
      <h2>Error Handling and Status Codes</h2>
      <p>Learn how to implement proper error handling and use HTTP status codes effectively in your APIs.</p>
      
      <h2>Documentation and Versioning</h2>
      <p>Discover best practices for API documentation and versioning strategies that scale with your application.</p>
    `,
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    author: "Michael Chen",
    date: "Dec 25, 2024",
    readTime: "13 min read",
    category: "Backend",
    tags: ["API", "REST", "Backend", "Design"]
  }
];

export const categories = [
  { name: "Web Development", count: 2 },
  { name: "CSS", count: 1 },
  { name: "React", count: 1 },
  { name: "JavaScript", count: 1 },
  { name: "Design", count: 1 },
  { name: "TypeScript", count: 1 },
  { name: "Security", count: 1 },
  { name: "Backend", count: 1 }
];

export const allTags = [
  "JavaScript", "React", "CSS", "HTML", "TypeScript", "Node.js", 
  "Python", "Web Design", "UI/UX", "Programming", "Tutorial", "Tips",
  "AI", "WebAssembly", "Grid", "Layout", "Tailwind", "Performance",
  "Optimization", "Memory", "Design System", "Components", "Authentication",
  "Security", "JWT", "OAuth", "API", "REST", "Backend"
];