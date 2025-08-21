"use client";

import { Carousel } from "react-responsive-carousel";

const slides = [
  {
    id: 1,
    title: "Welcome to MyShop",
    desc: "Discover the best products at unbeatable prices.",
    btnText: "Explore Products",
    img: "https://source.unsplash.com/1600x600/?shopping,store",
  },
  {
    id: 2,
    title: "Exclusive Deals",
    desc: "Get huge discounts on top products every day!",
    btnText: "Shop Now",
    img: "https://source.unsplash.com/1600x600/?ecommerce,discount",
  },
  {
    id: 3,
    title: "Fast Delivery",
    desc: "We deliver products at lightning speed, right to your door.",
    btnText: "Order Today",
    img: "https://source.unsplash.com/1600x600/?delivery,shipping",
  },
];

export default function Banner() {
  return (
    <section className="relative">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        stopOnHover
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative bg-amber-200">
            <img
              src={slide.img}
              alt={slide.title}
              className="object-cover h-[70vh] w-full"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
              <a
                href="/products"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
              >
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
