import { useState, useEffect } from "react";

export default function ShipList() {
  const [shipList, setShipList] = useState();

  useEffect(() => {
    const ship = localStorage.getItem("ship");
    if (ship) {
      setShipList(JSON.parse(ship));
    }
  }, []);
  return (
    <div className="absolute bottom-0 left-0">
      {shipList ? (
        <div className="flex flex-col items-start justify-center bg-paper-dim/20 p-4 rounded-tr-2xl text-paper w-full">
          <p className="text-xs mr-auto font-semibold mb-2">
            most recent ship: {shipList.date}
          </p>
          <p className="text-lg font-bold text-left max-w-xl">
            {shipList.description}
          </p>
        </div>
      ) : (
        <p>Nothing shipped recently!</p>
      )}
    </div>
  );
}
