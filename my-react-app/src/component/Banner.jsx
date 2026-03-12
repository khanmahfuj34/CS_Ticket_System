import bgImg from '../assets/image.png'
import React from 'react';



function Banner({inProgressCount, resolvedCount}) {
  return (
    <div className="w-11/12 mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative rounded-xl bg-gradient-to-r from-[#6C3BFF] to-[#8F57FF] p-10 text-white min-h-[180px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={bgImg}
          alt="pattern"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />

        <p className="relative z-10 text-lg">In-Progress</p>
        <h1 className="relative z-10 text-5xl font-bold mt-2">{inProgressCount}</h1>
      </div>

      <div className="relative rounded-xl bg-gradient-to-r from-[#22C55E] to-[#0F9F9A] p-10 text-white min-h-[180px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={bgImg}
          alt="pattern"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />

        <p className="relative z-10 text-lg">Resolved</p>
        <h1 className="relative z-10 text-5xl font-bold mt-2">{resolvedCount}</h1>
      </div>
    </div>
  );
}

export default Banner;