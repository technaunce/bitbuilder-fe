import React, { useEffect, useState } from "react";
import FilterCheckboxList from "./FilterCheckboxList";
import { useFilterStore } from "../../app/store/filter";

export default function AdvancedFilter({ contents, closeItself }) {
  const { context, apply: applyFilter } = useFilterStore();
  const [selectedValues, setSelectedValues] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleFilterSubmit = async () => {
    console.log("Selected Value: ",selectedValues)
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


  return (
    <div className="w-full">
      <div className="py-12 mt-12 bg-white px-14 rounded-xl shadow-t1 xmd:p-6">
        <div className="flex flex-wrap justify-between">
          {contents &&
            Object.keys(contents).map((itemList) => {
              if(itemList !== '_id'){
                return (
                  <FilterCheckboxList
                    title={itemList}
                    itemList={contents[itemList]}
                    onSelection={storeFilterSelection}
                  ></FilterCheckboxList>
                );

              }
            })}
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
