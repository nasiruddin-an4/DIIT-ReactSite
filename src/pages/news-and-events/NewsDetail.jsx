import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Eye, Heart, Share2 } from 'lucide-react';
import newsAndEventsData from '../../Data/newsAndEvents.json';
import Header from '../../components/ui/Header';

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsAndEventsData.news.find(item => item.id === id);

  if (!news) return <div>News not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                {news.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {news.title}
            </h1>

            <div className="flex items-center justify-between py-4 border-y border-gray-200 mb-8">
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(news.date).toLocaleDateString()}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {news.stats.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {news.stats.likes}
                  </span>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Full Content */}
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                {news.excerpt}
              </p>
              {/* Add more content sections as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsDetail;
