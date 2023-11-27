import random from "random";

const Layout = () => {

    const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step,
    );

let arrDataPlayers = arrayRange(1, 24, 1)

const data = arrDataPlayers.map((el)=>{
  return (   
   { id: el,
    numero: el}
  )
});

const randomBgs = ["teal-800", "orange-800", "slate-900", "purple-700", "red-800", "purple-900", "indigo-950"]

  return (
    <main className="flex flex-wrap w-full h-screen">
        {data.map(el => {
            return (
                <div key={el.id} className={`bg-${random.choice(randomBgs)} border border-dashed p-4 rounded-b-xl w-1/6 flex items-center justify-center text-5xl font-bold`}>{el.numero}</div>
            )
        })}
    </main>
  )
}

export default Layout