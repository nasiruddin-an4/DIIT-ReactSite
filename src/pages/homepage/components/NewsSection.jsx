import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsAndEventsData from "../../../Data/newsAndEvents.json";

const NewsSection = () => {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    // Combine and sort news and events by date
    const combinedItems = [
      ...newsAndEventsData.news.map((item) => ({ ...item, itemType: "news" })),
      ...newsAndEventsData.events.map((item) => ({ ...item, itemType: "event" })),
    ]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    setRecentItems(combinedItems);
  }, []);

  const NewsCard = ({ item }) => (
    <Link
      to={`/${item.itemType}/${item.id}`}
      className="group block h-full"
    >
      <article className="bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.itemType === "event"
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {item.itemType === "event" ? "Event" : "News"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {item.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(item.date).toLocaleDateString()}
            </div>
            {item.itemType === "event" && (
              <>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {item.time}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {item.venue}
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with View All button */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-headline font-bold text-4xl text-primary">
            Latest Updates
          </h2>
          <Link
            to="/news-and-events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2.2,
              }
            }}
            className="pb-12"
          >
            {recentItems.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {recentItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
