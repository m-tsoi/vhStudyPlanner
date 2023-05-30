import { useState } from "react";

function TimerCircle() {
  return (
    <div className="flex flex-col items-center">
      <svg height="200" width="200">
        <g>
          <circle
            r="70"
            cx="100"
            cy="100"
            stroke="black"
            fill="transparent"
            strokeWidth="1rem"
            className="text-gray-100"
          ></circle>
        </g>
      </svg>
      <div className="flex justify-center">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Start
        </button>
      </div>
    </div>
  );
}

export default TimerCircle;
