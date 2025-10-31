// pages/index.js
import { useContext } from "react";
import { AppDataContext } from "@/context/AppDataContext";
import HomePage from "./pagesComp/HomePage";
import HomeMetaTags from "../component/HomeMetaTags";
import ShimmerContent from "@/component/ShimmerContent";

export default function Home() {
  const { homeData, loading } = useContext(AppDataContext);

  if (loading) return <ShimmerContent />;

  return (
    <>
      <HomeMetaTags data={homeData} />
      <HomePage data={homeData} />
    </>
  );
}