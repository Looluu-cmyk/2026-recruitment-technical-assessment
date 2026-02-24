import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);

  const pictures = [
    ["/agsm.webp", "AGSM"],
    ["/ainsworth.webp", "Ainsworth Building"],
    ["/anitab.webp", "Anita B Lawrence Centre"],
    ["/biologicalScience.webp", "Biological Sciences"],
    ["/biologicalScienceWest.webp", "Biological Sciences (West)"],
    ["/blockhouse.webp", "Blockhouse"],
    ["/businessSchool.webp", "Business School"],
    ["/civilBuilding.webp", "Civil Engineering Building"],
    ["/colombo.webp", "Colombo Building"],
    ["/cseBuilding.webp", "Computer Science & Eng (K17)"],
  ];

  const icons = [
    "/search_orange.svg",
    "/grid_view.svg",
    "/map.svg",
    "/dark_mode.svg",
  ];

  const handleClick = () => setOpen(!open);

  return (
    <>
      <div className="px-3 font-semibold mt-2">
        <div className="flex">
          <div className="flex items-center text-orange-400 text-2xl hover:cursor-pointer">
            <img
              src={open ? "/freeRoomsLogo.png" : "/freeroomsDoorClosed.png"}
              width={40}
              onClick={handleClick}
            />
            <div className="hidden sm:inline">Freerooms</div>
          </div>
          <div className="flex gap-1 grow justify-end">
            {icons.map((icon) => {
              return (
                <div
                  className={
                    "border-orange-400 border rounded-sm aspect-square place-items-center place-content-center hover:cursor-pointer" +
                    (icon === "/grid_view.svg" ? " bg-orange-400" : "")
                  }
                >
                  <img src={icon} />
                </div>
              );
            })}
          </div>
        </div>
        <hr className="w-screen border-gray-300 my-2" />
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-2 mb-2">
          <div className="w-full sm:order-2 border-gray-400 border max-w-[800px] px-2 py-1 rounded-md flex gap-1">
            <img src="/search_regular.svg" />
            <input
              type="text"
              placeholder="Search for a building..."
              className="w-full"
            />
          </div>
          <button className="order-1 text-orange-400 border-orange-400 border-2 px-2 rounded-md min-w-30 flex items-center justify-center gap-2 hover:cursor-pointer">
            <img src="/filter_alt.svg" />
            Filters
          </button>
          <button className="order-3 text-orange-400 border-orange-400 border-2 px-2 rounded-md min-w-30 flex items-center justify-center gap-2 hover:cursor-pointer">
            <img src="/filter_list.svg" />
            Sort
          </button>
        </div>
        <div className="border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {pictures.map((picture) => {
            return <div>picture</div>;
          })}
        </div>
      </div>

      {/*
      <ul className="grid grid-cols-5 gap-4 px-2">
        {pictures.map((picture) => {
          return (
            <div className="relative">
              <div className="absolute right-2 top-2 bg-white py-2 px-3 font-semibold rounded-2xl">10 rooms available</div>
              <img className="aspect-7/8 rounded-xl" src={picture[0]} />
              <div className="relative p-3">
                <div className="absolute bg-orange-400 p-3 justify-self-center bottom-0 font-semibold tracking-wide text-white w-full m-3">{picture[1]}</div>
              </div>
            </div>
          );
        })}
      </ul> */}
    </>
  );
}

export default App;
