import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

export function BlogCard({ post, index, featured = false }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${
        featured ? "col-span-full lg:col-span-2" : ""
      }`}
      onClick={() => window.location.href = `/blog/${post.id}`}
    >
      <div
        className={`bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-1 ${
          featured ? "lg:flex" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            featured ? "lg:w-1/2 h-64 lg:h-auto" : "h-52"
          }`}
        >
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center">
              <span className="font-display text-4xl text-primary/40">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? "lg:w-1/2 lg:p-8 lg:flex lg:flex-col lg:justify-center" : ""}`}>
          <h3
            className={`font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>

          <p className={`text-muted-foreground leading-relaxed mb-4 ${featured ? "text-base" : "text-sm line-clamp-2"}`}>
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}