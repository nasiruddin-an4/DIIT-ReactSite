import React, { useState, useEffect } from 'react';
import {
  Users,
  Briefcase,
  Award,
  TrendingUp,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HomePageData from '../../../Data/homePage.json';

const CredibilitySection = () => {
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [partners, setPartners] = useState([]);
  const [collaborationTypes, setCollaborationTypes] = useState([]);
  const [collaborationBenefits, setCollaborationBenefits] = useState([]);

  useEffect(() => {
    const loadedPartners = HomePageData.internationalPartners || HomePageData;
    setPartners(loadedPartners);
  }, []);

  useEffect(() => {
    const loadedCollaborationTypes = HomePageData.collaborationTypes || HomePageData;
    setCollaborationTypes(loadedCollaborationTypes);
  }, []);

  useEffect(() => {
    const loadedBenefits = HomePageData.collaborationBenefits || [];
    setCollaborationBenefits(loadedBenefits);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex(prev => (prev + 1) % collaborationBenefits.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [collaborationBenefits]);

  return (
    <section className="py-24 bg-[#002652] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <h2 className="font-headline font-semibold text-4xl md:text-5xl text-white border-b-2 border-yellow-400 pb-2 mb-3">
            National & International <span className="text-yellow-400">MoUs</span>
          </h2>

          <Link to="/mou" className="btn2">
            <span>Explore MoUs</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Collaboration + Carousel */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-20">
          {/* Collaboration Types */}
          <div className="w-full md:w-1/3">
            <h2 className="text-white mb-6 text-2xl font-bold">Types of Collaboration</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              {collaborationTypes.map((collab, idx) => (
                <li key={idx}>{collab.title}</li>
              ))}
            </ul>
          </div>

          {/* Swiper Carousel */}
          <div className="w-full md:w-2/3 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={4}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1.3, spaceBetween: 15 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="pb-12"
            >
              {partners.map(partner => (
                <SwiperSlide key={partner.id}>
                  <Link
                    to={`/partners/${partner.id}`}
                    className="block text-white transition-all duration-300 hover:shadow-lg hover:pb-2"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-center h-28 bg-white rounded-lg mb-4 p-3">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-14 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{partner.name}</h4>
                      <p className="text-xs text-blue-200 mb-2">{partner.type}</p>
                      <p className="text-xs text-slate-300">{partner.description}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute -bottom-6 right-4 flex gap-3">
              <button className="swiper-prev bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300">
                <ChevronLeft size={14} />
              </button>
              <button className="swiper-next bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative flex justify-center h-24 overflow-hidden">
            {collaborationBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            idx === currentBenefitIndex
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-90'
          }`}
              >
                <div className="flex gap-4 items-center">
                  <Quote
                    className={`w-14 h-14 text-blue-200 transition-transform duration-700 ${
                      idx === currentBenefitIndex ? 'rotate-180' : '-rotate-0'
                    }`}
                  />
                  <h2 className="text-white font-semibold text-2xl md:text-4xl leading-snug transform transition-all duration-1000">
                    {benefit}
                  </h2>
                  <Quote className="w-14 h-14 text-blue-200 opacity-80" />
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {collaborationBenefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBenefitIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentBenefitIndex
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
