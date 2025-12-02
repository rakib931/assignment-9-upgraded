import React from "react";

const HowitWork = () => {
  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="carousel md:w-[1000px] w-[300px] ">
          <div id="item1" className="rounded-md carousel-item w-full min-h-[250px] items-center text-center mx-auto bg-linear-to-r from-purple-500 via-rose-500 to-pink-500 px-3 md:px-10">
            <img
              className="max-w-20 h-20 mr-3 "
              src="https://cdn-icons-png.flaticon.com/512/9321/9321637.png"
              alt=""
            />
            <h1 className="text-2xl font-bold">Explore Our survice</h1>
          </div>
          <div id="item2" className="rounded-md carousel-item w-full min-h-[250px] items-center text-center mx-auto bg-linear-to-r from-purple-400 via-rose-300 to-pink-600 px-3 md:px-10">
            <img
              className="max-w-20 h-20 mr-3"
              src="https://cdn-icons-png.flaticon.com/512/2550/2550277.png"
              alt=""
            />
            <h1 className="text-2xl font-bold">Buy and learn</h1>
          </div>
          <div id="item3" className="rounded-md carousel-item w-full min-h-[250px] items-center text-center mx-auto bg-linear-to-r from-rose-200 via-rose-500 to-pink-500 px-3 md:px-10">
            <img
              className="max-w-20 h-20 mr-3"
              src="https://cdn-icons-png.flaticon.com/512/6322/6322923.png"
              alt=""
            />
            <h1 className="text-2xl font-bold">
              Build their skills For Future
            </h1>
          </div>
          <div id="item4" className=" rounded-md carousel-item w-full min-h-[250px] items-center text-center mx-auto bg-linear-to-r from-purple-400 via-rose-200 to-sky-500 px-3 md:px-10">
            <img
              className="max-w-20 h-20 mr-3 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2iRiaqaz_pSwGELprgHXgI42JUBlS-s8LWQ&s"
              alt=""
            />
            <h1 className="text-2xl font-bold">They Review their Experience</h1>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowitWork;
