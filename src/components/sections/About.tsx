
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Globe, ArrowRight } from "lucide-react";

export const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      color: "blue"
    },
    {
      icon: Award,
      number: "500+",
      label: "Successful Projects",
      color: "green"
    },
    {
      icon: Clock,
      number: "8+",
      label: "Years of Excellence",
      color: "purple"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      color: "orange"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      title: "Quality Driven",
      description: "Our rigorous quality assurance processes ensure every project meets the highest standards of excellence."
    },
    {
      title: "Client Success",
      description: "Your success is our priority. We work as your technology partner to achieve your business objectives."
    },
    {
      title: "Agile Approach",
      description: "We embrace agile methodologies to deliver projects faster while maintaining flexibility and quality."
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", 
    "MongoDB", "PostgreSQL", "GraphQL", "TypeScript", "Next.js", "React Native"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            🚀 About PrimeSoft
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Businesses Through
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Technology Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2016, PrimeSoft has been at the forefront of digital transformation, 
            helping businesses leverage technology to achieve unprecedented growth and efficiency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${stat.color}-100 flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 text-${stat.color}-600`} />
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses of all sizes with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age. We believe technology should be 
                  accessible, reliable, and transformative.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner that businesses trust for their digital transformation 
                  journey, known for our innovation, reliability, and commitment to client success.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Master</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We work with cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Team CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h4>
            <p className="text-gray-600 mb-6">
              Our diverse team of developers, designers, and consultants brings together decades of experience 
              in delivering world-class technology solutions.
            </p>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200">
              View Team Profiles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
