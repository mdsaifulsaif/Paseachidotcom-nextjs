"use client";

import Image from "next/image";
import Banner from "./Components/Banner";
import Smartphone from "./Components/SmartPhone";

export default function Home() {
  return (
    <div data-theme="light" className="min-h-screen mx-auto ">
      <Banner />;
      <Smartphone />
    </div>
  );
}
