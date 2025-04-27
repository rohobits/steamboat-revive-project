// src/pages/EventsPage.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EventsPage() {
  // Placeholder: you’ll fetch & feed real events into tileContent later
  const [date, setDate] = useState(new Date());

  return (
    <div className="container-custom py-20">
      <h1 className="section-title text-center">Full Events Calendar</h1>
      <div className="mt-8 flex justify-center">
        <Calendar
          onChange={setDate}
          value={date}
          calendarType="US"
          showNeighboringMonth={false}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-4 text-center text-gray-500">
        Click on a day to see events (coming soon via Google Calendar API).
      </p>
    </div>
  );
}
