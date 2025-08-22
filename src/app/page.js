"use client";

import Image from "next/image";
import Banner from "./Components/Banner";
import Smartphone from "./Components/SmartPhone";
import TopCategories from "./Components/TopCategories";
import TopElectronicsBrands from "./Components/TopElectronicsBrands";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto ">
      <Banner />;
      <Smartphone />
      <TopCategories />
      <TopElectronicsBrands />
    </div>
  );
}
