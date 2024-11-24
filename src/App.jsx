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
