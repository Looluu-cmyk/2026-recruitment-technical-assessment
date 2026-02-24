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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {pictures.map((picture) => {
            return (
              <div className="relative">
                <div className="absolute flex items-center h-full w-full justify-end px-2 sm:items-start sm:py-4">
                  <div className="bg-white py-2 px-4 rounded-2xl">
                    {<span className="sm:hidden">9 / 10</span>}
                    {<span className="hidden sm:inline">9 rooms available</span>}
                  </div>
                </div>
                <div className="absolute flex items-center h-full w-full text-white px-2 text-lg sm:items-end sm:py-4">
                  <div className="sm:bg-orange-400 sm:px-4 sm:w-full sm:rounded-xl sm:py-2 lg:text-sm">
                    {picture[1]}
                  </div>
                </div>
                <img
                  className="aspect-4/1 rounded-xl object-cover sm:aspect-5/3 lg:aspect-5/6"
                  src={picture[0]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
