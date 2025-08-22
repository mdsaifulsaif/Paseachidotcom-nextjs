"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    id: 1,
    title: "Best Deal Online on smart watches",
    subtitle: "SMART WEARABLE.",
    offer: "UP TO 80% OFF",
    img: "https://i.ibb.co.com/qMyrWVfK/image-2.png",
  },
  {
    id: 2,
    title: "Get the latest fashion trends",
    subtitle: "NEW COLLECTIONS.",
    offer: "UP TO 60% OFF",
    img: "https://i.ibb.co.com/qMyrWVfK/image-2.png",
  },
  {
    id: 3,
    title: "Upgrade your home appliances",
    subtitle: "SMART HOME DEALS.",
    offer: "UP TO 50% OFF",
    img: "https://i.ibb.co.com/qMyrWVfK/image-2.png",
  },
];

export default function Banner() {
  return (
    <section className="md:w-6xl  mx-auto bg-gray-50">
      {/* Category Navigation */}
      <div className="flex gap-4 overflow-x-auto px-6 py-3 text-sm font-medium border-b">
        {[
          "Groceries",
          "Premium Fruits",
          "Home & Kitchen",
          "Fashion",
          "Electronics",
          "Beauty",
          "Home Improvement",
          "Sports, Toys & Luggage",
        ].map((cat) => (
          <button
            key={cat}
            className="px-3 py-1 rounded-full border border-gray-200 hover:bg-[#129990] hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <Carousel
        autoPlay
        infiniteLoop={false}
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-gray-600 to-gray-900 text-white"
          >
            {/* Text Content */}
            <div className="max-w-lg space-y-4">
              <h4 className="text-lg">{s.title}</h4>
              <h1 className="text-4xl md:text-5xl font-bold">{s.subtitle}</h1>
              <p className="text-xl font-semibold">{s.offer}</p>
              <button className="mt-4 px-6 py-3 bg-white text-[#129990] font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>

            {/* Image */}
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
              <Image
                width={268} // required
                height={270}
                src={s.img}
                alt={s.subtitle}
                className="max-h-[300px] object-contain rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
