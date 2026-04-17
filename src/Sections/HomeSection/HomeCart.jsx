import React from "react";

const HomeCart = () => {
  return (
    <div className=" bg-[#E9E9E9] pb-3  ">
      <div className="w-full md:w-10/12 mx-auto  bordet border-b-2 border-b-gray-300 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-3 md:py-8">
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">9</span>
          <p className="text-gray-400">Total Friends</p>
        </div>
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">2</span>
          <p className="text-gray-400">On Track</p>
        </div>
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">6</span>
          <p className="text-gray-400">Need Attention</p>
        </div>
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">12</span>
          <p className="text-gray-400">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;
