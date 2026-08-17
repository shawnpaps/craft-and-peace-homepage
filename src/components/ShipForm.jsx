import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ShipForm() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const shipList = JSON.parse(localStorage.getItem("shipList")) ?? [];
    if (inputValue.trim()) {
      const date = new Date().toISOString().slice(0, 10);
      const newShip = { date, description: inputValue };
      shipList.push(newShip);
      localStorage.setItem("shipList", JSON.stringify(shipList));
      setOpen(false);
      setInputValue("");
      console.log("shipped from shipform.jsx");
    }
  };

  return (
    <div className="flex items-center flex-col justify-center text-paper">
      {open ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            type="text"
            placeholder="What did you ship today?"
            className="w-full p-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-paper/10 text-paper w-64 h-12 cursor-pointer rounded-full transition-all ease-linear"
            >
              Submit
            </button>
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="outline-paper outline-1 text-paper w-64 cursor-pointer rounded-full transition-all ease-linear"
            >
              Close
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="text-paper text-lg hover:bg-paper/10 p-4 rounded-full transition-all ease-linear"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
