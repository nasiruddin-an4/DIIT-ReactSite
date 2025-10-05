import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import newsAndEventsData from '../../Data/newsAndEvents.json';

const NewsEventDetail = () => {
  const { type, id } = useParams();

  // Find the item from either news or events array
  const item =
    type === 'news'
      ? newsAndEventsData.news.find(item => item.id === id)
      : newsAndEventsData.events.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Item not found</h1>
      </div>
    );
  }

  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                type === 'event' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
              }`}
            >
              {type === 'event' ? 'Event' : 'News'}
            </span>
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar size={16} />
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-[400px] object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* If you have formatted content, you can use dangerouslySetInnerHTML */}
          <p>{item.content || item.description}</p>
        </div>

        {/* Event Details (only show for events) */}
        {type === 'event' && (
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Event Details</h2>
            <div className="space-y-3">
              {item.time && (
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-gray-600" />
                  <span>{item.time}</span>
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-gray-600" />
                  <span>{item.location}</span>
                </div>
              )}
              {item.attendees && (
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-gray-600" />
                  <span>{item.attendees}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsEventDetail;
