import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const NewsSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const newsData = [
    {
      id: 1,
      category: "achievements",
      title: "DIIT Students Win National Programming Contest",
      excerpt:
        "Our Computer Science team secured first place in the Bangladesh National Programming Championship 2024, competing against 150+ universities.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=2069&q=80",
      author: "Dr. Rahman Ahmed",
      authorRole: "Head of CSE Department",
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      readTime: "3 min read",
      tags: ["Programming", "Competition", "Achievement"],
      featured: true,
      stats: { views: 2400, likes: 180, shares: 45 },
    },
    {
      id: 2,
      category: "research",
      title: "Breakthrough in AI-Powered Healthcare Solutions",
      excerpt:
        "Faculty research team publishes groundbreaking paper on machine learning applications in early disease detection, featured in international journal.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2069&q=80",
      author: "Prof. Fatima Khan",
      authorRole: "Research Director",
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      readTime: "5 min read",
      tags: ["AI", "Healthcare", "Research"],
      featured: false,
      stats: { views: 1800, likes: 120, shares: 32 },
    },
    {
      id: 3,
      category: "events",
      title: "Tech Innovation Summit 2024 - Registration Open",
      excerpt:
        "Join industry leaders, students, and faculty for our annual technology summit featuring keynotes, workshops, and networking opportunities.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2070&q=80",
      author: "Event Committee",
      authorRole: "DIIT Administration",
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      readTime: "2 min read",
      tags: ["Event", "Technology", "Networking"],
      featured: true,
      stats: { views: 3200, likes: 240, shares: 68 },
    },
    {
      id: 4,
      category: "achievements",
      title: "Alumni Success: From DIIT to Silicon Valley",
      excerpt:
        "Meet Rashid Hassan (CSE 2020), now Senior Software Engineer at Google, sharing his journey from DIIT classrooms to tech giant success.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2070&q=80",
      author: "Alumni Relations",
      authorRole: "DIIT Career Services",
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      readTime: "4 min read",
      tags: ["Alumni", "Success Story", "Career"],
      featured: false,
      stats: { views: 2800, likes: 195, shares: 58 },
    },
  ];

  // Sort newest → oldest and take top 3
  const recentNews = [...newsData]
    .sort((a, b) => b.publishedAt - a.publishedAt)
    .slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-primary mb-6">
            Recent News
          </h2>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore the 3 most recent updates and stories from across all
            categories.
          </p>
        </div>

        {/* Recent News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentNews.map((news) => (
            <article
              key={news.id}
              className="group bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>{formatTimeAgo(news.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="BookOpen" size={14} />
                    <span>{news.readTime}</span>
                  </div>
                </div>

                <h3 className="font-headline font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {news.title}
                </h3>

                <p className="font-body text-text-secondary leading-relaxed mb-4 line-clamp-3 text-sm">
                  {news.excerpt}
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={12} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-xs text-primary">
                        {news.author}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{news.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{news.stats.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            variant="default"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
