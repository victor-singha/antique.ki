import React from "react";

export default function Hero() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-1 font-medium text-white">
              Antique<span className="text-yellow-500">KINGDOM</span>
            </h1>
            <h2 className="title-font mb-4 font-small text-gray-400">
              2014 estd.
            </h2>
            <p class="mb-2 leading-relaxed text-white">
              There are three kinds of men. The one that learns by reading. The
              few who learn by observation. The rest of them have to pee on the
              electric fence for themselves.
            </p>
            <p class="text-yellow-500 mb-8 leading-relaxed text-white">
              If our lives are already written, it would take a courageous man
              to change the script.
            </p>

            <div class="flex justify-center">
              <button class="inline-flex py-2 px-6 text-white bg-black border border-white py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
                Take A Tour.
              </button>

              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded text-lg">
                Auto Sc
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.hdqwalls.com/download/game-over-typography-5k-7r-600x500.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
