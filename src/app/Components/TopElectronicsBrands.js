// components/TopElectronicsBrands.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const brands = [
  {
    id: 1,
    name: "IPHONE",
    logo: "https://i.ibb.co.com/GQq2Gf6n/Group-48-1.png",
    product: "/assets/iphone.png",
    offer: "UP TO 80% OFF",
    bg: "bg-gray-900",
    bgImg: "https://i.ibb.co.com/gZtgn0qc/Group-50.png",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "REALME",
    logo: "https://i.ibb.co.com/mr2BkZxt/download-1-1.png",
    product: "/assets/realme.png",
    offer: "UP TO 80% OFF",
    bg: "bg-yellow-100",
    bgImg: "https://i.ibb.co.com/PZJJbpRh/Group-51.png",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    name: "XIAOMI",
    logo: "https://i.ibb.co.com/fG0d9LPY/mi-xiaomi-1.png",
    product: "/assets/xiaomi.png",
    offer: "UP TO 80% OFF",
    bg: "bg-orange-100",
    textColor: "text-gray-800",
  },
  {
    id: 4,
    name: "XIAOMI",
    logo: "https://i.ibb.co.com/fG0d9LPY/mi-xiaomi-1.png",
    product: "/assets/xiaomi.png",
    offer: "UP TO 80% OFF",
    bg: "bg-green-100",
    textColor: "text-gray-800",
  },
  {
    id: 5,
    name: "XIAOMI",
    logo: "https://i.ibb.co.com/fG0d9LPY/mi-xiaomi-1.png",
    product: "/assets/xiaomi.png",
    offer: "UP TO 80% OFF",
    bg: "bg-teal-100",
    textColor: "text-gray-800",
  },
];

export default function TopElectronicsBrands() {
  const [slidePercentage, setSlidePercentage] = useState(100);

  // Handle responsive slide percentage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidePercentage(100); // Mobile = 1 card
      } else if (window.innerWidth < 1024) {
        setSlidePercentage(50); // Tablet = 2 cards
      } else {
        setSlidePercentage(33.33); // Desktop = 3 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-16 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">
          Top <span className="text-[#129990]">Electronics Brands</span>
        </h2>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-[#129990] flex items-center"
        >
          View All <span className="ml-1">›</span>
        </a>
      </div>

      {/* Carousel */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        showArrows
        swipeable
        centerMode
        centerSlidePercentage={slidePercentage}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`rounded-xl p-5 flex justify-between items-center mx-2 ${brand.bg} ${brand.textColor}`}
          >
            {/* Left Content */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-wide px-2 py-1 bg-white/20 rounded-md w-fit">
                {brand.name}
              </span>

              <div className="flex items-center gap-2">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium">{brand.offer}</p>
            </div>

            {/* Right Product Image */}
            <div className="relative w-28 h-28">
              <Image
                src={brand.product}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
