import React, { useEffect, useState } from "react";
import FilterCheckboxList from "./FilterCheckboxList";
import { useFilterStore } from "../../app/store/filter";

export default function AdvancedFilter({ contents, closeItself }) {

  const data = {
    vehicles: [
      {
        _id: "1",
        label: "Car",
      },
      {
        _id: "2",
        label: "Bike",
      },
    ],
    manufacturers: [
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
      {
        _id: "1",
        label: "Porche",
        count: 2,
      },
    ],
    auctionStatus: [
      {
        _id: "1",
        label: "Live",
      },
      {
        _id: "2",
        label: "Sold",
      },
      {
        _id: "3",
        label: "Unsold",
      },
      {
        _id: "4",
        label: "About to go",
      },
    ],
    sellerlabel: [
      {
        _id: "1",
        label: "Private",
        count: 2,
      },
      {
        _id: "2",
        label: "Trade",
        count: 2,
      },
      {
        _id: "3",
        label: "Managed",
        count: 2,
      },
    ],
    Location: [
      {
        _id: "1",
        label: "United Kingdom",
        count: 2,
      },
      {
        _id: "2",
        label: "Austrailia",
        count: 2,
      },
    ],
    auctionSite: [
      {
        _id: "1",
        label: "Site 1",
      },
      {
        _id: "2",
        label: "Site 2",
      },
      {
        _id: "3",
        label: "Site 3",
      },
    ],
  };

  const { context, apply: applyFilter } = useFilterStore();
  const [selectedValues, setSelectedValues] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleFilterSubmit = async () => {
    await applyFilter(selectedValues);
    closeItself();
  };

  const storeFilterSelection = (interactedItem, isItemChecked) => {
    if (isItemChecked) {
      setSelectedValues([...selectedValues, interactedItem]);
    } else {
      setSelectedValues(
        selectedValues.filter((value) => value.label !== interactedItem.label)
      );
    }
  };

  useEffect(() => {
    if (!selectedValues.length) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [selectedValues]);

  useEffect(()=>{
    console.log(contents)
  })

  return (
    <div className="w-full">
      <div className="py-12 mt-12 bg-white px-14 rounded-xl shadow-t1 xmd:p-6">
        <div className="flex flex-wrap justify-between">
          {contents &&
            Object.keys(contents).map((itemList) => {
              return (
                <FilterCheckboxList
                  title={itemList}
                  itemList={contents[itemList]}
                  onSelection={storeFilterSelection}
                ></FilterCheckboxList>
              );
            })}
          {/* <FilterCheckboxList
            title={"Vehicles"}
            itemList={data.vehicles}
            onSelection={storeFilterSelection}
          ></FilterCheckboxList>
          <FilterCheckboxList
            title={"Manufacturers"}
            itemList={data.manufacturers}
          ></FilterCheckboxList>
          <FilterCheckboxList
            title={"Auction Status"}
            itemList={data.auctionStatus}
            onSelection={storeFilterSelection}
          ></FilterCheckboxList>
          <FilterCheckboxList
            title={"Seller type"}
            itemList={data.manufacturers}
            onSelection={storeFilterSelection}
          ></FilterCheckboxList>
          <FilterCheckboxList
            title={"Location"}
            itemList={data.Location}
            onSelection={storeFilterSelection}
          ></FilterCheckboxList>
          <FilterCheckboxList
            title={"Site"}
            itemList={data.auctionSite}
            onSelection={storeFilterSelection}
          ></FilterCheckboxList> */}
        </div>

        <div className="flex justify-center mt-[89px] mb-[29px]">
          <button
            type="button"
            disabled={buttonDisabled}
            onClick={!buttonDisabled && handleFilterSubmit}
            className="w-80 pb-5 pt-4 rounded text-center ease-in-out text-primary bg-secondary font-medium transition-[background-color] hover:text-secondary hover:bg-primary disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
