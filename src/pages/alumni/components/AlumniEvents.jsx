import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const AlumniEvents = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const eventCategories = [
    { id: "all", label: "All Events", icon: "Calendar" },
    { id: "networking", label: "Networking", icon: "Users" },
    { id: "workshop", label: "Workshops", icon: "BookOpen" },
    { id: "reunion", label: "Reunions", icon: "Heart" },
    { id: "career", label: "Career Fair", icon: "Briefcase" },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      category: "reunion",
      date: "2024-12-15",
      time: "6:00 PM - 10:00 PM",
      location: "DIIT Main Campus",
      type: "In-Person",
      attendees: 250,
      maxAttendees: 300,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop",
      description:
        "Join us for our biggest alumni gathering of the year! Reconnect with classmates, meet faculty, and celebrate our collective achievements.",
      highlights: [
        "Networking dinner with 250+ alumni",
        "Achievement recognition ceremony",
        "Campus tour and facility showcase",
        "Live entertainment and cultural program",
      ],
      speakers: [
        {
          name: "Dr. Mohammad Rahman",
          title: "Vice Chancellor, DIIT",
          avatar:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
        },
      ],
      status: "upcoming",
      price: "Free",
    },
    {
      id: 2,
      title: "Tech Talk: AI in Bangladesh",
      category: "workshop",
      date: "2024-11-20",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual Event",
      type: "Online",
      attendees: 180,
      maxAttendees: 200,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      description:
        "Explore the current state and future prospects of Artificial Intelligence in Bangladesh's tech ecosystem.",
      highlights: [
        "Industry insights from AI experts",
        "Q&A session with speakers",
        "Networking breakout rooms",
        "Resource sharing and collaboration",
      ],
      speakers: [
        {
          name: "Md. Karim Rahman",
          title: "CTO, TechnoNext Ltd",
          avatar:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
        },
        {
          name: "Dr. Fatema Sultana",
          title: "AI Research Lead, Samsung R&D",
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
        },
      ],
      status: "upcoming",
      price: "Free",
    },
    {
      id: 3,
      title: "Career Fair 2024",
      category: "career",
      date: "2024-11-30",
      time: "10:00 AM - 4:00 PM",
      location: "DIIT Auditorium",
      type: "In-Person",
      attendees: 150,
      maxAttendees: 500,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      description:
        "Connect current students with alumni working in top companies. Share job opportunities and career guidance.",
      highlights: [
        "50+ companies participating",
        "On-spot interview opportunities",
        "Resume review sessions",
        "Career counseling booths",
      ],
      speakers: [
        {
          name: "Rashidul Hasan",
          title: "Founder & CEO, EduTech Solutions",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
      ],
      status: "upcoming",
      price: "Free",
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      category: "networking",
      date: "2024-10-25",
      time: "6:30 PM - 9:30 PM",
      location: "DIIT Innovation Hub",
      type: "In-Person",
      attendees: 85,
      maxAttendees: 100,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      description:
        "Alumni entrepreneurs pitch their startups to potential investors and fellow alumni for feedback and funding opportunities.",
      highlights: [
        "10 startup pitches",
        "Investor panel discussion",
        "Networking with entrepreneurs",
        "Mentorship matching session",
      ],
      speakers: [
        {
          name: "Nusrat Jahan",
          title: "Senior Product Manager, Pathao",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        },
      ],
      status: "completed",
      price: "৳500",
    },
    {
      id: 5,
      title: "Women in Tech Meetup",
      category: "networking",
      date: "2024-12-08",
      time: "2:00 PM - 5:00 PM",
      location: "DIIT Conference Hall",
      type: "In-Person",
      attendees: 45,
      maxAttendees: 80,
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
      description:
        "Empowering women alumni in technology through networking, mentorship, and professional development opportunities.",
      highlights: [
        "Panel discussion on career growth",
        "Mentorship program launch",
        "Networking lunch",
        "Success story sharing",
      ],
      speakers: [
        {
          name: "Fatema Sultana",
          title: "Senior Product Manager, Robi",
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
        },
      ],
      status: "upcoming",
      price: "Free",
    },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events?.filter((event) => event?.category === activeFilter);

  const upcomingEvents = events
    ?.filter((event) => event?.status === "upcoming")
    ?.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-innovation/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Calendar" size={18} color="var(--color-innovation)" />
            <span className="font-cta font-medium text-innovation text-sm">
              Alumni Events
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary mb-4">
            Stay Connected & Engaged
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Join our vibrant community through networking events, workshops,
            reunions, and professional development opportunities.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Calendar" size={20} color="var(--color-primary)" />
            </div>
            <div className="font-headline font-bold text-2xl text-primary mb-1">
              24
            </div>
            <div className="font-body text-sm text-text-secondary">
              Events This Year
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={20} color="var(--color-success)" />
            </div>
            <div className="font-headline font-bold text-2xl text-success mb-1">
              1,200+
            </div>
            <div className="font-body text-sm text-text-secondary">
              Total Attendees
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="MapPin" size={20} color="var(--color-accent)" />
            </div>
            <div className="font-headline font-bold text-2xl text-accent mb-1">
              8
            </div>
            <div className="font-body text-sm text-text-secondary">
              Cities Covered
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-innovation/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Star" size={20} color="var(--color-innovation)" />
            </div>
            <div className="font-headline font-bold text-2xl text-innovation mb-1">
              4.9
            </div>
            <div className="font-body text-sm text-text-secondary">
              Average Rating
            </div>
          </div>
        </div>

        {/* Event Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveFilter(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-cta font-medium text-sm transition-all duration-200 ${
                activeFilter === category?.id
                  ? "bg-primary text-white shadow-brand"
                  : "bg-white text-text-secondary hover:text-primary hover:bg-primary/5 shadow-brand"
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredEvents?.map((event) => (
            <div
              key={event?.id}
              className="bg-white rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event?.image}
                  alt={event?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-cta font-medium ${
                      event?.status === "upcoming"
                        ? "bg-success text-white"
                        : "bg-text-secondary text-white"
                    }`}
                  >
                    {event?.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-cta font-medium text-text-primary">
                    {event?.type}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-headline font-bold text-xl text-text-primary mb-2">
                      {event?.title}
                    </h3>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      {event?.description}
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Calendar"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <div>
                      <div className="font-cta font-medium text-sm text-text-primary">
                        {new Date(event.date)?.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <div className="font-body text-xs text-text-secondary">
                        {event?.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="MapPin"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <div>
                      <div className="font-cta font-medium text-sm text-text-primary">
                        {event?.location}
                      </div>
                      <div className="font-body text-xs text-text-secondary">
                        {event?.type}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attendees & Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Users"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <span className="font-body text-sm text-text-secondary">
                      {event?.attendees}/{event?.maxAttendees} attending
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Tag"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <span className="font-cta font-medium text-sm text-primary">
                      {event?.price}
                    </span>
                  </div>
                </div>

                {/* Speakers */}
                {event?.speakers?.length > 0 && (
                  <div className="mb-4">
                    <div className="font-cta font-medium text-sm text-text-secondary mb-2">
                      Speakers
                    </div>
                    <div className="flex items-center space-x-3">
                      {event?.speakers?.map((speaker, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Image
                            src={speaker?.avatar}
                            alt={speaker?.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-cta font-medium text-xs text-text-primary">
                              {speaker?.name}
                            </div>
                            <div className="font-body text-xs text-text-secondary">
                              {speaker?.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  {event?.status === "upcoming" ? (
                    <>
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Calendar"
                        iconPosition="left"
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        Register Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Share"
                        className="w-10 h-10 p-0"
                      />
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      className="flex-1"
                    >
                      View Highlights
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="bg-white rounded-2xl p-8 shadow-brand">
          <div className="flex items-center space-x-3 mb-6">
            <Icon name="Clock" size={24} color="var(--color-primary)" />
            <h3 className="font-headline font-bold text-xl text-text-primary">
              Don't Miss Out
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            {upcomingEvents?.map((event) => (
              <div
                key={event?.id}
                className="flex items-center space-x-4 p-4 bg-surface rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon
                    name="Calendar"
                    size={20}
                    color="var(--color-primary)"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-cta font-semibold text-text-primary text-sm mb-1">
                    {event?.title}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary">
                    <span>
                      {new Date(event.date)?.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span>•</span>
                    <span>{event?.location}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  className="w-8 h-8 p-0"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniEvents;
