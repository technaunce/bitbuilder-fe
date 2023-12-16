import React from "react";
import ProductCard from "./ProductCard";

export default function HomeGridCards({ data }) {
  let croppedData = [...data]
  if(data.length > 9){
    croppedData = [...data].splice(0,9)
  }
  
  return (
    <>
      <div className="container grid grid-cols-3 gap-6 my-[34px] lg:grid-cols-2 sm:grid-cols-1">
        {croppedData.map((item, index) => (
          <ProductCard
            key={item._id}
            id={item._id}
            imageUrl={item.images[0]}
            EndTime={"6:00:00"}
            CurrentPrice={item.currentBidPrice}
            numberOfBids={item.numberOfBids}
            title={item.title}
            description={item.description}
            driveMode={item.lhdOrRhdDrive}
            numberOfMiles={item.numberOfMiles}
          />
        ))}
      </div>
    </>
  );
}
