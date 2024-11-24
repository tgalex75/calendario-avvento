import Dexie from "dexie";

export const db = new Dexie("AdventCalendarDB");
db.version(1).stores({
  adventCalendar: "++id, day, isOpen",
});