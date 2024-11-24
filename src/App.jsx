import { useState, useEffect } from "react";
import { db } from "./Data/db";
//import { useLiveQuery } from "dexie-react-hooks";

const AdventCalendar = () => {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  const giorni = Array.from({ length: 24 }, (_, i) => ({
    day: i + 1,
    isOpen: false,
  }));

  const fetchDays = async () => {
    const result = await db.adventCalendar.toArray();
    if (result.length === 0) {
      db.adventCalendar.bulkAdd(giorni);
      setDays(result);
    }
    else {
      setDays(result)
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

  console.log(days)

  return (
    <div className="h-dvh w-screen mx-auto p-2 md:p-4 border border-pink-500">
      <h1 className="text-xl md:text-3xl font-bold mb-4">Calendario dell'Avvento 2024</h1>
      <div className="grid h-full grid-cols-4 md:grid-cols-6 gap-4">
        {days.map((day) => (
          <button
            key={day.id}screen
            className={`w-full h-full p-2 flex justify-center items-center hover:bg-teal-800`}
            onClick={() => handleDayClick(day)}
          >
            <div
              className="w-full flex items-center justify-center h-full font-bold text-2xl md:text-4xl"
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
