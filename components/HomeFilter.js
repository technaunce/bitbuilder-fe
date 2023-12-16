"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import SwiperSingle from "./SwiperSingle";
import CardTitle from "./CardTitle";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "../app/store/filter";
import Tag from "./tags/tag";
import Filter from "./filter/filter";

const HomeFilter = ({ setView, count, sliderView }) => {
  const [showContainer, setShowContainer] = useState(false);
  const [toggleView, setToggleView] = useState(false);
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search"));
  const [filterTagsToDisplay, setFilterTagsToDisplay] = useState([]);
  const [unDisplayedTagCount, setUnDisplayedTagCount] = useState(0);

  const {
    context: filterContext,
    remove: removeFilter,
    clear: clearFilter,
    getFilterContents,
  } = useFilterStore();
  const [filterContents, setFilterContents] = useState(
    filterContext.filterContents
  );

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };

  const onCloseFilter = (label) => {
    removeFilter(label);
  };

  const handleFilterContents = (status, response) => {
    if (status) {
      setFilterContents(response.data[0]);
    }
  };

  useEffect(() => {
    getFilterContents(handleFilterContents);
  }, []);
  useEffect(() => {
    if (filterContext.filterData.length >= 5) {
      const splicedList = [...filterContext.filterData].splice(0, 4);
      const remainingElementCount =
        filterContext.filterData.length - splicedList.length;

      setFilterTagsToDisplay(splicedList);
      setUnDisplayedTagCount(remainingElementCount);
    } else {
      setFilterTagsToDisplay(filterContext.filterData);
      setUnDisplayedTagCount(0);
    }
    if (filterContext.filterOn && filterContext.filterData.length === 0) {
      clearFilter();
    }
  }, [filterContext]);

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between md:flex-col-reverse md:gap-9">
          {filterContext.filterOn && (
            <>
              <div className="flex items-center mb-[41px]">
                {filterTagsToDisplay.map((data) => (
                  <Tag
                    className="mr-[3px]"
                    label={data.label}
                    onClose={onCloseFilter}
                  />
                ))}
                {unDisplayedTagCount ? (
                  <p className="text-[#E8DECF] hover:underline cursor-pointer">{`more(${unDisplayedTagCount})`}</p>
                ) : (
                  ""
                )}
              </div>
              <Filter
                toggleContainer={toggleContainer}
                search={search}
                toggleView={toggleView}
                setView={setView}
                sliderView={sliderView}
              />
            </>
          )}

          {!filterContext.filterOn && (
            <>
              <CardTitle
                title={`${search ? "Results" : "Live Auction"}`}
                count={count || 0}
                link={`${search ? "" : "/"}`}
                showViewAll={false}
                fontLight={true}
              ></CardTitle>
              <Filter
                toggleContainer={toggleContainer}
                search={search}
                toggleView={toggleView}
                setView={setView}
                sliderView={sliderView}
              />
            </>
          )}
        </div>
      </div>
      {filterContext.filterOn && (
        <div className="container">
          <CardTitle
            title={`${search ? "Results" : "Live Auction"}`}
            count={count || 0}
            link={`${search ? "" : "/"}`}
            showViewAll={false}
            fontLight={true}
          ></CardTitle>
        </div>
      )}

      <div className="container">
        {showContainer && (
          <AdvancedFilter
            contents={filterContents}
            closeItself={toggleContainer}
          />
        )}
      </div>
    </>
  );
};

export default HomeFilter;
