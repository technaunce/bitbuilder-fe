import React from "react";
import SlideDual from "../../components/SliderDual";
import Accordion from "../../components/ui/Accordion";
import Header from "../../components/Header";
import DetailTabs from "../../components/DetailTabs";
import Graph from "./chart";

const Details = () => {
  //dummy test data
  const content = [
    {
      title: "Reason(s) for failure",
      desc: "Offside Front Brake hose excessively deteriorated (3.6.B.4d)",
    },
  ];

  return (
    <>
      <Header isHome={false}/>
      <SlideDual />
      <section className="container mx-auto mb-10">
        <div className="flex justify-between lg:flex-col lg:mt-9 ">
          <div className="w-3/5 mr-28 lg:mr-0 lg:w-full">
            <SubmitBtn view={'mob'}  />
            <h6 className="text-2xl font-medium mb-5 lg:text-xl mt-[17px]">Description</h6>
            <p className="text-2xl text-grey-body leading-[34px] mb-8 lg:text-base md:mb-5">
              This is a handsome and substantially restored example of the
              characterful and highly sought-after Mercedes-Benz 250 SL. While
              some attention could next be paid to the interior to restore the
              vehicle to its full former glory, this stylish 1960s convertible
              is offered with an appealing specification, and is ready to
              delight another enthusiast.
            </p>
            <p className="tracking-[0.2px] text-cream">Read more</p>
            <hr className="h-[1px] w-full mt-9 mb-10 bg-grey-keyline" />
            <h6 className="mb-5 text-2xl font-medium lg:text-xl ">Mileage</h6>
            <p className="text-2xl text-grey-body leading-[34px] mb-8 lg:text-base md:mb-5">
              This car had done 100,000 miles at its last MOT on DATE with
              10,000 of those in the past year
            </p>
            <hr className="h-[1px] w-full mt-9 mb-10 bg-grey-keyline" />
            <DetailTabs/>
            <h6 className="mb-5 text-2xl font-medium lg:text-xl">Average price</h6>
            <p className="text-2xl text-grey-body leading-[34px] mb-8 lg:text-base md:mb-5">
              Average price for all vehicles of this type In the last 12 months
            </p>
            <div className="flex justify-between w-full pr-16 md:flex-col">
              <div>
                <p className="text-5xl tracking-[1.8px] lg:text-[40px] lg:tracking-[1.5px]">£35,000</p>
                <p className="text-grey-body">From Auction</p>
              </div>
              <div className="w-[1px] h-[88px] bg-grey-keyline md:hidden"></div>
              <div className="md:mt-6">
                <p className="text-5xl tracking-[1.8px] lg:text-[40px] lg:tracking-[1.5px]">£28,000</p>
                <p className="text-grey-body">From Classified listings</p>
              </div>
            </div>
            <hr className="h-[1px] w-full mt-9 mb-10 bg-grey-keyline" />
            <h6 className="mb-5 text-2xl font-medium lg:text-xl">Price history</h6>
            <p className="text-2xl text-grey-body leading-[34px] mb-8 lg:text-base md:mb-5">
              {/* Graph goes here */}
              <Graph/>
            </p>
            <hr className="h-[1px] w-full mt-9 mb-10 bg-grey-keyline" />
            <h6 className="mb-5 text-2xl font-medium lg:text-xl">Availability</h6>
            <p className="text-2xl text-grey-body leading-[34px] mb-8 lg:text-base md:mb-5">
              There are currently 10 1967 Mercedes-Benz 250 SL Pagoda in live
              auctions and 50 available on Pistonheads classifieds
            </p>
            <hr className="h-[1px] w-full mt-9 mb-10 bg-grey-keyline" />
            <SubmitBtn view={'desk'}  />
            <SubmitBtn view={'mob'}  />
          </div>
          <div className="w-2/5 pl-14 border-l-[1px] border-grey-keyline lg:border-none lg:w-full lg:pl-0">
            <h6 className="text-2xl font-medium leading-8 mb-9">
              Car specifications
            </h6>
            <section className="ml-1 mb-14">
              <p className="text-grey-title tracking-[0.2px] uppercase">make</p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                Mercedes-Benz
              </p>
              <p className="text-grey-title tracking-[0.2px] uppercase">
                model
              </p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                Pagoda
              </p>
              <p className="text-grey-title tracking-[0.2px] uppercase">year</p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                1987
              </p>
              <p className="text-grey-title tracking-[0.2px] uppercase">reg</p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                NSC 215F
              </p>
              <p className="text-grey-title tracking-[0.2px] uppercase">
                Driver’s side
              </p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                LHD
              </p>
              <p className="text-grey-title tracking-[0.2px] uppercase">
                Mileage
              </p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                65/88 kw/hp
              </p>
              <p className="text-grey-title tracking-[0.2px] uppercase">
                Location
              </p>
              <p className="text-2xl leading-[34px] capitalize mb-[18px]">
                England
              </p>
            </section>
            <h6 className="text-2xl font-medium leading-8 mb-9">MOT history</h6>
            <div className="w-full px-10 py-3 mb-5 border border-black">
              <p className="text-xl leading-5 text-center">
                This vehicle's MOT expires soon
              </p>
            </div>
            <hr className="h-[1px] w-full bg-grey-keyline" />
            <Accordion
              title={"Date of test"}
              subtitle={"23 September 2020"}
              passed={true}
              content={content}
            />
            <Accordion
              title={"Date of test"}
              subtitle={"21 September 2020"}
              passed={false}
              contents={content}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const SubmitBtn = ({view}) => {
  return (
    <button className={`flex-col justify-center items-center w-full p-[10px] bg-secondary transition group hover:bg-primary ${view === 'mob' ? 'hidden lg:flex' : 'flex lg:hidden' }  md:text-base`}>
      <div className="flex items-center">
        <span className="text-xl font-medium mr-[7px] text-primary transition group-hover:text-secondary">
          Bid Now
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none">
          <path
            d="M20.7146 6.66526L21.4363 6.86927L21.6509 6.1102L20.8819 5.93417L20.7146 6.66526ZM20.5 7.42433L21.2217 7.62834L21.2217 7.62834L20.5 7.42433ZM19.9457 6.48923L20.113 5.75814L20.113 5.75814L19.9457 6.48923ZM9.30113 4.05238L9.4685 3.3213L9.4685 3.3213L9.30113 4.05238ZM8.57005 3.88501L8.73741 3.15393L8.00633 2.98656L7.83896 3.71765L8.57005 3.88501ZM8.23531 5.34719L7.50423 5.17982L7.33686 5.91091L8.06794 6.07828L8.23531 5.34719ZM8.9664 5.51456L8.79903 6.24564L8.79903 6.24564L8.9664 5.51456ZM17.4405 7.45454L17.8155 8.10406L19.4689 7.14949L17.6079 6.72345L17.4405 7.45454ZM3.42354 15.5473L3.04854 14.8977L2.39902 15.2727L2.77402 15.9223L3.42354 15.5473ZM4.17354 16.8463L3.52402 17.2213L3.89902 17.8708L4.54854 17.4958L4.17354 16.8463ZM4.82305 16.4713L4.44805 15.8218L4.82305 16.4713ZM18.6386 8.49489L19.3603 8.6989L19.8626 6.92222L18.2636 7.84537L18.6386 8.49489ZM16.0203 17.7574L15.2986 17.5534L15.2986 17.5534L16.0203 17.7574ZM15.8163 18.4791L15.0946 18.2751L14.8906 18.9969L15.6123 19.2009L15.8163 18.4791ZM17.2598 18.8872L17.0558 19.6089L17.7775 19.8129L17.9815 19.0912L17.2598 18.8872ZM17.4638 18.1654L18.1855 18.3695L18.1855 18.3695L17.4638 18.1654ZM19.9929 6.46125L19.7783 7.22032L21.2217 7.62834L21.4363 6.86927L19.9929 6.46125ZM19.7783 7.22032L20.5472 7.39635L20.8819 5.93417L20.113 5.75814L19.7783 7.22032ZM9.13377 4.78347L19.7783 7.22032L20.113 5.75814L9.4685 3.3213L9.13377 4.78347ZM8.40268 4.6161L9.13377 4.78347L9.4685 3.3213L8.73741 3.15393L8.40268 4.6161ZM8.9664 5.51456L9.30113 4.05238L7.83896 3.71765L7.50423 5.17982L8.9664 5.51456ZM9.13377 4.78347L8.40268 4.6161L8.06794 6.07828L8.79903 6.24564L9.13377 4.78347ZM17.6079 6.72345L9.13377 4.78347L8.79903 6.24564L17.2732 8.18563L17.6079 6.72345ZM4.44805 15.8218L17.8155 8.10406L17.0655 6.80502L3.69805 14.5227L4.44805 15.8218ZM3.79854 16.1968L4.44805 15.8218L3.69805 14.5227L3.04854 14.8977L3.79854 16.1968ZM4.82305 16.4713L4.07305 15.1723L2.77402 15.9223L3.52402 17.2213L4.82305 16.4713ZM4.44805 15.8218L3.79854 16.1968L4.54854 17.4958L5.19805 17.1208L4.44805 15.8218ZM18.2636 7.84537L4.44805 15.8218L5.19805 17.1208L19.0136 9.14441L18.2636 7.84537ZM16.7421 17.9614L19.3603 8.6989L17.9169 8.29088L15.2986 17.5534L16.7421 17.9614ZM16.5381 18.6832L16.7421 17.9614L15.2986 17.5534L15.0946 18.2751L16.5381 18.6832ZM17.4638 18.1654L16.0203 17.7574L15.6123 19.2009L17.0558 19.6089L17.4638 18.1654ZM16.7421 17.9614L16.5381 18.6832L17.9815 19.0912L18.1855 18.3695L16.7421 17.9614ZM19.7783 7.22032L16.7421 17.9614L18.1855 18.3695L21.2217 7.62834L19.7783 7.22032Z"
            fill="#E8DECF"
            className="group-hover:fill-secondary"
          />
        </svg>
      </div>
      <span className="text-sm text-cream transition group-hover:text-secondary md:text-[12px]">
        (collectingcars.com)
      </span>
    </button>
  );
};

export default Details;
