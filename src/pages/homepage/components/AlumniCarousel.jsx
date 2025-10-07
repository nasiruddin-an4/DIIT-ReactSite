import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AlumniCarousel = () => {
  const navigate = useNavigate();

  const alumniData = [
    {
      id: 1,
      name: 'Lakkhan Chandra Robidas',
      role: 'Assistant Professor and Head, BBA Program',
      company: 'Daffodil Institute of IT (DIIT)',
      batch: '2nd',
      department: 'BBA',
      image: 'https://www.diit.edu.bd/media/alumni/lokkhon.png',
    },
    {
      id: 2,
      name: 'Shakila Jahan Nipa',
      role: 'Assistant Professor',
      company: 'Daffodil Institute of IT',
      batch: '4th',
      department: 'BBA',
      image: 'https://www.diit.edu.bd/media/alumni/nipaa.png',
    },
    {
      id: 3,
      name: 'Fahmida Akter',
      role: 'Senior Lecturer',
      company: 'Daffodil Institute of IT',
      batch: '7th',
      department: 'BBA',
      image: 'https://www.diit.edu.bd/media/alumni/133-_Fahmida_Akter.jpg',
    },
    {
      id: 4,
      name: 'Md Arman Hossain',
      role: 'Internal Auditor',
      company: 'GMS Composite Knitting Ind. Ltd',
      batch: '11th',
      department: 'BBA',
      image: 'https://www.diit.edu.bd/media/alumni/arman.png',
    },
    {
      id: 5,
      name: 'Iva Rani Das',
      role: 'Assistant Director',
      company: 'Daffodil Institute of IT',
      batch: '6th',
      department: 'BBA',
      image: 'https://www.diit.edu.bd/media/alumni/iva.png',
    },
    {
      id: 6,
      name: 'Mark Dip Gomes',
      role: 'Executive Director',
      company: 'RUNEX Delivery Service',
      batch: '16th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
    {
      id: 5,
      name: 'Iva Rani Das',
      role: 'Assistant Director',
      company: 'Daffodil Institute of IT',
      batch: '6th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/women/18.jpg',
      linkedin: 'https://linkedin.com/in/ivarani',
    },
    {
      id: 6,
      name: 'Mark Dip Gomes',
      role: 'Executive Director',
      company: 'RUNEX Delivery Service',
      batch: '16th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/20.jpg',
      linkedin: 'https://linkedin.com/in/markdipgomes',
    },
    {
      id: 7,
      name: 'Mohammad Imtiaz Rana Emon',
      role: 'Senior Team Leader',
      company: 'Apex Properties Ltd.',
      batch: '9th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      linkedin: 'https://linkedin.com/in/mohammadimtiazranaemon',
    },
    {
      id: 8,
      name: 'Md. Sultan Mhmud',
      role: 'Senior Executive',
      company: 'Unknown',
      batch: '11th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/24.jpg',
      linkedin: 'https://linkedin.com/in/mdsultanmhmud',
    },
    {
      id: 9,
      name: 'Rajib Kumar Sikder',
      role: 'Head of Marketing',
      company: 'Innovaous Limited',
      batch: '9th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/26.jpg',
      linkedin: 'https://linkedin.com/in/rajibkumarsikder',
    },
    {
      id: 10,
      name: 'Mohammad Mazharul Islam Parvez',
      role: 'First Officer',
      company: 'Jamuna Bank Limited',
      batch: '10th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/28.jpg',
      linkedin: 'https://linkedin.com/in/mohammadmazharulislamparvez',
    },
    {
      id: 11,
      name: 'Md. Walid-Al-Nasar',
      role: 'Junior Officer (ICCD)',
      company: 'One Bank Limited',
      batch: '11th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/30.jpg',
      linkedin: 'https://linkedin.com/in/mdwalidalnasar',
    },
    {
      id: 12,
      name: 'Majharul Islam',
      role: 'Senior Executive',
      company: 'SNOWTEX GROUP',
      batch: '13th',
      department: 'BBA',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: 'https://linkedin.com/in/majharulislam',
    },
  ];

  return (
    <section className="pt-20 bg-gray-50 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 relative z-10 w-full">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              Our Distinguished Alumni
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
              Meet the exceptional individuals shaping the future of business and innovation.
            </p>
          </div>
          <div>
            <Link to="/alumni" className="btn1">
              <span className="flex items-center gap-2">
                Explore All Alumni <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            renderBullet: (index, className) => {
              // limit to 4 pagination dots max
              if (index < 4) {
                return `<span class="${className}"></span>`;
              }
              return '';
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {alumniData?.map(alumnus => (
            <SwiperSlide key={alumnus?.id}>
              <div
                onClick={() => navigate('/alumnus')}
                className="cursor-pointer group h-[420px] px-5 mb-5"
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-b from-white to-slate-50 
        transition-all duration-500 group-hover:shadow-md group-hover:border-blue-500/40 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={alumnus?.image}
                      alt={alumnus?.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-grow justify-between text-center px-4 pt-3 pb-4">
                    <div>
                      <h2
                        className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-all duration-300 
              tracking-tight group-hover:tracking-wide"
                      >
                        {alumnus?.name}
                      </h2>
                      <p className="text-slate-500 font-medium">{alumnus?.role}</p>
                      <p className="text-slate-400 text-sm">{alumnus?.company}</p>
                    </div>

                    {/* Always Bottom */}
                    <span
                      className="inline-block mt-2 px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border 
            border-blue-400/30 rounded-full text-md text-blue-600 font-medium tracking-wide backdrop-blur-sm"
                    >
                      🎓<span className="ml-2">{alumnus?.department}</span> {alumnus?.batch} Batch
                    </span>
                  </div>

                  {/* Glow Animation */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/30 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] transition-all duration-700 pointer-events-none"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-52 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600/80 text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all duration-300 z-50">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-52 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600/80 text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all duration-300 z-20">
            <ChevronRight className="w-5 h-5" />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default AlumniCarousel;
