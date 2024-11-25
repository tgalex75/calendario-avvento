// Casella.js
import React from "react";

function Casella({ id, day, isOpen, handleOpen }) {
  const myDate = new Date();
  const today = myDate.getUTCDate();
  //const today2 = 4

  return (
    <div
      className={`border-dashed border-2 font-bold text-4xl odd:border-rose-900 even:border-teal-300 flex items-center justify-center text-gray-200 rounded-md ${
        isOpen
          ? "bg-teal-700 bg-center bg-cover text-gray-700"
          : "even:bg-rose-900 odd:bg-teal-950"
      } cursor-pointer ${today < day && "pointer-events-none opacity-30"}`}
      onClick={() => handleOpen(id)}
      style={{backgroundImage: `url(${require(`./assets/img/placeholder_${id}.jpg`)}}
    >
      <strong className={isOpen && "invisible"}>{day}</strong>
    </div>
  );
}

export default Casella;
