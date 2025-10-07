import React from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AlumniWords = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      batch: '2019',
      position: 'Senior Software Engineer',
      company: 'Tech Company',
      rating: 5,
      quote:
        'I am Fahmida Akter, student of the BBA 7th Batch, Major in Finance and session 2006-2007. I am incredibly happy that I chose this institute for my studies. Every success depends on the background. Constructing a strong building always needs reliable ',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'James Chen',
      batch: '2020',
      position: 'Product Manager',
      company: 'StartUp',
      rating: 5,
      quote:
        'I am Saleh Ahmad Shakil, a student of the CSE 15thBatch. I am incredibly happy that I chose this institute for my studies. Every success depends on the background. Constructing a strong building always needs reliable foundations.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      batch: '2021',
      position: 'UX Designer',
      company: 'Design Studio',
      rating: 5,
      quote:
        'The creative environment and mentorship at DIIT shaped my design thinking and problem-solving approach.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Michael Park',
      batch: '2018',
      position: 'Data Scientist',
      company: 'Analytics Corp',
      rating: 5,
      quote:
        'DIIT equipped me with cutting-edge technical skills and analytical thinking that propelled my career forward.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Olivia Thompson',
      batch: '2020',
      position: 'Full Stack Developer',
      company: 'Innovation Labs',
      rating: 5,
      quote:
        'The hands-on projects and industry exposure at DIIT prepared me for real-world challenges in software development.',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden flex items-center">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-0 relative z-10 w-full">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="font-headline font-bold text-4xl text-white tracking-tight">
              What Our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Graduates
                </span>
              </span>{' '}
              Say
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Hear from our successful alumni who are making their mark in the industry
            </p>
          </div>
          <div>
            <Link to="/testimonials" className="btn2">
              <span>
                Explore More Stories
                <ArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true} // Infinite loop
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-8 relative"
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <div className="h-[500px] px-2 mb-8">
                <div className="relative h-full rounded-3xl p-8 border border-slate-700/50">
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Quote */}
                    <div className="flex-1 flex flex-col justify-center">
                      <blockquote className="text-center mb-4">
                        <p className="text-md md:text-xl font-light text-slate-100 leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>

                    {/* Profile */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-700/50">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-400/30">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="font-semibold text-xl text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-slate-300 font-medium mb-1">{testimonial.position}</p>
                        <p className="text-slate-400 text-sm mb-2">{testimonial.company}</p>
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">
                          Batch of {testimonial.batch}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20">
            <ChevronLeft className="text-white w-5 h-5" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 z-50">
            <ChevronRight className="text-white w-5 h-5" />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default AlumniWords;
