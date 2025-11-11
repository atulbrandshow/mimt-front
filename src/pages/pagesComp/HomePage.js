"use client";

import AboutSection from "@/component/AboutSection";
import CampusSlider from "@/component/CampusSlider";
import { EventSection } from "@/component/EventSection";
import ExploreCourses from "@/component/ExploreCourses";
import FooterCard from "@/component/FooterCard";
import HeroSection from "@/component/HeroSection";
import HomeLogoSlider from "@/component/HomeLogoSlider";
import HomeTopCard from "@/component/HomeTopCard";
import InnovationShowcase from "@/component/InnovationShowcase";
import MainSection from "@/component/MainSection";
import MilestonesSection from "@/component/MilestonesSection";
import NewsEvents from "@/component/NewsEvents";
import NewsSection from "@/component/NewsSection";
import NotificationSlider from "@/component/NotificationSlider";
import PlacementHighlights from "@/component/PlacementHighlights";
import PlacementOverview from "@/component/PlacementOverview";
import { ProgramSection } from "@/component/ProgramSection";
import { RecruiterTestimonial } from "@/component/RecruiterTestimonial";
import ResearchEnvironment from "@/component/ResearchEnvironment";
import SlickSlider from "@/component/SlickSlider";
import StudentReviews from "@/component/StudentReviews";
import { StudentTestimonial } from "@/component/StudentTestimonial";


export default function HomePage({ data }) {
  return (
    <div className="bg-white">
      <MainSection />
      <AboutSection />
      <ExploreCourses data={data} />
      {data && <MilestonesSection data={data} />}
      {data && <EventSection />}
      {data && <SlickSlider data={data} />}
      {data && <NewsSection />}
      {data && <NotificationSlider data={data} />}
      {data && <InnovationShowcase />}
      {/* {data && <RecruiterTestimonial />} */}
      {/* {data && <StudentTestimonial />} */}
    </div>
  );
}