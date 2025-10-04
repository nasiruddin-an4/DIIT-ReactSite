import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CampusLifeSection = () => {
  const [activeCategory, setActiveCategory] = useState("academic");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "academic", name: "Academic Life", icon: "BookOpen" },
    { id: "sports", name: "Sports & Recreation", icon: "Trophy" },
    { id: "cultural", name: "Cultural Events", icon: "Music" },
    { id: "facilities", name: "Campus Facilities", icon: "Building" },
    { id: "community", name: "Community", icon: "Users" },
  ];

  const galleryData = {
    academic: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Modern Classrooms",
        description:
          "State-of-the-art smart classrooms equipped with latest technology for interactive learning experiences.",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Computer Labs",
        description:
          "Advanced computer laboratories with latest hardware and software for hands-on programming and development.",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Library & Study Areas",
        description:
          "Comprehensive library with digital resources and quiet study spaces for focused learning.",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Research Labs",
        description:
          "Dedicated research facilities for innovation and development in emerging technologies.",
      },
    ],
    sports: [
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Basketball Court",
        description:
          "Professional basketball court for inter-college tournaments and recreational games.",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Football Field",
        description:
          "Full-size football field hosting annual sports festivals and daily practice sessions.",
      },
      {
        id: 7,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Indoor Gymnasium",
        description:
          "Multi-purpose gymnasium for various indoor sports and fitness activities.",
      },
      {
        id: 8,
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Swimming Pool",
        description:
          "Olympic-size swimming pool for competitive swimming and recreational activities.",
      },
    ],
    cultural: [
      {
        id: 9,
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Cultural Programs",
        description:
          "Annual cultural festivals celebrating Bengali heritage and diverse artistic expressions.",
      },
      {
        id: 10,
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Music Performances",
        description:
          "Regular music concerts and performances showcasing student talents and cultural diversity.",
      },
      {
        id: 11,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Drama & Theatre",
        description:
          "Student-led drama productions and theatre performances throughout the academic year.",
      },
      {
        id: 12,
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Art Exhibitions",
        description:
          "Student art exhibitions showcasing creativity and artistic achievements.",
      },
    ],
    facilities: [
      {
        id: 13,
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Student Cafeteria",
        description:
          "Modern cafeteria serving healthy and delicious meals with diverse menu options.",
      },
      {
        id: 14,
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Student Lounge",
        description:
          "Comfortable lounge areas for relaxation and informal student interactions.",
      },
      {
        id: 15,
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Medical Center",
        description:
          "On-campus medical facility providing healthcare services and emergency support.",
      },
      {
        id: 16,
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Transportation",
        description:
          "Convenient bus services connecting campus to major city locations.",
      },
    ],
    community: [
      {
        id: 17,
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Student Clubs",
        description:
          "Active student clubs and societies fostering leadership and community engagement.",
      },
      {
        id: 18,
        image:
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Community Service",
        description:
          "Regular community service projects connecting students with local communities.",
      },
      {
        id: 19,
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Alumni Meetups",
        description:
          "Regular alumni gatherings strengthening the DIIT community network.",
      },
      {
        id: 20,
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Mentorship Programs",
        description:
          "Peer mentorship programs supporting student academic and personal growth.",
      },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Camera" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold">Campus Life</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-accent font-bold text-primary mb-6">
            Life at DIIT
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the vibrant campus community where academic excellence
            meets personal growth, cultural celebration, and lifelong
            friendships.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category?.id
                  ? "bg-accent text-white shadow-brand-lg"
                  : "bg-white text-text-secondary hover:bg-slate-100 hover:text-primary"
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryData?.[activeCategory]?.map((item) => (
            <div
              key={item?.id}
              onClick={() => handleImageClick(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-2">{item?.title}</h3>
                    <p className="text-sm text-white/90 line-clamp-2">
                      {item?.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={20} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-brand-lg">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Navigation" size={32} color="white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Take a Virtual Campus Tour
              </h3>
              <p className="text-xl text-text-secondary mb-8">
                Explore our entire campus from the comfort of your home with our
                interactive 360° virtual tour experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-brand-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <Icon name="Play" size={20} />
                  <span>Start Virtual Tour</span>
                </button>
                <button className="px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Icon name="Calendar" size={20} />
                  <span>Schedule Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e?.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Icon name="X" size={20} />
            </button>
            <Image
              src={selectedImage?.image}
              alt={selectedImage?.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {selectedImage?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {selectedImage?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampusLifeSection;
