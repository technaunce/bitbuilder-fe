"use client";

import React, { useState } from "react";

const Header = ({ isHome = true }) => {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      <div
        className={`bg-cover bg-center bg-header-circle absolute top-0 bottom-0 left-0 right-0 -z-10 h-[935px] ${
          isHome ? "md:h-[647px]" : "md:h-[496px]"
        }`}></div>
      {!navActive && (
        <section className="container">
          {!isHome ? (
            <>
              <div
                className="absolute top-0 left-0 right-0 flex justify-center cursor-pointer"
                onClick={() => setNavActive(!navActive)}>
                <span className="absolute z-10">
                  <p className="text-sm tracking-[0.788px] pt-2 md:hidden">
                    MENU
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pt-1 mx-auto md:w-9 md:h-5 md:mt-2"
                    width="28"
                    height="15"
                    viewBox="0 0 28 15"
                    fill="none">
                    <path
                      d="M20.5002 13.5666H7.50023"
                      stroke="#02120D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.6668 7.49998H5.3335"
                      stroke="#02120D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27 1.43333H1"
                      stroke="#02120D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <svg
                  className="absolute md:w-[80px] md:h-[60px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="58"
                  viewBox="0 0 118 58"
                  fill="none">
                  <circle cx="59" cy="-1" r="59" fill="#E8DECF" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute md:w-[95px] md:h-[68px]"
                  width="142"
                  height="70"
                  viewBox="0 0 142 70"
                  fill="none">
                  <circle cx="71" cy="-1" r="70" stroke="#5D5953" />
                </svg>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="flex justify-between pt-10 pb-14 md:pt-5 md:pb-9">
            <div className="flex items-center">
              <p className="mr-4 text-grey-title md:hidden">NewsLetter</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.9006 0H1.91761C0.860241 0 0 0.863228 0 1.92427V13.0757C0 14.1368 0.860241 15 1.91761 15H19.9006C20.9579 15 21.8182 14.1368 21.8182 13.0757V1.92427C21.8182 0.863228 20.9579 0 19.9006 0ZM19.6503 1.28285L19.3944 1.4967L11.6699 7.95118C11.229 8.31953 10.5891 8.31953 10.1483 7.95118L2.42382 1.4967L2.16788 1.28285H19.6503ZM7.5721 7.46793L1.27841 2.20898V11.6711L7.5721 7.46793ZM19.9006 13.7172H1.91761C1.60875 13.7172 1.35043 13.4962 1.29124 13.2035L8.59713 8.3244L9.33026 8.937C9.78767 9.31921 10.3484 9.51031 10.9091 9.51031C11.4698 9.51031 12.0306 9.31921 12.488 8.937L13.2211 8.3244L20.527 13.2035C20.4678 13.4962 20.2094 13.7172 19.9006 13.7172ZM14.2461 7.46797L20.5398 11.6711V2.20898L14.2461 7.46797Z"
                  fill="#979187"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <p className="mr-4 text-grey-title md:hidden">Sign up / Log in</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4218 10.0801C15.2522 10.4491 15.9756 10.902 16.5722 11.4262C17.4795 12.2234 18 13.3764 18 14.5898V15.8906C18 17.0538 17.0538 18 15.8906 18H2.10938C0.946198 18 0 17.0538 0 15.8906V14.5898C0 13.3764 0.520477 12.2234 1.42781 11.4262C2.16238 10.7806 3.56918 9.8237 5.83072 9.32657C4.59476 8.37447 3.79688 6.88033 3.79688 5.20312C3.79688 2.33418 6.13106 0 9 0C11.8689 0 14.2031 2.33418 14.2031 5.20312C14.2031 8.07207 11.8689 10.4062 9 10.4062C5.13625 10.4062 3.06642 11.8582 2.35602 12.4825C1.75246 13.0129 1.40625 13.7808 1.40625 14.5898V15.8906C1.40625 16.2783 1.72169 16.5938 2.10938 16.5938H15.8906C16.2783 16.5938 16.5938 16.2783 16.5938 15.8906V14.5898C16.5938 13.7808 16.2475 13.0129 15.644 12.4825C15.1544 12.0523 14.551 11.6764 13.8507 11.3652C13.4959 11.2074 13.336 10.792 13.4937 10.4371C13.6513 10.0823 14.0668 9.92244 14.4218 10.0801ZM9 1.40625C6.90642 1.40625 5.20312 3.10954 5.20312 5.20312C5.20312 7.29671 6.90642 9 9 9C11.0936 9 12.7969 7.29671 12.7969 5.20312C12.7969 3.10954 11.0936 1.40625 9 1.40625Z"
                  fill="#979187"
                />
              </svg>
            </div>
          </div>
        </section>
      )}
      {navActive && (
        <section className="container">
          <div className="flex justify-between pt-7 pb-[26px] md:pt-5 md:pb-9">
            <div className="flex items-center sm:flex-col sm:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none">
                <path
                  d="M10 20.5L0 11.2193L10 1.5"
                  stroke="#E8DECF"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
                <path
                  d="M1.5 11L27.5 11"
                  stroke="#E8DECF"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
              </svg>
              <span className="pr-6 border-r border-[#3F4546] md:border-0 md:pl-2 md:pr-0 sm:pl-0">
                <p className="mb-1 text-right text-grey-title md:mb-0 sm:mt-3 sm:text-sm">Previous car</p>
                <p className="text-lg text-right ml-11 text-primary sm:hidden">
                  1973 Mercedez Benz
                </p>
              </span>
            </div>
            <div onClick={() => setNavActive(!navActive)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                className="cursor-pointer">
                <path
                  d="M29.6066 9.80761L30.3137 10.5147L31.0208 9.80761L30.3137 9.1005L29.6066 9.80761ZM28.1924 8.3934L28.8995 7.68629L28.1924 6.97918L27.4853 7.68629L28.1924 8.3934ZM19 17.5858L18.2929 18.2929L19 19L19.7071 18.2929L19 17.5858ZM9.80761 8.3934L10.5147 7.68629L9.80761 6.97918L9.10051 7.68629L9.80761 8.3934ZM8.3934 9.80761L7.68629 9.1005L6.97918 9.80761L7.68629 10.5147L8.3934 9.80761ZM17.5858 19L18.2929 19.7071L19 19L18.2929 18.2929L17.5858 19ZM8.3934 28.1924L7.68629 27.4853L6.97918 28.1924L7.68629 28.8995L8.3934 28.1924ZM9.80761 29.6066L9.10051 30.3137L9.80761 31.0208L10.5147 30.3137L9.80761 29.6066ZM19 20.4142L19.7071 19.7071L19 19L18.2929 19.7071L19 20.4142ZM28.1924 29.6066L27.4853 30.3137L28.1924 31.0208L28.8995 30.3137L28.1924 29.6066ZM29.6066 28.1924L30.3137 28.8995L31.0208 28.1924L30.3137 27.4853L29.6066 28.1924ZM20.4142 19L19.7071 18.2929L19 19L19.7071 19.7071L20.4142 19ZM28.8995 9.1005L28.1924 9.80761L29.6066 11.2218L30.3137 10.5147L28.8995 9.1005ZM27.4853 9.1005L28.8995 10.5147L30.3137 9.1005L28.8995 7.68629L27.4853 9.1005ZM28.1924 9.80761L28.8995 9.1005L27.4853 7.68629L26.7782 8.3934L28.1924 9.80761ZM19.7071 18.2929L28.1924 9.80761L26.7782 8.3934L18.2929 16.8787L19.7071 18.2929ZM9.80761 9.80761L18.2929 18.2929L19.7071 16.8787L11.2218 8.3934L9.80761 9.80761ZM9.10051 9.1005L9.80761 9.80761L11.2218 8.3934L10.5147 7.68629L9.10051 9.1005ZM9.10051 10.5147L10.5147 9.1005L9.10051 7.68629L7.68629 9.1005L9.10051 10.5147ZM9.80761 9.80761L9.10051 9.1005L7.68629 10.5147L8.3934 11.2218L9.80761 9.80761ZM18.2929 18.2929L9.80761 9.80761L8.3934 11.2218L16.8787 19.7071L18.2929 18.2929ZM9.80761 28.1924L18.2929 19.7071L16.8787 18.2929L8.3934 26.7782L9.80761 28.1924ZM9.10051 28.8995L9.80761 28.1924L8.3934 26.7782L7.68629 27.4853L9.10051 28.8995ZM10.5147 28.8995L9.10051 27.4853L7.68629 28.8995L9.10051 30.3137L10.5147 28.8995ZM9.80761 28.1924L9.10051 28.8995L10.5147 30.3137L11.2218 29.6066L9.80761 28.1924ZM18.2929 19.7071L9.80761 28.1924L11.2218 29.6066L19.7071 21.1213L18.2929 19.7071ZM28.1924 28.1924L19.7071 19.7071L18.2929 21.1213L26.7782 29.6066L28.1924 28.1924ZM28.8995 28.8995L28.1924 28.1924L26.7782 29.6066L27.4853 30.3137L28.8995 28.8995ZM28.8995 27.4853L27.4853 28.8995L28.8995 30.3137L30.3137 28.8995L28.8995 27.4853ZM28.1924 28.1924L28.8995 28.8995L30.3137 27.4853L29.6066 26.7782L28.1924 28.1924ZM19.7071 19.7071L28.1924 28.1924L29.6066 26.7782L21.1213 18.2929L19.7071 19.7071ZM28.1924 9.80761L19.7071 18.2929L21.1213 19.7071L29.6066 11.2218L28.1924 9.80761Z"
                  fill="#969696"
                />
              </svg>
              <p className="mt-1 text-grey-title">Close</p>
            </div>
            <div className="flex items-center sm:flex-col-reverse sm:justify-center">
              <span className="pl-6 border-l border-[#3F4546] md:border-0 md:pr-2 md:pl-0 sm:pr-0">
                <p className="mb-1 text-left text-grey-title md:mb-0 sm:mt-3 sm:text-sm">Next car</p>
                <p className="text-lg text-left mr-11 text-primary sm:hidden">
                  1973 Mercedez Benz
                </p>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none">
                <path
                  d="M18.5 1.5L28.5 10.7807L18.5 20.5"
                  stroke="#E8DECF"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
                <path
                  d="M27 11H1"
                  stroke="#E8DECF"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
