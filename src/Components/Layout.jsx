import random from "random";
import deco from "../assets/img/deco.png";
import placeholder from "../assets/img/placeholder.jpg";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
    
    let arrDataPlayers = arrayRange(1, 24, 1);
    
    const data = arrDataPlayers.map((el) => {
      return { id: el, numero: el };
    });
    
    const randomBgs = [
      "teal-800",
      "orange-800",
      "slate-900",
      "purple-700",
      "red-800",
      "purple-900",
      "indigo-950",
    ];
    
    //const myDate = new Date()
    const myDate = 3;
    const isToday = 3
    
    const isOpenable = (idNumero)=> {
      console.log(myDate >= idNumero ? "Apri!" : "Non ancora!")
    }

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
            key={el.id}
            className={`bg-transparent border-2 border-dashed rounded-br-3xl w-1/6 flex flex-col items-center text-yellow-500 justify-center text-7xl font-semibold ${(isToday === el.numero) && "border-0"}`}
            onClick={isOpenable && (() => isOpenable(el.numero))}
          >
            {myDate !== el.numero && !isOpen  ? (
              <strong className="">{el.numero}</strong>
            ) : (
              (isOpenable && !isOpen) && (
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
