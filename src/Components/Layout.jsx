import deco from "../assets/img/deco.png";
import placeholder from "../assets/img/placeholder.jpg";
import { useState } from "react";

const Layout = () => {
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  let arrDataDays = arrayRange(1, 24, 1);

  // const data = arrDataDays.map((el) => {
  //   return { numero: el, isOpen: false };
  // });

  const initialData = arrDataDays.map((el) => {
    return { numero: el, isOpen: false };
  });

  const [dati, setDati] = useState(initialData);

  const strappaCasella = (id) => {
    setDati(
      dati.map((item) => {
        if (item.numero == id.numero) {
          return { ...item, isOpen: item.isOpen = true };
        }
        return item
      })
    );
  };

  const newDate = new Date();
  //const myDate = newDate.getDate();
  const myDate = 3;

  console.log(dati);

  return (
    <main
      className="flex flex-wrap w-screen h-screen pt-6"
      style={{
        backgroundImage: `url(${deco})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {dati.map((el) => {
        return (
          <div
            key={el.numero}
            className={`relative bg-black/95 w-1/6 flex flex-col items-center cursor-pointer text-yellow-500 justify-center font-semibold
            ${myDate > el.numero && "border-0 border-none pointer-events-none"}
            ${myDate == el.numero && "border-4 border-red-500"}
            ${
              myDate < el.numero &&
              "border border-t-0 border-dashed rounded-br-3xl pointer-events-none opacity-95"
            }
            `}
          >
            {(el.numero >= myDate) && (
              <strong
                className={`flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-center text-7xl z-50
                ${el.numero == myDate && ""}
                `}
                onClick={() => strappaCasella(el)}
              >
                {el.numero}
              </strong>
            )}
            {(el.numero >= myDate || el.isOpen) && <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-40"></div>}
            <div
              className="h-full w-full z-20 flex flex-col items-center justify-end"
              style={
                el.numero <= myDate
                  ? {
                      backgroundImage: `url(${placeholder})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  : { display: "none" }
              }
            >
              <strong className="bg-black/75 h-1/4 w-full font-semibold text-sm flex items-center justify-center">
                NOME
              </strong>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Layout;
