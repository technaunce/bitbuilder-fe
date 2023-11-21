"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import HomeFilter from "../components/HomeFilter";
import HomeBanner from "../components/HomeBanner";
import CardTitle from "../components/CardTitle";
import SwiperSingle from "../components/SwiperSingle";
import Footer from "../components/Footer";
import HomeGridCards from "../components/HomeGridCards";
import { useSearchParams } from "next/navigation";
import { useCarsList } from "./store/listOfCars";

export default function Home() {
  const [isSlideView, setIsSlideView] = useState(true);
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search"));

  const {
    getLiveAuctionList,
    setLiveAuctions,
    getRecentlySoldList,
    setRecentlySold,
    getRecentlyUnsoldList,
    setRecentlyUnsold,
    getComingSoonList,
    setComingSoon,
    context,
  } = useCarsList((state) => state);

  //Set list of cars
  const [liveAuctionsList, setLiveAuctionsList] = useState(
    context.liveAuctions
  );
  const [recentlySoldList, setRecentlySoldList] = useState(
    context.recentlySold
  );
  const [recentlyUnsoldList, setRecentlyUnsoldList] = useState(
    context.recentlyUnsold
  );
  const [comingSoonList, setComingSoonList] = useState(context.comingSoon);

  //API handlers
  const handleLiveAuctionList = (status, response) => {
    if (status) {
      setLiveAuctions(response.data); // set in store
      setLiveAuctionsList(response.data);
    } else {
      console.log("error in API");
    }
  };
  const handleRecentlySoldList = (status, response) => {
    if (status) {
      setRecentlySold(response.data); // set in store
      setRecentlySoldList(response.data);
    } else {
      console.log("error in API");
    }
  };
  const handleRecentlyUnsoldList = (status, response) => {
    if (status) {
      setRecentlyUnsold(response.data); // set in store
      setRecentlyUnsoldList(response.data);
    } else {
      console.log("error in API");
    }
  };
  const handleComingSoon = (status, response) => {
    if (status) {
      setComingSoon(response.data); // set in store
      setComingSoonList(response.data);
    } else {
      console.log("error in API");
    }
  };

  //API calls
  useEffect(() => {
    getLiveAuctionList(handleLiveAuctionList);
    getRecentlySoldList(handleRecentlySoldList);
    getRecentlyUnsoldList(handleRecentlyUnsoldList)
    getComingSoonList(handleComingSoon)
  }, []);

  return (
    <div className="main">
      <Header />
      <HomeBanner />
      <section className="relative">
        <div
          id="overlay-search"
          className="absolute inset-0 z-40 hidden h-full bg-white opacity-50"
        ></div>
        <HomeFilter setView={setIsSlideView} />
        {isSlideView && !search ? (
          <SwiperSingle data={liveAuctionsList} />
        ) : (
          <HomeGridCards></HomeGridCards>
        )}

        <section className="container">
          <CardTitle title={"Recently sold"} count={32} link={`\\`}></CardTitle>
        </section>
        {isSlideView && !search ? (
          <SwiperSingle data={recentlySoldList} />
        ) : (
          <HomeGridCards></HomeGridCards>
        )}

        <section className="container">
          <CardTitle
            title={"Recently Unsold"}
            count={32}
            link={`\\`}
          ></CardTitle>
        </section>
        {isSlideView && !search ? (
          <SwiperSingle data={recentlyUnsoldList}/>
        ) : (
          <HomeGridCards></HomeGridCards>
        )}
        <section className="container">
          <CardTitle title={"Coming Soon"} count={32} link={`\\`}></CardTitle>
        </section>
        {isSlideView && !search ? (
          <SwiperSingle data={comingSoonList}/>
        ) : (
          <HomeGridCards></HomeGridCards>
        )}
        <Footer />
      </section>
    </div>
  );
}
