import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({
  imageUrl,
  title,
  EndTime,
  CurrentPrice,
  numberOfBids,
  driveMode,
  numberOfMiles,
  description,
  status = "notstarted",
  auctionDate = "14th October",
}) => {
  const router = useRouter()
  return (
    <div className="shadow-t1 bg-white cursor-pointer" onClick={() => router.push('/details')}>
      <div className="w-full">
        <img className="w-full h-auto" src={imageUrl} alt={title} />
      </div>
      <div className="relative bottom-[38px] rounded-[50px] shadow-t2 w-[88%] bg-white mx-auto sm:w-[94%]">
        <div className={`flex ${ status === "notstarted" ? 'justify-center':'justify-between'} items-center px-[36px] py-[17px] xmd:px-[22px] xmd:py-[14px] sm:px-[16px] sm:py-[11px]`}>
          {status === "notstarted" ? (
            <>
              <div className="text-center">
                <p className="tracking-[0.6px] text-xs text-grey-title sm:text-[10px]">
                  AUCTION STARTED
                </p>
                <p className="tracking-[0.6px] font-medium sm:text-sm">
                  {auctionDate}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                {status === "unsold" ? (
                  <>
                    <p className="tracking-[0.6px] text-xs text-grey-title sm:text-[10px]">
                      Status
                    </p>
                    <p className="font-medium tracking-[0.6px] sm:text-sm">
                      Unsold
                    </p>
                  </>
                ) : (
                  <>
                    <p className="tracking-[0.6px] text-xs text-grey-title sm:text-[10px]">
                      ENDS IN
                    </p>
                    <p className="text-red font-medium sm:text-sm">{EndTime}</p>
                  </>
                )}
              </div>
              <VerticalLine />
              <div className="text-center">
                <p className="tracking-[0.6px] text-xs text-grey-title sm:text-[10px]">
                  CURRENT BID
                </p>
                <p className="tracking-[0.6px] font-medium sm:text-sm">
                  £ {CurrentPrice}
                </p>
              </div>
              <VerticalLine />
              <div className="text-center">
                <p className="tracking-[0.6px] text-xs text-grey-title sm:text-[10px]">
                  BIDS
                </p>
                <p className="tracking-[0.6px] font-medium sm:text-sm">
                  {numberOfBids}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-[-20px] w-[86%] text-center mx-auto sm:w-[94%] sm:mt-[-32px] xmd:mt-[-24px]">
        <h2 className="text-2xl font-medium leading-8 h-8 mb-[9px] line-clamp-1 sm:text-xl sm:mb-[6px] sm:leading-[28px]">
          {title}
        </h2>
        <p className="text-grey-title mb-11 h-12 line-clamp-2 xmd:mb-[36px] xmd:h-[42px] sm:h-[38px] sm:text-sm sm:mb-[29px]">
          {description}
        </p>

        <div className="flex justify-between items-center pb-[29px] xmd:pb-[21px] sm:pb-[16px]">
          <div className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.5 0C3.813 0 0 3.813 0 8.5C0 13.187 3.813 17 8.5 17C13.1867 17 17 13.187 17 8.5C17 3.813 13.1867 0 8.5 0ZM7.79167 15.5475C4.45043 15.2139 1.78605 12.5496 1.45246 9.20833H5.75988C6.01686 10.2015 6.79851 10.9831 7.79167 11.2401V15.5475ZM8.5 7.08333C7.71869 7.08333 7.08333 7.71869 7.08333 8.5C7.08333 9.28131 7.71869 9.91667 8.5 9.91667C9.28131 9.91667 9.91667 9.28131 9.91667 8.5C9.91667 7.71869 9.28131 7.08333 8.5 7.08333ZM9.20833 15.5475V11.2401C10.2015 10.9831 10.9831 10.2015 11.2401 9.20833H15.5475C15.2143 12.5496 12.5496 15.2139 9.20833 15.5475ZM8.5 5.66667C9.81758 5.66667 10.9243 6.57162 11.2401 7.79167H15.5475C15.1909 4.21749 12.1667 1.41667 8.5 1.41667C4.8333 1.41667 1.80905 4.21749 1.45246 7.79167H5.75988C6.07565 6.57162 7.18242 5.66667 8.5 5.66667Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="ml-[10px] sm:ml-[9px]">
              <span className="sm:text-sm">{driveMode}</span>
            </span>
          </div>
          <VerticalLine />

          <div className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                className="sm:w-5 sm:h-3">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.625 11.6455C23.625 8.53489 22.3963 5.61045 20.1652 3.41086C17.9341 1.21132 14.9677 0 11.8125 0C8.65727 0 5.6909 1.21136 3.45977 3.41086C1.22873 5.61045 0 8.53489 0 11.6455V12.3279H9.45997C9.64846 12.8884 10.0308 13.3579 10.5516 13.661C10.9464 13.8908 11.38 14 11.8083 14C12.6576 14 13.486 13.5702 13.9482 12.7985C14.0385 12.6478 14.1107 12.49 14.1659 12.3279H23.625V11.6455ZM12.7562 12.1046C12.4491 12.6176 11.7758 12.7887 11.2554 12.4858C11.0033 12.3391 10.8243 12.1044 10.7513 11.8249C10.6782 11.5454 10.7199 11.2547 10.8688 11.0061C11.0176 10.7576 11.2557 10.5811 11.5392 10.5092C11.6303 10.486 11.7227 10.4746 11.8143 10.4746C12.0079 10.4746 12.1986 10.5255 12.3696 10.6251C12.6217 10.7718 12.8007 11.0065 12.8737 11.286C12.9468 11.5654 12.9051 11.8562 12.7562 12.1046ZM14.2165 10.9549C14.2171 10.9577 14.2177 10.9604 14.2184 10.9632H22.2179C22.126 9.58721 21.7576 8.28469 21.1682 7.10822L19.6311 7.98309L18.939 6.80125L20.4743 5.92738C19.7155 4.81392 18.7421 3.85403 17.6127 3.10599L16.7262 4.61972L15.5274 3.93737L16.415 2.42172C15.2217 1.84063 13.9002 1.47839 12.5046 1.38777V3.13883H11.1203V1.38777C9.72469 1.47839 8.40321 1.84063 7.20992 2.42172L8.09752 3.93737L6.89873 4.61972L6.01224 3.10599C4.88281 3.85403 3.90934 4.81392 3.15057 5.92738L4.68592 6.80125L3.99378 7.98309L2.45672 7.10822C1.8673 8.28469 1.4989 9.58721 1.40698 10.9632H9.40533C9.46283 10.7374 9.55336 10.5184 9.67674 10.3123C10.0135 9.74989 10.5523 9.35044 11.1939 9.18754C11.6054 9.08309 12.0273 9.0845 12.4276 9.18608L14.4166 5.86461L15.6087 6.55843L13.6196 9.8799C13.9033 10.1764 14.1083 10.5399 14.2143 10.9455C14.2151 10.9486 14.2158 10.9518 14.2165 10.9549Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="ml-[10px] sm:ml-[9px]">
              <span className="sm:text-sm">{numberOfMiles} Miles</span>
            </span>
          </div>
          <VerticalLine />
          <div className="">
            <span>
              <img src="../asset/flag.png"></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalLine = () => {
  return (
    <span className="text-grey-keyline h-7 w-[1px] bg-grey-keyline"></span>
  );
};

export default ProductCard;
