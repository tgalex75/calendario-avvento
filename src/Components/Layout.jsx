import deco from "../assets/img/deco.png";
import placeholder from "../assets/img/placeholder.jpg";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  let arrDataDays = arrayRange(1, 24, 1);

  const data = arrDataDays.map((el) => {
    return { numero: el };
  });

  //const myDate = new Date()
  const myDate = 2;
  const isToday = myDate == 2

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
      {data.map((el) => {
        return (
          <div
            key={el.numero}
            className={`bg-black/95 border border-t-0 border-dashed rounded-br-3xl w-1/6 flex flex-col items-center text-yellow-500 justify-center text-7xl font-semibold ${
              (myDate >= el.numero) && "border-0 border-none"
            }`}
            onClick={() => console.log(myDate)}
            style={(el.numero > myDate) ? { pointerEvents: "none", opacity: 0.4 }:{}}
          >
            {((el.numero > myDate) || isToday == el.numero) && !isOpen ? (
              <strong className="">{el.numero}</strong>
            ) : (
              !isOpen && (
                <div
                  className="h-full w-full z-50 flex flex-col items-center justify-end"
                  style={
                    !isOpen && {
                      backgroundImage: `url(${placeholder})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }
                  }
                >
                  <strong className="bg-black/75 h-1/4 w-full font-semibold text-sm flex items-center justify-center">
                    NOME
                  </strong>
                </div>
              )
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Layout;
