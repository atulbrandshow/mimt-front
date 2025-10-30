"use client";

import CampusSlider from "@/component/CampusSlider";
import ExploreCourses from "@/component/ExploreCourses";
import FooterCard from "@/component/FooterCard";
import HomeLogoSlider from "@/component/HomeLogoSlider";
import HomeTopCard from "@/component/HomeTopCard";
import MainSection from "@/component/MainSection";
import MilestonesSection from "@/component/MilestonesSection";
import NewsEvents from "@/component/NewsEvents";
import NotificationSlider from "@/component/NotificationSlider";
import PlacementHighlights from "@/component/PlacementHighlights";
import ResearchEnvironment from "@/component/ResearchEnvironment";
import SlickSlider from "@/component/SlickSlider";
import StudentReviews from "@/component/StudentReviews";


export default function HomePage({ data }) {

  console.log(data);
  

  return (
    <>
      {data && <MainSection data={data} />}
      {data && <HomeTopCard data={data} />}
      {data && <ExploreCourses data={data} />}
      {data && <SlickSlider data={data} />}
      {/* {data && <NotificationSlider data={data} />}
      {data && <MilestonesSection data={data} />}
      {data && <PlacementHighlights data={data} />}
      {data && <HomeLogoSlider data={data} />}
      {data && <CampusSlider data={data} />}
      {data && <StudentReviews data={data} />}
      {data && <NewsEvents data={data} />}
      {data && <FooterCard data={data} />}
      {data && <ResearchEnvironment data={data} />} */}
    </>
  );
}