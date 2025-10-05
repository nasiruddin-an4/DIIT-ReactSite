import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import homePageData from '../../../Data/HomePage.json';

const ProgramExplorer = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const loadedPrograms = homePageData.programsData || homePageData;
    setPrograms(loadedPrograms);
  }, []);

  const filteredPrograms =
    activeCategory === 'all'
      ? programs
      : programs.filter(program => program?.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16">
          <div>
            <h2 className="font-headline font-semibold text-4xl lg:text-5xl text-primary mb-3">
              Discover Your Perfect Program
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              Explore programs across multiple faculties and disciplines.
            </p>
          </div>

          <Link to="/programs" className="btn1">
            <span>
              View All Programs
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, index) => (
              <div
                key={program?.id}
                className="p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 "
              >
                {/* Image Section */}
                <div className="h-52 overflow-hidden">
                  <Image
                    src={program?.image}
                    alt={program?.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="mt-6 px-4 py-2">
                  <h3 className="font-headline font-bold text-2xl text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                    {program?.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-medium mb-4">{program?.degree}</p>

                  <p className="text-sm text-text-secondary font-medium mb-4">
                    {program?.description?.length > 80
                      ? program.description.slice(0, 80) + '...'
                      : program.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <Link
                      to={`/programs/${program?.id}`}
                      className="group flex items-center gap-2 text-primary font-medium text-md hover:text-accent transition-all duration-300"
                    >
                      Learn More
                      <Icon
                        name="ArrowUpRight"
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-text-secondary col-span-3">Loading programs...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramExplorer;
