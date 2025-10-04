import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedYear] = useState(new Date()?.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const academicEvents = [
    {
      id: 1,
      title: "Spring Semester Admission Deadline",
      date: "2025-01-15",
      type: "admission",
      description: "Last date for spring semester admission applications",
    },
    {
      id: 2,
      title: "Spring Semester Classes Begin",
      date: "2025-02-01",
      type: "academic",
      description: "First day of spring semester classes",
    },
    {
      id: 3,
      title: "Mid-term Examinations",
      date: "2025-03-15",
      type: "exam",
      description: "Mid-term examinations for all programs",
    },
    {
      id: 4,
      title: "Summer Semester Registration",
      date: "2025-04-01",
      type: "registration",
      description: "Registration opens for summer semester",
    },
    {
      id: 5,
      title: "Spring Semester Final Exams",
      date: "2025-05-20",
      type: "exam",
      description: "Final examinations for spring semester",
    },
    {
      id: 6,
      title: "Summer Semester Classes Begin",
      date: "2025-06-15",
      type: "academic",
      description: "First day of summer semester classes",
    },
    {
      id: 7,
      title: "Fall Semester Admission Opens",
      date: "2025-07-01",
      type: "admission",
      description: "Fall semester admission applications open",
    },
    {
      id: 8,
      title: "Summer Semester Final Exams",
      date: "2025-08-25",
      type: "exam",
      description: "Final examinations for summer semester",
    },
    {
      id: 9,
      title: "Fall Semester Classes Begin",
      date: "2025-09-01",
      type: "academic",
      description: "First day of fall semester classes",
    },
    {
      id: 10,
      title: "Fall Semester Mid-terms",
      date: "2025-10-15",
      type: "exam",
      description: "Mid-term examinations for fall semester",
    },
    {
      id: 11,
      title: "Spring 2026 Admission Opens",
      date: "2025-11-01",
      type: "admission",
      description: "Spring 2026 semester admission opens",
    },
    {
      id: 12,
      title: "Fall Semester Final Exams",
      date: "2025-12-20",
      type: "exam",
      description: "Final examinations for fall semester",
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case "admission":
        return "bg-accent text-white";
      case "academic":
        return "bg-primary text-white";
      case "exam":
        return "bg-warning text-white";
      case "registration":
        return "bg-success text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case "admission":
        return "UserPlus";
      case "academic":
        return "BookOpen";
      case "exam":
        return "FileText";
      case "registration":
        return "Calendar";
      default:
        return "Calendar";
    }
  };

  const getEventsForMonth = (month) => {
    return academicEvents?.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate?.getMonth() === month &&
        eventDate?.getFullYear() === selectedYear
      );
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const isEventUpcoming = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate > today;
  };

  const getDaysUntilEvent = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-slate-200 p-8 mb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icon name="Calendar" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-2xl text-primary">
              Academic Calendar {selectedYear}
            </h2>
            <p className="text-text-secondary">Important dates and deadlines</p>
          </div>
        </div>
      </div>
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11)
          }
          iconName="ChevronLeft"
          iconPosition="left"
          iconSize={16}
        >
          Previous
        </Button>

        <h3 className="font-headline font-bold text-xl text-primary">
          {months?.[selectedMonth]} {selectedYear}
        </h3>

        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0)
          }
          iconName="ChevronRight"
          iconPosition="right"
          iconSize={16}
        >
          Next
        </Button>
      </div>
      {/* Events for Selected Month */}
      <div className="mb-8">
        {getEventsForMonth(selectedMonth)?.length > 0 ? (
          <div className="space-y-4">
            {getEventsForMonth(selectedMonth)?.map((event) => (
              <div
                key={event?.id}
                className={`p-4 rounded-lg border-l-4 ${
                  isEventUpcoming(event?.date)
                    ? "bg-blue-50 border-l-primary"
                    : "bg-slate-50 border-l-slate-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${getEventTypeColor(
                        event?.type
                      )}`}
                    >
                      <Icon name={getEventTypeIcon(event?.type)} size={16} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-primary mb-1">
                        {event?.title}
                      </h4>
                      <p className="text-sm text-text-secondary mb-2">
                        {event?.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-slate-600">
                          <Icon name="Calendar" size={14} />
                          <span>{formatDate(event?.date)}</span>
                        </div>
                        {isEventUpcoming(event?.date) && (
                          <div className="flex items-center gap-1 text-accent">
                            <Icon name="Clock" size={14} />
                            <span>
                              {getDaysUntilEvent(event?.date) === 0
                                ? "Today"
                                : getDaysUntilEvent(event?.date) === 1
                                ? "Tomorrow"
                                : `${getDaysUntilEvent(event?.date)} days left`}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {isEventUpcoming(event?.date) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Bell"
                      iconPosition="left"
                      iconSize={14}
                      className="text-accent hover:bg-accent/10"
                    >
                      Remind Me
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Icon
                name="Calendar"
                size={24}
                color="var(--color-text-secondary)"
              />
            </div>
            <h3 className="font-medium text-slate-800 mb-2">
              No Events This Month
            </h3>
            <p className="text-sm text-text-secondary">
              Check other months for upcoming events and deadlines
            </p>
          </div>
        )}
      </div>
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
        <Button
          variant="outline"
          size="sm"
          iconName="Download"
          iconPosition="left"
          iconSize={14}
          className="hover:bg-primary hover:text-white"
        >
          Download Calendar
        </Button>

        <Button
          variant="outline"
          size="sm"
          iconName="Bell"
          iconPosition="left"
          iconSize={14}
          className="hover:bg-accent hover:text-white"
        >
          Set Reminders
        </Button>

        <Button
          variant="outline"
          size="sm"
          iconName="UserPlus"
          iconPosition="left"
          iconSize={14}
          className="hover:bg-success hover:text-white"
        >
          Apply Now
        </Button>

        <Button
          variant="outline"
          size="sm"
          iconName="Phone"
          iconPosition="left"
          iconSize={14}
          className="hover:bg-warning hover:text-white"
        >
          Contact Admissions
        </Button>
      </div>
      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <h4 className="font-medium text-sm text-slate-800 mb-3">Event Types</h4>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="text-sm text-text-secondary">Admission</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-text-secondary">Academic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span className="text-sm text-text-secondary">Examinations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-sm text-text-secondary">Registration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
