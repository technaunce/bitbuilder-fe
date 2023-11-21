function Filter({ toggleContainer, search, toggleView }) {
  return (
    <div className="flex items-center md:w-full md:pb-[17px] md:border-b md:border-[#3E5152]">
      <div className="flex items-center md:flex-col-reverse md:w-1/2 md:text-sm md:border-r md:border-[#3E5152]">
        <span className="mr-3 text-base text-primary md:mr-0 md:text-sm">
          Filter results
        </span>
        <span
          className="w-9 h-9 border border-primary flex items-center justify-center rounded-full cursor-pointer
                transition group hover:bg-primary child-hover:fill-secondary child-hover:stroke-secondary md:mb-[17px]"
          onClick={toggleContainer}
        >
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2321 13.8713H0.54586H16.2321Z" fill="#E8DECF"/>
                  <path d="M16.2321 13.8713H0.54586" stroke="#E8DECF" stroke-linecap="square"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2321 8.34499H0.54586H16.2321Z" fill="#E8DECF"/>
                  <path d="M16.2321 8.34499H0.54586" stroke="#E8DECF" stroke-linecap="square"/>
                  <circle cx="4.74859" cy="14.0263" r="1.97368" fill="#E8DECF" stroke="#E8DECF"/>
                  <circle cx="11.8541" cy="8.49999" r="1.97368" fill="#E8DECF" stroke="#E8DECF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2321 2.81868H0.54586H16.2321Z" fill="#E8DECF"/>
                  <path d="M16.2321 2.81868H0.54586" stroke="#E8DECF" stroke-linecap="square"/>
                  <circle cx="4.74859" cy="2.97368" r="1.97368" fill="#E8DECF" stroke="#E8DECF"/>
                </svg>
        </span>
      </div>
      {!search && (
      
          <div className="flex items-center md:flex-col-reverse md:w-1/2">
            <span className="ml-6 mr-3 text-base text-primary md:m-0 md:text-sm">
              View by
            </span>
            <div className="flex items-center md:mb-[17px]">
              <span
                className="mr-3 cursor-pointer"
                onClick={() => {
                  setToggleView(false);
                  setView(true);
                }}
              >
                {toggleView ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 37 36"
                    fill="none"
                  >
                    <rect
                      x="9"
                      y="15"
                      width="4.72195"
                      height="4.8"
                      stroke="#E8DECF"
                    />
                    <rect
                      x="16.439"
                      y="15"
                      width="4.72195"
                      height="4.8"
                      stroke="#E8DECF"
                    />
                    <rect
                      x="23.8779"
                      y="15"
                      width="4.72195"
                      height="4.8"
                      stroke="#E8DECF"
                    />
                    <circle cx="18.5" cy="17.5" r="17.5" stroke="#504D4D" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#E8DECF" />
                    <rect
                      x="9"
                      y="15.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#969696"
                    />
                    <rect
                      x="15.439"
                      y="15.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#969696"
                    />
                    <rect
                      x="21.8779"
                      y="15.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#969696"
                    />
                  </svg>
                )}
              </span>
              <span
                onClick={() => {
                  setToggleView(true);
                  setView(false);
                }}
                className={`cursor-pointer`}
                // className={`cursor-pointer ${
                //   toggleView && "child:fill-secondary child:stroke-primary"
                // } child-hover:fill-primary child-hover:stroke-secondary`}
              >
                {!toggleView ? (
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18.5"
                      cy="18.5"
                      r="17.5"
                      fill="#0E2328"
                      stroke="#504D4D"
                    />
                    <rect
                      x="10"
                      y="12"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="16.439"
                      y="12"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="22.8779"
                      y="12"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="10"
                      y="19.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="16.439"
                      y="19.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="22.8779"
                      y="19.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                  </svg>
                ) : (
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18.5"
                      cy="18.5"
                      r="17.5"
                      fill="#E8DECF"
                      stroke="#504D4D"
                    />
                    <rect
                      x="10"
                      y="12"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="16.439"
                      y="12"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="22.8779"
                      y="12"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="10"
                      y="19.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="16.439"
                      y="19.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                    <rect
                      x="22.8779"
                      y="19.2"
                      width="4.72195"
                      height="4.8"
                      stroke="#504D4D"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        
      )}
    </div>
  );
}

export default Filter;
