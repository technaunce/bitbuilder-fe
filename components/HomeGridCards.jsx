import React from "react";
import ProductCard from "./ProductCard";

export default function HomeGridCards() {
  const data = [
    {
      image: "../asset/Bitmap (1).png",
      soldPrice: "270000",
      numberOfBids: 5,
      currentBidPrice: 15000,
      title: "Porsche Cayman 2007",
      subheading:
        "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
      lhdOrRhdDrive: "LHD",
      numberOfMiles: 25000,
      countryIconImage: "https://example.com/flags/usa.png",
    },
    {
      image: "../asset/2007.png",
      soldPrice: "270000",
      numberOfBids: 12,
      currentBidPrice: 27000,
      title: "Porsche Cayman 2007",
      subheading:
        "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
      lhdOrRhdDrive: "LHD",
      numberOfMiles: 1500,
      countryIconImage: "https://example.com/flags/china.png",
    },
    {
      image: "../asset/Bitmap (1).png",
      soldPrice: "270000",
      numberOfBids: 5,
      currentBidPrice: 15000,
      title: "Porsche Cayman 2007",
      subheading:
        "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
      lhdOrRhdDrive: "LHD",
      numberOfMiles: 25000,
      countryIconImage: "https://example.com/flags/usa.png",
    },
    {
      image: "../asset/2007.png",
      soldPrice: "270000",
      numberOfBids: 12,
      currentBidPrice: 27000,
      title: "Porsche Cayman 2007",
      subheading:
        "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
      lhdOrRhdDrive: "LHD",
      numberOfMiles: 1500,
      countryIconImage: "https://example.com/flags/china.png",
    },
    {
      image: "../asset/Bitmap (1).png",
      soldPrice: "270000",
      numberOfBids: 5,
      currentBidPrice: 15000,
      title: "Porsche Cayman 2007",
      subheading:
        "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
      lhdOrRhdDrive: "LHD",
      numberOfMiles: 25000,
      countryIconImage: "https://example.com/flags/usa.png",
    },
    {
      image: "../asset/2007.png",
      soldPrice: "270000",
      numberOfBids: 12,
      currentBidPrice: 27000,
      title: "Porsche Cayman 2007",
      subheading:
        "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
      lhdOrRhdDrive: "LHD",
      numberOfMiles: 1500,
      countryIconImage: "https://example.com/flags/china.png",
    },
  ];
  return (
    <>
      <div className="container grid grid-rows-2 grid-cols-3 gap-6 my-[34px] lg:grid-rows-3 lg:grid-cols-2 sm:grid-rows-6 sm:grid-cols-1">
        hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        {data.map((item, index) => 
          <ProductCard
            key={index}
            imageUrl={item.image}
            EndTime={"6:00:00"}
            CurrentPrice={item.currentBidPrice}
            numberOfBids={item.numberOfBids}
            title={item.title}
            description={item.subheading}
            driveMode={item.lhdOrRhdDrive}
            numberOfMiles={item.numberOfMiles}
          />
        )}
      </div>
    </>
  );
}
