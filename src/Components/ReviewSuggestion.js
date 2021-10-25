import React from "react";
import { Stars } from "./Stars";

export function ReviewSuggestion() {
  return (
    <div class="flex flex-row">
      <div class="w-48 rounded-l-xl overflow-hidden cursor-pointer">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipPMT0eciaDm7perGMdk1GQrECgZqBGbZrb_FOnm=w1080-k-no"
          alt="image"
        />
      </div>
      <div class="bg-gray-200 w-72 rounded-r-xl flex flex-row justify-between">
        <div class="ml-3 mt-2 flex flex-col">
          <span class="font-semibold text-xl text-gray-800 cursor-pointer hover:text-indigo-500 transition duration-300">
            Kim Pou Restaurant
          </span>
          <span class="font-normal text-sm mt-3 text-gray-600">
            Rate this bussiness
          </span>
          <Stars />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 content-end cursor-pointer m-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
