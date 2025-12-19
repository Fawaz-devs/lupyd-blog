import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Header } from "@/components/Header";
import ColorBends from "@/components/ColorBends";
import { BlogPost } from "@/components/BlogCard";

// Mock data - in a real app this would come from an API
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Launching Our New Dashboard 2.0",
    excerpt:
      "We're thrilled to announce our completely redesigned dashboard with improved analytics, faster performance, and a brand new dark mode.",
    content: `We built this dashboard with one goal in mind: to simplify how ideas turn into impact.

In today’s fast-moving digital world, meaningful conversations don’t just happen — they need the right space to grow. Our new dashboard brings chats, calls, and community interactions into a single, powerful experience designed for builders, creators, and entrepreneurs.

With a cleaner layout, smarter organization, and faster access to the tools that matter most, you can now manage conversations, collaborate with your network, and stay connected without friction. Whether you’re discussing ideas, building partnerships, or growing your community, everything flows seamlessly in one place.

This launch isn’t just a reminder of what we’ve built — it’s a step toward what’s possible. A platform where communication fuels creation, and connections drive progress.

Welcome to a dashboard designed not just to manage conversations — but to move ideas forward.`,
    author: "Product Team",
    date: "Dec 15, 2025",
    readTime: "3 min read",
    image: "/Dashboard.png?w=800&auto=format&fit=crop",
    category: "Product",
  },
  {
    id: "2",
    title: "Secure Chats, Groups & Projects",
    excerpt:
      "Every message, group discussion, and project update is protected with end-to-end encryption, so only the people involved can access it. Your conversations stay private, secure, and fully under your control.",
    content: `In a world where digital communication powers collaboration, privacy should never be optional. Our platform is built with end-to-end encryption at its core, ensuring that every chat, group conversation, and project update is protected from the moment it’s sent until it’s received. Messages are encrypted on your device and can only be decrypted by the intended participants, meaning no third parties — including us — can read or access your data. This approach allows entrepreneurs, teams, and communities to communicate freely, share ideas confidently, and manage projects without worrying about data leaks or unauthorized access.

Security on our platform goes beyond individual messages. Group chats and project management spaces are designed to maintain the same level of encryption and privacy, even as teams grow and collaboration becomes more complex. Whether you’re discussing sensitive business ideas, coordinating tasks, or sharing files, your work remains private and protected at every step. By combining seamless collaboration with strong encryption, we’re creating a space where trust is built into the product — empowering you to focus on innovation, growth, and meaningful connections, knowing your conversations and projects are secure by design`,
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
    content: `Our project management system is designed to provide structure, visibility, and control across the entire project lifecycle. It enables teams to define project goals, break them down into tasks, and create clear execution timelines through flexible scheduling and planning tools. Tasks can be prioritized, assigned to specific team members, and organized into logical workflows, ensuring accountability and alignment from day one.

Scheduling features allow teams to set deadlines, manage dependencies, and adjust timelines dynamically as project requirements evolve. Task statuses such as planned, in progress, and completed provide real-time insight into execution, while the ability to mark tasks as done ensures accurate progress tracking and milestone validation. Every update is reflected instantly across the workspace, keeping all stakeholders informed without manual follow-ups.

Assignment and collaboration are deeply integrated into the workflow. Team members can be assigned roles and responsibilities per task, enabling clear ownership and streamlined coordination. Combined with secure communication and activity tracking, the system ensures that planning, execution, and delivery remain synchronized. Whether managing small teams or complex, multi-phase projects, the platform provides the reliability, scalability, and clarity required to deliver work efficiently and on time.`,
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
      "Creativity Deserves the Right Tools .",
    content: `In today’s digital world, content is identity. It’s how influencers build trust, how creators grow communities, and how everyday users express themselves. Our content creation tools are designed to support this journey from inspiration to influence—giving you a powerful, intuitive space to create content that truly represents you.

From capturing ideas the moment they strike to planning content calendars and refining drafts, the platform brings structure to creativity without limiting it. Influencers can manage multiple content streams, collaborate with teams or brands, and maintain consistency across their voice and vision. Users can experiment freely, improve over time, and turn simple ideas into polished, share-ready content.

Collaboration and feedback are built into the experience, making it easy to review, iterate, and evolve content together. Track progress, manage revisions, and move seamlessly from draft to publish—all while staying focused on what matters most: creating meaningful, engaging content. Whether you’re building a personal brand, growing an audience, or just sharing your story, our tools are built to scale with you.

This isn’t just about creating content—it’s about empowering creators and users to be seen, heard, and remembered. With the right tools behind you, every idea has the potential to become impact.

Looking Forward:
As we enter 2026, we're more committed than ever to delivering exceptional value to our users. Our roadmap includes exciting developments in artificial intelligence, expanded integration capabilities, and enhanced collaboration features.

Thank you to everyone who has been part of our journey. Here's to an even more remarkable year ahead!`,
    author: "Co-Founder and CTO",
    image : "/content.jpg?w=800&auto=format&fit=crop",
    date: "Dec 1, 2025",
    readTime: "6 min read",
    category: "Company",
  },
  
];

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundPost = mockBlogPosts.find(post => post.id === id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      // Navigate to 404 if post not found
      navigate("/not-found");
    }
  }, [id, navigate]);

  if (!post) {
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
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

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
          autoRotate={0.5}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <Header />

        {/* Back button */}
        <div className="container mx-auto px-6 pt-32">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all posts</span>
          </Link>
        </div>

        {/* Blog Post Content */}
        <article className="container mx-auto px-6 py-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/80 backdrop-blur-md rounded-3xl p-8 shadow-soft"
          >
            {/* Category and Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-card">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </article>

        {/* Related Posts Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Related Posts
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBlogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${relatedPost.id}`} className="block h-full">
                      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-1 h-full">
                        {relatedPost.image && (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{relatedPost.date}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPostPage;