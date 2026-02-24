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

  const icons = [];

  const handleClick = () => setOpen(!open);

  return (
    <>
      <div className="px-3 font-semibold">
        <div className="flex justify-between">
          <div className="flex items-center text-orange-400 text-2xl">
            <img src={open ? '/freeRoomsLogo.png' : '/freeroomsDoorClosed.png'} width={40} onClick={handleClick}/>
            <div className="hidden sm:inline">Freerooms</div>
          </div>
          <div>Icons</div>
        </div>
        <hr className="w-screen border-gray-300 my-2"/>
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-2 mb-2">
          <input type="text" placeholder="Search for a building..." className="w-full sm:order-2 border-gray-400 border max-w-[800px] px-2 py-1 rounded-md"/>
          <div className="order-1 border">Button 1</div>
          <div className="order-3 border">Button 2</div>
        </div>
        <div className="border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {pictures.map((picture) => {return (<div>picture</div>)})}
        </div>
      </div>

      {/* <div className="w-full flex justify-between px-2">
        <div>Icons</div>
      </div>
      <hr className="my-3"/>
      <div className="w-full flex justify-between mb-2 px-2 gap-2">
        <button className="order-1 text-orange-400 font-semibold border-orange-400 border-2 p-2 rounded-md min-w-30 flex items-center justify-center gap-2">
          <img src='/filter_alt_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png'/>
          Filters
        </button>
        <button className="order-3 text-orange-400 font-semibold border-orange-400 border-2 p-2 rounded-md min-w-30 flex items-center justify-center gap-2">Sort</button>
      </div>
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
