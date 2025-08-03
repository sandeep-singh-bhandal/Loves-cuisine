import Image from 'next/image'
import React from 'react'

const TiffinService = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around my-24 gap-16 md:px-10">
        <div className="w-2/5 max-md:w-full max-md:px-28 max-sm:px-0">
          <Image
            src="/images/tiffin_service.jpg"
            alt="Tiffin Service"
            className="w-full max-w-2xl max-md:max-w-full rounded-lg shadow-lg"
            height={500}
            width={500}
          />
        </div>
        <div className="flex-1 text-center max-md:text-left md:text-left w-1/2 max-md:w-full my-auto">
          <h1 className="text-6xl font-bold text-[#FD0103] mb-4">
            Fresh Indian Tiffin Service
          </h1>
          <p className="text-3xl text-[#192A56] leading-relaxed">
            Craving homemade Indian food in the USA? We’ve got you covered! Our
            daily tiffin service brings you fresh, flavorful, and hygienic
            meals.
          </p>

          <ul className="mt-6 space-y-2 text-[#192A56] text-2xl list-disc list-inside">
            <li>Pure vegetarian North Indian meals</li>
            <li>Freshly cooked daily — no frozen food</li>
            <li>Monthly, weekly & trial plans available</li>
            <li>Free doorstep delivery</li>
          </ul>

          <p className="mt-4 font-semibold text-gray-900 text-2xl">
            Starting at just{" "}
            <span className="text-green-600 font-bold">$19.99/day</span>
          </p>

          <a
            href="tel:+12064199372"
            className="inline-block mt-6 bg-[#192A56] hover:bg-[#FD0103] text-white text-2xl font-semibold py-5 px-8 rounded-lg shadow transition-all duration-300"
          >
            Call Now to Book Your Tiffin
          </a>
        </div>
      </div>
  )
}

export default TiffinService
