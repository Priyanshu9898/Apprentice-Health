import BenefitsSection from "@/components/Home/BenefitsSection";
import CardsSection from "@/components/Home/CardsSection";
import HeroSection from "@/components/Home/HeroSection";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CardsSection />
    </>
  );
};

export default page;
