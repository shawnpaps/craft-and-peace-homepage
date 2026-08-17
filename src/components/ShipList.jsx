import { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";

export default function ShipList() {
  const [shipList, setShipList] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shipList = localStorage.getItem("shipList");
    if (shipList) {
      setShipList(JSON.parse(shipList));
    }
  }, []);
  return (
    <div className="absolute top-0 left-0">
      <button
        className="m-4 bg-paper p-4 rounded-full"
        onClick={() => setOpen(!open)}
      >
        <FaHamburger />
      </button>
      {open && (
        <div className="h-screen w-96 bg-paper p-5 rounded-tr-xl">
          <h1 className="text-xl font-bold">Things I've Shipped</h1>
          <div className="border border-black mb-4 mt-1"></div>
          {shipList ? (
            shipList.map((ship) => (
              <div className="bg-paper border-b mt-4" key={ship.date}>
                <p className="text-xs">{ship.date}</p>
                <p className="">{ship.description}</p>
              </div>
            ))
          ) : (
            <p>No ships yet</p>
          )}
        </div>
      )}
    </div>
  );
}
