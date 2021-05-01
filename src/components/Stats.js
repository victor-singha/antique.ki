import React from "react";

export default function Stats() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-white">
                Have a look at our excellent statistics.
              </h1>
              <div class="leading-relaxed text-yellow-500 ">
                Money wasted in playing games, buying skins etc. + total hours
                the team has spent in playing and trying various games since
                2014.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">+200K</h2>
              <p class="leading-relaxed text-yellow-500">Money Wasted</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">+50k</h2>
              <p class="leading-relaxed text-yellow-500">Hours Played</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">+25</h2>
              <p class="leading-relaxed text-yellow-500">Games</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">Zero</h2>
              <p class="leading-relaxed text-yellow-500">Wins</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://images.hdqwalls.com/download/mortal-kombat-movie-logo-4k-xq-600x300.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
