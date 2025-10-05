import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import newsAndEventsData from '../../../Data/newsAndEvents.json';

const NewsSection = () => {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    const latestNews = newsAndEventsData.news
      .map(item => ({ ...item, itemType: 'news' }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 2);

    const latestEvents = newsAndEventsData.events
      .map(item => ({ ...item, itemType: 'event' }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 2);

    const combinedItems = [...latestNews, ...latestEvents].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setRecentItems(combinedItems);
  }, []);

  const CarouselCard = ({ item }) => (
    <Link to={`/${item.itemType}/${item.id}`} className="group block h-full">
      <article className="relative overflow-hidden rounded-md h-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
          <h3 className="inline font-bold text-lg sm:text-xl md:text-2xl mb-2 text-white relative">
            <span className="relative group-hover:text-white">
              {item.title}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h3>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 mt-2">
            <div className="flex items-center gap-1">
              <Calendar size={14} className="w-4 h-4" />
              {new Date(item.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );

  const NewsListItem = ({ item }) => (
    <Link to={`/${item.itemType}/${item.id}`} className="group block">
      <article className="flex gap-3 sm:gap-4 md:gap-6 p-3 md:p-4 hover:bg-gray-50 transition-colors">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                item.itemType === 'event'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-green-100 text-green-600'
              }`}
            >
              {item.itemType === 'event' ? 'Event' : 'News'}
            </span>
            <p className="text-xs sm:text-sm text-gray-500">
              {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
          <h4 className="group mb-0 text-sm sm:text-base md:text-xl font-semibold text-gray-800 line-clamp-2 sm:line-clamp-1">
            <span className="border-b-2 border-transparent group-hover:border-ring transition-all duration-300">
              {item.title}
            </span>
          </h4>
        </div>
      </article>
    </Link>
  );

  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 md:mb-8 lg:mb-12 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              Latest News & Events
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl">
              Get the newest News, Events, Blogs and highlights at a glance.
            </p>
          </div>
          {/* View All Link */}
          <div className="text-left md:text-right">
            <Link
              to="/news-and-events"
              className="btn1 inline-flex items-center text-sm md:text-base"
            >
              <span className="flex items-center gap-1 sm:gap-2">
                Explore All
                <ArrowRight size={16} className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Side - Carousel */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[500px] lg:h-[550px] order-1">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: false }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={1000}
              className="rounded-lg overflow-hidden h-full"
            >
              {recentItems.map(item => (
                <SwiperSlide key={item.id}>
                  <CarouselCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side - News Cards */}
          <div className="space-y-2 h-auto md:h-[500px] lg:h-[600px] overflow-y-auto order-2 rounded-lg">
            <div className="grid gap-4">
              {recentItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <NewsListItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
