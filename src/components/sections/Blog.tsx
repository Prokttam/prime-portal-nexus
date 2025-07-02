
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch in 2024",
      excerpt: "Explore the latest trends in cloud computing including serverless architecture, edge computing, and AI-driven cloud services that are reshaping the industry.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      category: "Cloud Computing",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps: Best Practices and Architecture",
      excerpt: "Learn how to design and develop mobile applications that can handle millions of users with proper architecture patterns and performance optimization techniques.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Mobile Development",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      readTime: "12 min read",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of Remote Work: Essential Strategies",
      excerpt: "Discover critical cybersecurity measures every business needs to implement to protect their remote workforce and sensitive data in today's digital landscape.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "Cybersecurity",
      author: "Alex Rivera",
      date: "Dec 10, 2023",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "UI/UX Design Principles That Drive User Engagement",
      excerpt: "Master the fundamental design principles that create intuitive user experiences and significantly boost user engagement and conversion rates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Design",
      author: "Emma Davis",
      date: "Dec 8, 2023",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 5,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "Learn how to implement effective DevOps practices and automation tools to accelerate your development process while maintaining code quality and reliability.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "DevOps",
      author: "David Park",
      date: "Dec 5, 2023",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of AI in Software Development: Tools and Applications",
      excerpt: "Explore how artificial intelligence is revolutionizing software development with code generation, testing automation, and intelligent debugging tools.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Artificial Intelligence",
      author: "Lisa Wong",
      date: "Dec 3, 2023",
      readTime: "11 min read",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Cloud Computing",
    "Mobile Development",
    "Cybersecurity",
    "Design",
    "DevOps",
    "Artificial Intelligence"
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            📝 Tech Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest from Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Tech Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest technology trends, best practices, and insights 
            from our team of expert developers, designers, and tech consultants.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 text-sm">
                    Read Article
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Tech Insights</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest technology insights, tutorials, 
            and industry news delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            Join 10,000+ tech professionals who trust our insights. Unsubscribe anytime.
          </p>
        </div>

        {/* CTA to View All Posts */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full text-lg">
            View All Blog Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
