// components/TopCategories.js
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Mobile",
    image: "https://i.ibb.co.com/DP0gdLDP/image-3-3.png",
  },
  {
    id: 2,
    name: "Cosmetics",
    image: "https://i.ibb.co.com/wZFCXqhV/image-3-2.png",
  },
  {
    id: 3,
    name: "Electronics",
    image: "https://i.ibb.co.com/MyrSBsjj/Component-3.png",
  },
  {
    id: 4,
    name: "Furniture",
    image: "https://i.ibb.co.com/C3gVJBgL/image-4.png",
  },
  {
    id: 5,
    name: "Watches",
    image: "https://i.ibb.co.com/21J5LYsr/image-5.png",
  },
  { id: 6, name: "Decor", image: "https://i.ibb.co.com/jk5rbrPp/image-6.png" },
  {
    id: 7,
    name: "Accessories",
    image: "https://i.ibb.co.com/NdkDtWyM/image-7.png",
  },
];

export default function TopCategories() {
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-16 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">
          Shop From <span className="text-[#129990]">Top Categories</span>
        </h2>
        {/* <a
          href="#"
          className="text-sm text-gray-600 hover:text-[#129990] flex items-center"
        >
          View All <span className="ml-1">›</span>
        </a> */}
      </div>

      {/* Category list */}
      <div className="grid grid-cols-3 md:grid-cols-7 gap-6 overflow-x-auto scrollbar-hide pb-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden hover:border-[#129990] transition">
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
