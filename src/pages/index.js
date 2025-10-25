// pages/index.js
import { useContext } from "react";
import { AppDataContext } from "@/context/AppDataContext";
import HomePage from "./pagesComp/HomePage";
import HomeMetaTags from "../component/HomeMetaTags";

export default function Home() {
  const { homeData } = useContext(AppDataContext);

  return (
    <>
      <HomeMetaTags data={homeData} />
      <HomePage data={homeData} />
    </>
  );
}