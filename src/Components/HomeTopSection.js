import React from "react";

export function HomeTopSection() {
  return (
    <div id="container" className="p-12 bg-gray-200">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-5xl font-black flex-wrap  cursor-pointer hover:text-indigo-500 transition duration-300">
            Public Reviews Website
          </span>
          <span className="font-mono mt-6 flex-wrap">
            Look up public reviews and ratings of businesses around you.
          </span>
          <span className="font-mono mt-6 flex-wrap">
            One stop site to view departmental stores, <br />
            cafes, restaurants, hospitals,
            <br /> repairshops the list goes on...
          </span>
        </div>
        <div
          id="images"
          className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-4"
        >
          <div className="w-52 rounded-full overflow-hidden">
            <img
              src="http://www.shillongmail.com/wp-content/uploads/2019/08/img-20190813-wa00178569590406324495390.jpg"
              alt="neighrims-hospital"
            />
          </div>
          <div className="w-52 rounded-full overflow-hidden">
            <img
              src="https://content.jdmagicbox.com/comp/shillong/f1/9999px364.x364.171203143811.n2f1/catalogue/shillong-enterprise-shillong-1pg3degqht.jpg"
              alt="departmental-store"
            />
          </div>
          <div className="w-64 rounded-full overflow-hidden col-span-2">
            <img
              src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/cafe-shillong0.jpg"
              alt="cafe-shillong"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
