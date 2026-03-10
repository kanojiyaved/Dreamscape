"use client";

import { useEffect, useState } from "react";
import Stars from "@/components/ui/Stars";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import DreamForm from "@/components/sections/DreamForm";
import FeaturedDreams from "@/components/sections/FeaturedDreams";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Stars />
      <Navbar />
      <Hero />
      <DreamForm />
      <FeaturedDreams />
      <HowItWorks />
      <Comparison />
      <Footer />
    </main>
  );
}
