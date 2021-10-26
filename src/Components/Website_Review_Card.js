import {React_Stars} from "./Components/React_Star";

export function Review_Site_Review_Card() {
    return (

<div class="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
      <div class="px-12 py-5">
        <h2 class="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
      </div>
      <div class="bg-gray-200 w-full flex flex-col items-center">
        <div class="flex flex-col items-center py-6 space-y-3">
        <span class="text-lg text-gray-800">Tell us about your experience of our website?</span>
        <div class="flex space-x-3">
        <div class="flex justify-center items-center">
          <div class="flex items-center mt-2 mb-4">
          <React_Stars/>
          </div>
        </div>
        </div>
        </div>
        <div class="w-3/4 flex flex-col">
          <textarea rows="3" class="p-4 text-gray-500 rounded-xl resize-none">Leave a message, if you want</textarea>
          
          <button class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">Rate now</button>
        </div>
      </div>
      <div class="h-20 flex items-center justify-center">
        <a href="#" class="text-gray-600">Maybe later</a>
      </div>
    </div>

    <div class="mt-8 text-gray-700">
      Team <a class="font-bold" href="https://dribbble.com/shots/12052834-Rating-popup">Public Reviews Site</a>
    </div>
  </div>
</div>
    );
} 