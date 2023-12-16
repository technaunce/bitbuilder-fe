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
import ProductCardPlaceholder from "../components/productCardPlaceholder";
import { useFilterStore } from "./store/filter";
import createUrlParamsForFilter from "../utils/createFilterContent";
import CardPlaceholder from "../components/cardPlaceholder";

export default function Home() {
  const [isSlideView, setIsSlideView] = useState(true);
  const [isRecentlySoldLoading, setIsRecentlySoldLoading] = useState(false);
  const [isLiveActionLoading, setIsLiveActionLoading] = useState(false);
  const [isRecentlyUnsoldLoading, setIsRecentlyUnsoldLoading] = useState(false);
  const [isComingSoonLoading, setIsComingSoonLoading] = useState(false);
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

  const {
    context: { filterData },
  } = useFilterStore((state) => state);

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
    setLiveAuctions(response.data || []); // set in store
    setLiveAuctionsList(response.data || []);
    if (!status) {
      console.log("error in API");
    }
    setIsLiveActionLoading(false);
  };
  const handleRecentlySoldList = (status, response) => {
    setRecentlySold(response.data || []); // set in store
    setRecentlySoldList(response.data || []);
    if (!status) {
      console.log("error in API");
    }
    setIsRecentlySoldLoading(false);
  };
  const handleRecentlyUnsoldList = (status, response) => {
    setRecentlyUnsold(response.data || []); // set in store
    setRecentlyUnsoldList(response.data || []);
    if (!status) {
      console.log("error in API");
    }
    setIsRecentlyUnsoldLoading(false);
  };
  const handleComingSoon = (status, response) => {
    setComingSoon(response.data || []); // set in store
    setComingSoonList(response.data || []);
    if (!status) {
      console.log("error in API");
    }
    setIsComingSoonLoading(false);
  };

  //API calls
  useEffect(() => {
    setIsRecentlySoldLoading(true);
    setIsLiveActionLoading(true);
    setIsRecentlyUnsoldLoading(true);
    setIsComingSoonLoading(true);
    const queryString = createUrlParamsForFilter(filterData);
    getLiveAuctionList(handleLiveAuctionList, queryString);
    getRecentlySoldList(handleRecentlySoldList, queryString);
    getRecentlyUnsoldList(handleRecentlyUnsoldList, queryString);
    getComingSoonList(handleComingSoon, queryString);
  }, [filterData]);

  const renderCarsList = (data) => {
    if (isSlideView && !search) {
      return <SwiperSingle data={data} />;
    } else {
      <HomeGridCards></HomeGridCards>;
    }
  };

  const renderNoDataCard = (loadingStatus) => {
    if (loadingStatus) {
      return <CardPlaceholder />;
    } else {
      return (
        <div className="pl-[1rem] pr-[1rem] text-[#565656] py-[34px] container">
          <p>No data available under this category.</p>
        </div>
      );
    }
  };
  return (
    <div className="main">
      <Header />
      <HomeBanner />
      <section className="relative">
        <div
          id="overlay-search"
          className="absolute inset-0 z-40 hidden h-full bg-white opacity-50"
        ></div>
        <HomeFilter setView={setIsSlideView} count={liveAuctionsList.length} />
        {liveAuctionsList.length
          ? renderCarsList(liveAuctionsList)
          : renderNoDataCard(isLiveActionLoading)}

        <section className="container">
          <CardTitle
            title={"Recently sold"}
            count={recentlySoldList.length}
            link={`\\`}
          ></CardTitle>
        </section>
        {recentlySoldList.length
          ? renderCarsList(recentlySoldList)
          : renderNoDataCard(isRecentlySoldLoading)}

        <section className="container">
          <CardTitle
            title={"Recently Unsold"}
            count={recentlyUnsoldList.length}
            link={`\\`}
          ></CardTitle>
        </section>
        {recentlyUnsoldList.length
          ? renderCarsList(recentlyUnsoldList)
          : renderNoDataCard(isRecentlyUnsoldLoading)}

        <section className="container">
          <CardTitle
            title={"Coming Soon"}
            count={comingSoonList.length}
            link={`\\`}
          ></CardTitle>
        </section>
        {comingSoonList.length
          ? renderCarsList(comingSoonList)
          : renderNoDataCard(isComingSoonLoading)}

        <Footer />
      </section>
    </div>
  );
}
