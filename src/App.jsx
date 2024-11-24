import React, { useState, useEffect } from "react";
import {db} from "./Data/db";

const AdventCalendar = () => {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDays = async () => {
    const days = await db.adventCalendar.toArray();     
    if (days.length === 0) {
      for (let i = 1; i <= 24; i++) {
        await db.adventCalendar.add({ day: i, isOpen: false });
      }
      setDays(await db.adventCalendar.toArray());
    } else {
      setDays(days);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchDays();
  }, []);

  const handleDayClick = async (day) => {
    await db.adventCalendar.update(day.id, { isOpen: true });
    setDays(await db.adventCalendar.toArray());
  };

  if (loading) {
    return <div className="text-center mt-10">Caricamento...</div>;
  }  
  

  return (
    <div className="max-w-screen-lg mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Calendario dell'Avvento</h1>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {days.map((day) => (
          <button
            key={day.id}
            className="w-full h-full flex justify-center items-center"
            onClick={() => handleDayClick(day)}
          >
            <div
              className={
                day.isOpen
                  ? `bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16`
                  : "text-2xl font-bold"
              }
            >
              {day.day}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdventCalendar;
