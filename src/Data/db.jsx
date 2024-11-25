import Dexie from "dexie";

export const db = new Dexie("AdventCalendarDB");
db.version(1).stores({
  adventCalendar: "++id, day, isOpen",
});

const date = new Date()
export const today = date.getUTCDate()