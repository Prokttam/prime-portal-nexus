
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud-native architectures.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Architecture"],
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "App Store Ready", "Push Notifications"],
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses.",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Cost Optimization", "24/7 Monitoring"],
      color: "green"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine beautiful aesthetics with intuitive functionality.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "orange"
    },
    {
      icon: Users,
      title: "Tech Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your digital transformation.",
      features: ["Technology Strategy", "Architecture Review", "Best Practices", "Team Training"],
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600",
      green: "from-green-500 to-green-600 bg-green-100 text-green-600",
      orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-600",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600",
      red: "from-red-500 to-red-600 bg-red-100 text-red-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            🛠️ Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete IT Solutions for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Your Business Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology services 
            that drive innovation and accelerate your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = getColorClasses(service.color);
            
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl ${colorClass.split(' ')[2]} ${colorClass.split(' ')[3]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200 p-0">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
