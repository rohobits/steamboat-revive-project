// src/components/EventsSection.tsx
import React from "react";
import { Calendar, Clock } from "lucide-react";

// Placeholder events — replace with real data when your calendar is ready
const placeholderEvents = [
  {
    id: "1",
    title: "Summer Kickoff Ride",
    date: "Tue, Jun 10, 2025",
    time: "6:00 PM",
    link: "#",
  },
  {
    id: "2",
    title: "Mountain Bike Maintenance Workshop",
    date: "Sat, Jun 14, 2025",
    time: "10:00 AM",
    link: "#",
  },
  {
    id: "3",
    title: "Community Trail Cleanup",
    date: "Sun, Jun 22, 2025",
    time: "8:00 AM",
    link: "#",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {placeholderEvents.map((ev) => (
            <a
              key={ev.id}
              href={ev.link}
              className="block border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center text-steamboat-blue mb-2">
                <Calendar className="mr-2" />
                <span>{ev.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-steamboat-darkBlue">
                {ev.title}
              </h3>
              {ev.time && (
                <div className="flex items-center text-gray-500 mt-1">
                  <Clock className="mr-2" size={16} />
                  <span>{ev.time}</span>
                </div>
              <div className="flex justify-center mt-8">
                <a
                  href="/steamboat-revive-project/events"
                  className="btn-secondary"
                  >
                View Full Calendar
                </a>
              </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
