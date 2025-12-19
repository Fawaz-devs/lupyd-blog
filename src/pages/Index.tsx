import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Header } from "@/components/Header";
import { BlogCard, BlogPost } from "@/components/BlogCard";
import { UniqueAccordion } from "@/components/ui/interactive-accordion";
import { Button } from "@/components/ui/button";
import ColorBends from "@/components/ColorBends";

const companyPosts: BlogPost[] = [
  {
    id: "1",
    title: "Launching Our New Dashboard ",
    excerpt:
      "We're thrilled to announce our dashboard with improved analytics, faster performance, and a brand new dark mode.",
    content: "Full article content here...",
    author: "Product Team",
    date: "Dec 19, 2025",
    readTime: "3 min read",
    image: "/Dashboard-sm.png?w=800&auto=format&fit=crop",
    category: "Product",
  },
  {
    id: "2",
    title: "Secure Chats, Groups & Projects",
    excerpt:
      "Every message, group discussion, and project update is protected with end-to-end encryption, so only the people involved can access it. Your conversations stay private, secure, and fully under your control.",
    content: "Full article content here...",
    author: "Leadership",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    image: "/end-end.png?w=800&auto=format&fit=crop",
    category: "Company",
  },
  {
    id: "3",
    title: "Projects, Perfectly Organized",
    excerpt:
      "Plan Smarter, Execute Faster, Track Everything",
    content: "Full article content here...",
    author: "Engineering Team",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    image: "/Project.png?w=800&auto=format&fit=crop",
    category: "Feature",
  },
  {
    id: "4",
    title: "Content Creation, Simplified",
    excerpt:
      "Creativity Deserves the Right Tools.",
    content: "Full article content here...",
    author: "CEO",
    date: "Dec 1, 2025",
    readTime: "6 min read",
    image : "/content.jpg?w=800&auto=format&fit=crop",
    category: "Company",
  },
  
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* ColorBends Background */}
      <div className="fixed inset-0 z-0">
        <ColorBends
          colors={["#ffffff", "#888888", "#000000"]}
          rotation={30}
          speed={0.15}
          scale={1.2}
          frequency={1.2}
          warpStrength={1.0}
          mouseInfluence={0.6}
          parallax={0.4}
          noise={0.05}
          transparent
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 text-foreground mb-6 backdrop-blur-sm"
              >
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">Company Updates</span>
              </motion.div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Lupyd : Connect{" "}
                <span className="text-gradient">Create Grow</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Stay up to date with our latest product releases, company milestones,
                and the journey we're on to revolutionize the industry.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="#updates">
                    View Updates
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section id="updates" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Latest Updates
              </h2>
              <p className="text-muted-foreground text-lg">
                News, features, and progress from our team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Accordion */}
        <section id="about" className="py-24 px-6 bg-card/80 backdrop-blur-md">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                  What We Do
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Transforming ideas into exceptional digital experiences. We believe
                  in the power of innovation and design to create meaningful
                  solutions for businesses worldwide.
                </p>
                <UniqueAccordion />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                    alt="Our team collaborating"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-foreground/10 rounded-2xl -z-10 animate-float" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-muted-foreground/10 rounded-full -z-10 animate-float" style={{ animationDelay: "2s" }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Have questions or want to learn more about what we're building?
                We'd love to hear from you.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:contact@Lupyd.com">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border bg-card/60 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-display text-xl font-semibold text-foreground">
                Lupyd<span className="text-muted-foreground">.</span>
              </span>
              <p className="text-muted-foreground text-sm">
                © Lupyd. Building the future.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
