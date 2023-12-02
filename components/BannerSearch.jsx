"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useDebounce from "../utils/useDebounce";

export default function BannerSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const param = searchParams.get("search");
  const [search, setSearch] = useState(param);
  // useDebounce(search,)

  

  const results = [
    {
      id: 1,
      name: "Porsche 911 Carrera S, 1920 - 1930, UK, recently sold",
    },
    {
      id: 2,
      name: "Porsche 911 Carrera S, 1920 - 1930, UK",
    },
    {
      id: 3,
      name: "Porsche 911 Carrera S, 1920 - ",
    },
    {
      id: 4,
      name: "Porsche 911 Carrera S, 1920 - 1930, sold",
    },
    {
      id: 5,
      name: "Porsche 911 Carrera S, 1920 - 1945",
    },
  ];

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      document.getElementById("overlay-search").style.display = "block";
    } else {
      document.getElementById("overlay-search").style.display = "none";
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    if (e.target.id === "search-results") return;
    console.log(e);
    setIsFocused(false);
  };

  const triggerSearch = () => {
    console.log(search);
  };
  return (
    <>
      {param && (
        <p className="mb-5 text-2xl text-center text-cream">
          Your search results
        </p>
      )}
      <div
        className={`flex justify-center items-center ${
          param && "flex-col gap-6"
        }`}
      >
        <input
          type="text"
          value={search}
          defaultValue={search}
          className={`${
            param
              ? "w-[935px] text-5xl text-white placeholder:text-white"
              : "w-[568px] mr-[10px] text-2xl text-grey-title placeholder:text-grey-title"
          } border-0 outline-0 pb-1 border-b-2 bg-transparent border-b-primary xmd:w-4/5 md:text-[18px]`}
          placeholder="Alfa Romeo, 164L, unsold…"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onSearchChange}
        />

        <div
          className={`${param ? "flex flex-row items-center" : ""} cursor-pointer`}
          onClick={triggerSearch}
        >
          {param && <p className="text-primary mr-[10px]">Search Again</p>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${param ? "58" : "80"}`}
            height={`${param ? "58" : "80"}`}
            viewBox="0 0 80 80"
            fill="none"
            className="md:w-14 md:h-14"
          >
            <circle cx="40" cy="40" r="29" fill="#E8DECF" />
            {!param && <circle cx="40" cy="40" r="39" stroke="#5D5953" />}

            <circle
              cx="42.5728"
              cy="35.4799"
              r="8"
              transform="rotate(45 42.5728 35.4799)"
              stroke="#02120D"
              strokeWidth="2"
            />
            <path
              d="M36.6182 41.4344L30.0681 47.9845"
              stroke="#02120D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {search ? (
        <>
          <div
            className="w-full max-w-[852px] min-h-[400px] py-10 px-12 bg-white rounded-sm shadow-t1 absolute z-50 mx-auto left-0 right-0 top-[100px]
              md:min-h-[300px] md:p-8"
          >
            <div className="mb-8 text-lg font-medium leading-8 md:text-base">
              Suggestions
            </div>
            <ul>
              {results.map((item) => {
                return (
                  <li className="mb-5 text-2xl cursor-pointer text-grey-body last:mb-0 hover:underline md:text-lg">
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
