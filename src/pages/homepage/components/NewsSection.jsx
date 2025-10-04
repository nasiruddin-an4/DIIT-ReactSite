import React, { useState, useEffect } from "react";

import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());

  const tabs = [
    { id: "all", name: "All Updates", icon: "Newspaper" },
    { id: "achievements", name: "Achievements", icon: "Trophy" },
    { id: "research", name: "Research", icon: "Microscope" },
    { id: "events", name: "Events", icon: "Calendar" },
  ];

  const newsData = [
    {
      id: 1,
      category: "achievements",
      title: "DIIT Students Win National Programming Contest",
      excerpt:
        "Our Computer Science team secured first place in the Bangladesh National Programming Championship 2024, competing against 150+ universities.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Alumni Relations",
      authorRole: "DIIT Career Services",
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
      readTime: "4 min read",
      tags: ["Alumni", "Success Story", "Career"],
      featured: false,
      stats: { views: 2800, likes: 195, shares: 58 },
    },
    {
      id: 5,
      category: "research",
      title: "Sustainable Technology Lab Inaugurated",
      excerpt:
        "New state-of-the-art research facility focuses on renewable energy solutions and environmental technology innovations for Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Dr. Karim Uddin",
      authorRole: "Lab Director",
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      readTime: "3 min read",
      tags: ["Research", "Sustainability", "Innovation"],
      featured: false,
      stats: { views: 1600, likes: 98, shares: 28 },
    },
    {
      id: 6,
      category: "events",
      title: "Industry Partnership with Leading Tech Companies",
      excerpt:
        "DIIT announces strategic partnerships with 15 new technology companies, expanding internship and placement opportunities for students.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      author: "Industry Relations",
      authorRole: "DIIT Partnerships",
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
      readTime: "2 min read",
      tags: ["Partnership", "Industry", "Placement"],
      featured: true,
      stats: { views: 2100, likes: 156, shares: 42 },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const filteredNews =
    activeTab === "all"
      ? newsData
      : newsData?.filter((news) => news?.category === activeTab);

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

  const featuredNews = filteredNews?.filter((news) => news?.featured);
  const regularNews = filteredNews?.filter((news) => !news?.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="text-primary font-medium text-sm">
              Live Updates
            </span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-accent"></div>
          </div>
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-primary mb-6">
            Latest News & Achievements
          </h2>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest achievements, research breakthroughs,
            student success stories, and upcoming events that showcase our
            commitment to excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === tab?.id
                  ? "bg-primary text-white shadow-brand-lg"
                  : "bg-white text-text-secondary hover:bg-slate-50 hover:text-primary border border-slate-200"
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Featured News */}
        {featuredNews?.length > 0 && (
          <div className="mb-16">
            <h3 className="font-headline font-bold text-2xl text-primary mb-8 flex items-center">
              <Icon name="Star" size={24} className="text-accent mr-3" />
              Featured Stories
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews?.slice(0, 2)?.map((news) => (
                <article
                  key={news?.id}
                  className="group bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>

                  {/* News Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={news?.image}
                      alt={news?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                        {news?.category}
                      </span>
                    </div>
                  </div>

                  {/* News Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} />
                        <span>{formatTimeAgo(news?.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="BookOpen" size={14} />
                        <span>{news?.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-headline font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {news?.title}
                    </h3>

                    <p className="font-body text-text-secondary leading-relaxed mb-4 line-clamp-3">
                      {news?.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {news?.tags?.slice(0, 3)?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 text-text-secondary text-xs rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon
                            name="User"
                            size={16}
                            className="text-primary"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-primary">
                            {news?.author}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {news?.authorRole}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={12} />
                          <span>{news?.stats?.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={12} />
                          <span>{news?.stats?.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews?.map((news, index) => (
            <article
              key={news?.id}
              className="group bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* News Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news?.image}
                  alt={news?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {news?.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>{formatTimeAgo(news?.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="BookOpen" size={14} />
                    <span>{news?.readTime}</span>
                  </div>
                </div>

                <h3 className="font-headline font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {news?.title}
                </h3>

                <p className="font-body text-text-secondary leading-relaxed mb-4 line-clamp-3 text-sm">
                  {news?.excerpt}
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={12} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-xs text-primary">
                        {news?.author}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{news?.stats?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{news?.stats?.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More & Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-slate-200 max-w-2xl mx-auto">
            <Icon name="Bell" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="font-headline font-bold text-2xl text-primary mb-4">
              Stay Updated
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Subscribe to our newsletter and never miss important updates,
              achievements, and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="bg-accent hover:bg-accent/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
