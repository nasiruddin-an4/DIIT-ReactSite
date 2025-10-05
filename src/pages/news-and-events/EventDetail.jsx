import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Share2 } from 'lucide-react';
import newsAndEventsData from '../../Data/newsAndEvents.json';
import Header from '../../components/ui/Header';

const EventDetail = () => {
  const { id } = useParams();
  const event = newsAndEventsData.events.find(item => item.id === id);

  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
                    {event.category}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {event.title}
                </h1>

                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {event.excerpt}
                  </p>
                </div>
              </div>
            </div>

            {/* Event Details Sidebar */}
            <div className="space-y-6">
              {/* Event Info Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p>{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p>{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Venue</p>
                      <p>{event.venue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>Registration</span>
                  </div>
                  <Share2 className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registered</span>
                    <span className="font-medium text-gray-900">
                      {event.stats.registered}/{event.stats.maxCapacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${(event.stats.registered / event.stats.maxCapacity) * 100}%`
                      }}
                    ></div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
