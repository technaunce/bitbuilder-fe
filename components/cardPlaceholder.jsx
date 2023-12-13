import ProductCard from "./ProductCard";
// import PlaceholderImage from '../asset/carPlaceholder.jpg'

export default function CardPlaceholder({ loading }) {
  return (
    <div className="w-[100%] max-w-[476px] ml-[50px]">
      <ProductCard
        id={"0"}
        imageUrl={"../asset/carPlaceholder.jpg"}
        EndTime={"6:00:00"}
        CurrentPrice={""}
        numberOfBids={""}
        title={loading ? "Loading Data" : "No Data"}
        description={
          loading ? "Please wait" : "No data to display under this category."
        }
        driveMode={""}
        numberOfMiles={""}
        auctionDate={" -- -- -- "}
      />
    </div>
  );
}
