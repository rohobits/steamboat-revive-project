// src/pages/EventsPage.tsx
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EventsPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <>
      <NavBar />

      {/* add pt-20 so content starts below the 5rem-tall fixed navbar */}
      <main className="container-custom pt-20 py-20 bg-gray-50">
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
      </main>

      <Footer />
    </>
  );
}
