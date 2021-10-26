import { Stars } from "./Stars";

export function WebsiteReviewCard() {
  return (
    <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
          <div className="px-12 py-5">
            <h2 className="text-gray-800 text-3xl font-semibold">
              Your opinion matters to us!
            </h2>
          </div>
          <div className="bg-gray-200 w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-lg text-gray-800">
                Tell us about your experience of our website?
              </span>
              <div className="flex space-x-3">
                <div className="flex justify-center items-center">
                  <div className="flex items-center mt-2 mb-4">
                    <Stars />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/4 flex flex-col">
              <textarea
                rows="3"
                className="p-4 text-gray-500 rounded-xl resize-none"
              >
                Leave a message, if you want
              </textarea>

              <button className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">
                Rate now
              </button>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <p className="text-gray-600">Maybe later</p>
          </div>
        </div>

        <div className="mt-8 text-gray-700">
          Team <p className="font-bold">Public Reviews Site</p>
        </div>
      </div>
    </div>
  );
}
