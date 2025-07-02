
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "DigitalFirst Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
      content: "TechVault transformed our entire digital infrastructure. Their cloud migration reduced our costs by 40% while improving performance significantly. The team's expertise in modern technologies is outstanding.",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The mobile app they developed for us exceeded all expectations. User engagement increased by 300% and our revenue grew by 150% within the first quarter of launch.",
      rating: 5,
      featured: false
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Manager",
      company: "InnovateCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Working with TechVault was a game-changer. Their agile approach and constant communication made the entire development process smooth and transparent. Highly recommended!",
      rating: 5,
      featured: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Director",
      company: "LogiFlow Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The UI/UX redesign they delivered was phenomenal. Our conversion rates improved by 85% and customer satisfaction scores reached an all-time high.",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP Technology",
      company: "HealthTech Pro",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      content: "TechVault's cybersecurity solutions gave us peace of mind. Their comprehensive security audit and implementation helped us achieve compliance while protecting our sensitive data.",
      rating: 5,
      featured: true
    },
    {
      id: 6,
      name: "James Parker",
      role: "Startup Founder",
      company: "NextGen Analytics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      content: "From MVP to scaling, TechVault has been our trusted technology partner. Their consulting helped us make smart architectural decisions that saved us months of development time.",
      rating: 5,
      featured: false
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "150+", label: "Happy Clients" },
    { number: "95%", label: "Project Success Rate" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            ⭐ Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say About
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and innovative 
            companies have to say about their experience working with TechVault.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className={`hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                testimonial.featured ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white" : "bg-white"
              }`}
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 fill-current ${
                        testimonial.featured ? "text-yellow-300" : "text-yellow-400"
                      }`} 
                    />
                  ))}
                </div>

                {/* Featured Badge */}
                {testimonial.featured && (
                  <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
                    Featured Review
                  </Badge>
                )}

                {/* Content */}
                <blockquote className={`text-lg leading-relaxed mb-6 ${
                  testimonial.featured ? "text-white" : "text-gray-700"
                }`}>
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className={`font-semibold ${testimonial.featured ? "text-white" : "text-gray-900"}`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm ${testimonial.featured ? "text-white/80" : "text-gray-600"}`}>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're proud to work with companies of all sizes, from innovative startups 
            to Fortune 500 enterprises across various industries.
          </p>
          
          {/* Company Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
              TechCorp
            </div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
              InnovateInc
            </div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
              FutureFlow
            </div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
              NextGen
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
