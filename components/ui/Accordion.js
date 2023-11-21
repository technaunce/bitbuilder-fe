"use client";

import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, subtitle, passed, contents = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`py-[18px] border-b`} onClick={() => setIsOpen(!isOpen)}>
        <p className="text-grey-title tracking-[1px] uppercase">{title}</p>
        <p className="leading-[34px] text-2xl capitalize">{subtitle}</p>
        <div className="flex items-end justify-between">
          <div className="flex items-end">
            {passed ? (
              <span className="text-[32px] font-medium text-[#3F9E74] mr-[9px]">
                Pass
              </span>
            ) : (
              <span className="text-[32px] font-medium text-[#B13535] mr-[9px]">
                Fail
              </span>
            )}
            <span className="text-grey-title">({contents.length} advisories)</span>
          </div>
          <div
            className={`transition-all ${!isOpen ? "rotate-0" : "rotate-180"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none">
              <path
                d="M16.2168 1L8.78416 9L1.00019 1"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        {!!contents.length ? (
          <div
            className={`h-auto max-h-96 transition-[max-height] overflow-hidden ease-linear ${
              !isOpen ? "!max-h-0" : ""
            }`}>
            {contents.map((content) => {
              return (
                <>
                  <p className="mt-7 text-grey-title tracking-[0.8px] uppercase">
                    {content.title}
                  </p>
                  <p className="leading-[34px] text-2xl">{content.desc}</p>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Accordion;
