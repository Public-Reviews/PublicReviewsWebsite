import React from "react";

export function Splash() {
  return (
    <div id="container" class="p-12 bg-gray-200">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <span class="text-3xl font-black flex-wrap  cursor-pointer hover:text-indigo-500 transition duration-300">
            Public Reviews Website
          </span>
          <span class="font-mono mt-2 flex-wrap">
            Look up public reviews and ratings of businesses around you.
          </span>
          <span class="font-mono mt-2 flex-wrap">
            One stop site to view departmental stores, <br />
            cafes, restaurants, hospitals,
            <br /> repairshops the list goes on...
          </span>
        </div>
        <div
          id="images"
          class="hidden md:grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mt-4"
        >
          <div class="w-52 rounded-full overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/proxy/A1jta6HTdBhdgwV8KPNtVzac8TtgKyXWaiQpF9CblmCbMSa3MyG2yl1Ah5d36x3fMqRHFw99EUsQGKZhPUNmnAuRNhGJLxwCPbqqN6Os"
              alt="neighrims-hospital"
            />
          </div>
          <div class="w-48 rounded-full overflow-hidden">
            <img
              src="https://content.jdmagicbox.com/comp/shillong/f1/9999px364.x364.171203143811.n2f1/catalogue/shillong-enterprise-shillong-1pg3degqht.jpg"
              alt="departmental-store"
            />
          </div>
          <div class="w-64 rounded-full overflow-hidden col-span-2">
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
