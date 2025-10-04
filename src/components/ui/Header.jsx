import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";
import navigationData from "../../Data/homePage.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState([]);
  const location = useLocation();
  const { navigationItems, moreItems } = navigationData;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileDropdown = (path) => {
    setOpenMobileDropdowns((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-header transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white  shadow-lg border-b border-slate-200/80"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20 px-6 lg:px-0">
            {/* Logo Section with Enhanced Animation */}
            <Link
              to="/homepage"
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <div className="relative">
                <div
                  className={`w-10 h-10 bg-hero-gradient rounded-md flex items-center justify-center shadow-brand transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl ${
                    isScrolled ? "scale-90" : "scale-100"
                  }`}
                >
                  <Icon
                    name="GraduationCap"
                    size={24}
                    color="white"
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-hero-gradient rounded-md opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation with Stagger Animation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group"
                  style={{
                    animation: isScrolled
                      ? `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                      : "none",
                  }}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md font-cta font-medium text-sm transition-all duration-300 relative overflow-hidden ${
                        isActivePath(item.path)
                          ? "text-primary bg-primary/10 shadow-sm"
                          : "text-text-secondary hover:text-ring"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                  ) : (
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-md font-cta font-medium text-md transition-all duration-300 text-gray-600 hover:text-primary relative overflow-hidden">
                      <span className="relative z-10">{item.name}</span>
                      {item.dropdown && (
                        <Icon
                          name="ChevronDown"
                          size={14}
                          className="ml-1 transition-transform duration-300 group-hover:rotate-180 relative z-10"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  )}

                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-md shadow-2xl border border-slate-200/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-xl">
                      <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-slate-200/80 transform rotate-45"></div>
                      <div className="py-2 relative">
                        {item.dropdown.map((subItem, subIndex) =>
                          subItem.subDropdown ? (
                            <div
                              key={subItem.name}
                              className="group/sub relative"
                              style={{
                                animation: `fadeInLeft 0.3s ease-out ${
                                  subIndex * 0.05
                                }s both`,
                              }}
                            >
                              <button className="w-full flex items-center justify-between px-4 py-2.5 text-md font-medium text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-slate-100 hover:to-transparent transition-all duration-200">
                                <span>{subItem.name}</span>
                                <Icon
                                  name="ChevronRight"
                                  size={14}
                                  className="transition-transform duration-200 group-hover/sub:translate-x-1"
                                />
                              </button>
                              <div className="absolute left-full top-0 ml-0.5 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                <div className="relative py-2 mt-0 ml-2 bg-white rounded-md shadow-2xl border border-slate-200/80 backdrop-blur-xl">
                                  {subItem.subDropdown.map(
                                    (program, programIndex) => (
                                      <Link
                                        key={program.path}
                                        to={program.path}
                                        onClick={closeMenu}
                                        className="block px-4 py-2.5 text-md font-medium text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-slate-100 hover:to-transparent hover:ml-1 transition-all duration-200"
                                        style={{
                                          animation: `fadeInLeft 0.3s ease-out ${
                                            programIndex * 0.05
                                          }s both`,
                                        }}
                                      >
                                        {program.name}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              target={subItem.external ? "_blank" : undefined}
                              rel={
                                subItem.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              onClick={closeMenu}
                              className={`flex items-center space-x-3 px-4 py-2.5 text-md font-medium transition-all duration-200 ${
                                isActivePath(subItem.path)
                                  ? "text-primary bg-primary/10"
                                  : "text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-slate-100 hover:to-transparent hover:ml-2 transition-all duration-200"
                              }`}
                              style={{
                                animation: `fadeInLeft 0.3s ease-out ${
                                  subIndex * 0.05
                                }s both`,
                              }}
                            >
                              <span>{subItem.name}</span>
                              {subItem.external && (
                                <Icon
                                  name="ExternalLink"
                                  size={12}
                                  className="ml-1.5 opacity-75"
                                />
                              )}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons with Pulse Effect */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="default"
                size="sm"
                iconName="UserPlus"
                iconPosition="left"
                iconSize={16}
                className="bg-ring hover:bg-accent/90 shadow-brand hover:shadow-brand-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </div>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-slate-50 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? "X" : "Menu"}
                size={24}
                className={`transition-all duration-300 ${
                  isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {/* Mobile Navigation with Slide Animation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out ${
              isMenuOpen
                ? "max-h-[calc(100vh-5rem)] opacity-100 visible overflow-y-auto"
                : "max-h-0 opacity-0 invisible overflow-hidden"
            }`}
          >
            <div className="px-6 py-4 bg-white/98 backdrop-blur-xl border-t border-slate-200/80">
              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {navigationItems?.map((item, index) => (
                  <div
                    key={item.name}
                    className="space-y-1"
                    style={{
                      animation: isMenuOpen
                        ? `slideInRight 0.4s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    <div className="flex items-center">
                      {item.path ? (
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className={`flex-1 flex items-center space-x-3 px-4 py-3 rounded-md font-cta font-medium text-sm transition-all duration-300 ${
                            isActivePath(item.path)
                              ? "text-primary bg-primary/10 shadow-sm scale-[1.02]"
                              : "text-text-secondary hover:text-primary hover:bg-slate-50 hover:translate-x-1"
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <div className="flex-1 flex items-center space-x-3 px-4 py-3 rounded-md font-cta font-medium text-sm text-text-secondary">
                          <span>{item.name}</span>
                        </div>
                      )}
                      {item.dropdown && (
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="p-3 text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
                          aria-label={`Toggle ${item.name} dropdown`}
                        >
                          <Icon
                            name="ChevronDown"
                            size={16}
                            className={`transform transition-transform duration-300 ${
                              openMobileDropdowns.includes(item.name)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.dropdown && (
                      <div
                        className={`space-y-1 pl-4 transition-all duration-300 ${
                          openMobileDropdowns.includes(item.name)
                            ? "max-h-screen opacity-100 visible"
                            : "max-h-0 opacity-0 invisible overflow-hidden"
                        }`}
                      >
                        {item.dropdown.map((subItem) =>
                          subItem.subDropdown ? (
                            <div key={subItem.name} className="space-y-1">
                              <div
                                className="flex items-center justify-between px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-all duration-200 cursor-pointer"
                                onClick={() =>
                                  toggleMobileDropdown(subItem.name)
                                }
                              >
                                <span>{subItem.name}</span>
                                <Icon
                                  name="ChevronDown"
                                  size={14}
                                  className={`transform transition-transform duration-300 ${
                                    openMobileDropdowns.includes(subItem.name)
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </div>
                              <div
                                className={`pl-4 space-y-1 transition-all duration-300 ${
                                  openMobileDropdowns.includes(subItem.name)
                                    ? "max-h-screen opacity-100 visible"
                                    : "max-h-0 opacity-0 invisible overflow-hidden"
                                }`}
                              >
                                {subItem.subDropdown.map((program) => (
                                  <Link
                                    key={program.path}
                                    to={program.path}
                                    onClick={closeMenu}
                                    className="block px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-slate-50 rounded-md transition-all duration-200 hover:translate-x-2"
                                  >
                                    {program.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              target={subItem.external ? "_blank" : undefined}
                              rel={
                                subItem.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              onClick={closeMenu}
                              className={`flex items-center space-x-3 px-4 py-2 rounded-md font-cta font-medium text-sm transition-all duration-300 ${
                                isActivePath(subItem.path)
                                  ? "text-primary bg-primary/10 shadow-sm scale-[1.02]"
                                  : "text-text-secondary/80 hover:text-primary hover:bg-slate-50 hover:translate-x-2"
                              }`}
                            >
                              <div className="w-1.5 h-1.5 rounded-md bg-current opacity-50"></div>
                              <span>{subItem.name}</span>
                              {subItem.external && (
                                <Icon
                                  name="ExternalLink"
                                  size={12}
                                  className="ml-auto opacity-75"
                                />
                              )}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div
                className="mt-6 pt-4 border-t border-slate-200 space-y-3"
                style={{
                  animation: isMenuOpen
                    ? "fadeInUp 0.5s ease-out 0.3s both"
                    : "none",
                }}
              >
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                  onClick={closeMenu}
                  className="hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Contact Us
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={16}
                  className="bg-accent hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-accent {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        .animate-pulse-accent {
          animation: pulse-accent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
