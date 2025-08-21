// components/SmartphoneSlider.js
import Image from "next/image";
// data/products.js
export const smartphones = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    image: "/assets/galaxy-s22.png",
    price: 32999,
    oldPrice: 74999,
    discount: "56% OFF",
    save: 32999,
  },
  {
    id: 2,
    name: "Galaxy M13 (4GB | 64GB)",
    image: "/assets/galaxy-m13.png",
    price: 10499,
    oldPrice: 14999,
    discount: "56% OFF",
    save: 4500,
  },
  {
    id: 3,
    name: "Galaxy M33 (4GB | 64GB)",
    image: "/assets/galaxy-m33.png",
    price: 16999,
    oldPrice: 24999,
    discount: "56% OFF",
    save: 8000,
  },
  {
    id: 4,
    name: "Galaxy M53 (4GB | 64GB)",
    image: "/assets/galaxy-m53.png",
    price: 31999,
    oldPrice: 40999,
    discount: "56% OFF",
    save: 9000,
  },
  {
    id: 5,
    name: "Galaxy S22 Ultra",
    image: "/assets/galaxy-s22-2.png",
    price: 67999,
    oldPrice: 85999,
    discount: "56% OFF",
    save: 18000,
  },
];

export default function Smartphone() {
  return (
    <div className=" md:w-6xl  mx-auto mb-8 mt-20">
      <div className="flex flex-col justify-start items-start mb-4">
        <h2 className="text-2xl font-bold">
          Grab the best deal on{" "}
          <span className="text-[#129990]">Smartphones</span>
          <span className="text-gray-500 text-sm"> (Limited Time Offer)</span>
        </h2>

        {/* <a href="#" className="text-blue-600 flex items-center">
          View All &gt;
        </a> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5  space-x-4 overflow-x-auto pb-4">
        {smartphones.map((phone) => (
          <div
            key={phone.id}
            className="min-w-[200px] bg-white border border-gray-200 rounded-lg p-3 shadow-sm relative flex-shrink-0"
          >
            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {phone.discount}
            </span>

            <div className="relative w-full h-40 mb-2">
              <Image
                src={phone.image}
                alt={phone.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-sm font-medium mb-1">{phone.name}</h3>
            <div className="flex items-center gap-2">
              <p className="font-semibold">₹{phone.price}</p>
              <p className="line-through text-gray-400 text-sm">
                ₹{phone.oldPrice}
              </p>
            </div>
            <p className="text-green-600 text-xs mt-1">Save - ₹{phone.save}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
