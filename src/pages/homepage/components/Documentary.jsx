import React, { useState } from "react";
import { X, Play } from "lucide-react";

const sampleData = {
  documentaries: [
    {
      title: "Ocean Conservation",
      description: "Exploring marine ecosystems",
      url: "https://www.youtube.com/embed/Vgpy8Aw3NlU",
    },
    {
      title: "Urban Innovation",
      description: "Smart cities of tomorrow",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Wildlife Documentary",
      description: "Journey through nature",
      url: "https://www.youtube.com/embed/nDq6TstdEi8",
    },
  ],
};

// Extract YouTube video ID from full embed or watch URL
const getYouTubeThumbnail = (url) => {
  const match = url.match(/(?:embed\/|v=)([^?&]+)/);
  const videoId = match ? match[1] : null;
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://via.placeholder.com/800x600?text=No+Thumbnail";
};

const Documentary = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-24 left-16 w-64 h-64 bg-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100">
            Documentary & Media
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
            Explore our documentaries and media coverage showcasing our global collaborations, innovation, and research.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sampleData.documentaries.map((video, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedVideo(video)}
              className="relative cursor-pointer rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Thumbnail (Auto from YouTube) */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={getYouTubeThumbnail(video.url)}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                {/* Always-visible Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 fill-white text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Details */}
              <div className="p-6 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700">
                <h3 className="font-bold text-xl mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"
              onClick={() => setSelectedVideo(null)}
            >
              <span>Close</span>
              <div className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm">
                <X className="w-5 h-5" />
              </div>
            </button>

            {/* Embedded Video */}
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <div className="w-full aspect-video">
                <iframe
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-t border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-400">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Documentary;
