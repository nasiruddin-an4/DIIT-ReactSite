import React, { useState, useEffect } from "react";
import Icon from "../AppIcon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm 
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        } group`}
      aria-label="Back to top"
    >
      <Icon
        name="ChevronUp"
        size={24}
        className="transform transition-transform group-hover:-translate-y-1"
      />
      <div className="absolute inset-0 rounded-full bg-white opacity-25 group-hover:animate-ping"></div>
    </button>
  );
};

export default BackToTop;
