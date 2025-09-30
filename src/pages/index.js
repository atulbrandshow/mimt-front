import { useContext } from "react";
import { AppDataContext } from "@/context/AppDataContext";
import HomePage from "./pagesComp/HomePage";
import ShimmerContent from "@/Components/ShimmerContent";
import HomeMetaTags from "@/component/HomeMetaTags";


export default function Home() {
  const { homeData, loading } = useContext(AppDataContext);

  if (loading) return <ShimmerContent />;
  return (
    <>
      <HomeMetaTags data={homeData} />
      <HomePage data={homeData} />;
    </>
  )

}
