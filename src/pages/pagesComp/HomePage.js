"use client";

import MainSection from "@/component/MainSection";
import AboutSection from "@/component/AboutSection";
import { EventSection } from "@/component/EventSection";
import NewsSection from "@/component/NewsSection";
import PlacementOverview from "@/component/PlacementOverview";
import { ProgramSection } from "@/component/ProgramSection";
import { RecruiterTestimonial } from "@/component/RecruiterTestimonial";
import { StudentTestimonial } from "@/component/StudentTestimonial";

export default function HomePage({ data }) {

  return (
    <>
      <MainSection />
      <AboutSection />
      <NewsSection />
      <EventSection />
      <ProgramSection />
      <StudentTestimonial />
      <PlacementOverview />
      <RecruiterTestimonial />
    </>
  );
}