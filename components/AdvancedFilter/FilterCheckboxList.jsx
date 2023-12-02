import React, { useState } from "react";

export default function FilterCheckboxList({ title, itemList, onSelection }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const originalList = [...itemList];
  const topNine = originalList.splice(0, 9);

  const getListElements = () => {
    return (
      <>
        {topNine.map((item, index) => {
          return (
            <li className="flex items-center" key={`${index}${item}${index}`}>
              <input
                onChange={(e) => {
                  onSelection(
                    { label: item, id: index, title: title },
                    e.target.checked
                  );
                }}
                type="checkbox"
                className="mr-5"
              />
              <label className="text-grey-body" htmlFor="">
                {item}
              </label>
            </li>
          );
        })}
        {isExpanded &&
          originalList.map((item, index) => {
            return (
              <li className="flex items-center" key={`${index}${item}${index}`}>
                <input
                  onChange={(e) => {
                    onSelection(
                      { label: item, id: index, title: title },
                      e.target.checked
                    );
                  }}
                  type="checkbox"
                  className="mr-5"
                />
                <label className="text-grey-body" htmlFor="">
                  {item}
                </label>
              </li>
            );
          })}
      </>
    );
  };
  return (
    <div>
      <h6 className="font-medium">{title}</h6>
      <ul className="mt-8 list-none">
        {itemList && getListElements()}
        {itemList.length > 9 && (
          <li
            className="flex items-center justify-center !mt-[27px]"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <p className="mr-[11px] text-cream font-normal tracking-wide">
              {isExpanded ? "View Less" : "View All"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
            >
              <path
                d="M16.147 1.43024L8.71434 9.43024L0.930367 1.43024"
                stroke="#867F73"
                strokeWidth="1.5"
              />
            </svg>
          </li>
        )}
      </ul>
    </div>
  );
}
