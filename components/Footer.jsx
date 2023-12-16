import React, { useState } from "react";
import { useCarsList } from "../app/store/listOfCars";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { subscribeToNewsletter } = useCarsList();

  const handleSubmitCallback = (status, response) => {
    console.log(status, response);
  };

  const onSubmit = () => {
    const data = { email, name };
    if(email.length === 0 || name.length === 0){
      setErrorMessage("All fields are mandatory")
    }else if(!(emailRegex.test(email))){
      setErrorMessage("Please enter a valid email")
    }else{
      setErrorMessage('')
      subscribeToNewsletter(data, handleSubmitCallback);
    }    
  };

  const onNameChange = (event) => {
    setErrorMessage('')
    const nameValue = event.target.value;
    setName(nameValue);
  };

  const onEmailChange = (event) => {
    setErrorMessage('')
    const emailValue = event.target.value;
    setEmail(emailValue);
  };
  return (
    <>
      <div
        className="bg-cover w-full h-[663px] -z-10 absolute bottom-[369px] bg-newsletter"
        style={{ backgroundPositionX: "center" }}
      ></div>
      <section className="mt-28 container sm:mt-[40px] xmd:mt-20">
        <div className="max-w-[660px] mx-auto">
          <h2 className="text-6xl font-black tracking-[-0.869px] text-center md:text-[32px]">
            Signup to Our <span className="font-medium">newsletter</span>
          </h2>
          <h5 className="text-2xl text-center text-grey-body mt-9 md:text-base">
            Industry insight straight to your inbox. We’ll provide you with key
            information to help you determine whether and how much to bid.
          </h5>
          <div className="flex justify-between gap-6 my-14 md:m-[35px_0_18px] md:flex-col">
            <input
              type="text"
              placeholder="Name"
              onChange={onNameChange}
              value={name}
              className="w-1/2 pb-5 text-secondary placeholder:text-secondary placeholder:font-black border-b border-secondary md:w-full md:pb-[14px]"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={onEmailChange}
              value={email}
              className="w-1/2 pb-5 text-secondary placeholder:text-secondary placeholder:font-black border-b border-secondary md:w-full md:pb-[14px]"
            />
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="flex justify-center items-center text-primary w-full h-[77px] box-border p-4 bg-secondary
             transition group hover:text-secondary hover:bg-primary hover:border hover:border-secondary sm:h-12"
          >
            <span className="text-xl font-medium sm:text-base">
              Submit Details
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 md:h-[14px] md:w-[17px]"
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
            >
              <path
                d="M14.0973 1L24 10.2807L14.0973 20"
                stroke="#E8DECF"
                stroke-width="1.5"
                className="group-hover:stroke-secondary"
              />
              <path
                d="M22.8685 10.5001L1 10.3198"
                stroke="#E8DECF"
                stroke-width="1.5"
                className="group-hover:stroke-secondary"
              />
            </svg>
          </button>
          <p className="mb-20 xmd:mb-10 sm:mb-[18px] text-center text-[#ff0000] min-h-[25px]">
            {errorMessage}
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center bg-secondary pt-[66px] pb-[119px] lg:p-12 md:p-10 sm:p-8">
        <svg
          width="80"
          height="100"
          viewBox="0 0 346 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-14 md:h-20"
        >
          <path
            d="M162.604 0.662598C151.404 3.56259 140.204 12.6626 134.804 23.4626C131.504 29.8626 131.404 30.5626 131.404 41.6626C131.404 52.7626 131.504 53.4626 134.804 60.1626C138.504 67.7626 146.504 76.4626 151.804 78.5626L154.904 79.8626V153.763V227.663H172.904H190.904V153.763C190.904 80.3626 190.904 79.7626 192.904 79.1626C196.104 78.1626 206.504 68.0626 209.204 63.3626C216.004 51.8626 216.704 36.3626 211.204 24.3626C206.904 15.2626 200.304 8.4626 191.304 4.06259C184.904 0.862595 182.904 0.362595 175.204 0.0625916C170.404 -0.137405 164.704 0.162598 162.604 0.662598Z"
            fill="#E8DECF"
          />
          <path
            d="M135.404 84.1625C116.504 88.3625 92.8043 98.5625 76.7043 109.363C34.5043 137.763 6.70431 183.063 0.904305 232.963C-0.895695 247.663 0.104305 273.963 2.90431 287.163C12.1043 330.763 36.5043 368.263 72.7043 394.463C83.3043 402.063 106.104 413.563 118.704 417.663C180.104 437.463 246.504 422.163 292.304 377.763C308.404 362.063 319.104 347.463 328.404 328.163C357.104 268.663 349.404 198.463 308.404 146.163C302.004 138.063 288.004 123.963 279.904 117.463C267.604 107.763 250.704 98.1625 234.504 91.6625C225.804 88.2625 205.304 82.6625 201.304 82.6625C199.104 82.6625 198.904 83.0625 198.904 87.1625C198.904 89.9626 199.404 91.8625 200.204 92.0625C200.804 92.2625 206.104 93.5625 211.904 94.8625C272.404 109.263 319.404 158.363 333.004 221.663C335.004 230.663 335.304 235.163 335.304 253.163C335.304 271.163 335.004 275.663 333.004 284.663C318.704 351.463 269.104 400.663 202.704 413.863C188.104 416.763 159.404 417.063 145.404 414.463C87.7043 403.663 41.3043 365.663 20.1043 311.663C11.6043 290.063 7.70431 262.863 9.80431 240.263C14.7043 188.563 40.4043 145.363 83.2043 116.663C98.1043 106.763 120.004 97.4626 137.404 93.7625L145.404 92.0625L145.704 87.3625C146.104 81.9626 145.904 81.8625 135.404 84.1625Z"
            fill="#E8DECF"
          />
          <path
            d="M72.9043 255.762V338.762L159.704 338.462C242.404 338.062 246.704 337.962 253.404 336.162C266.804 332.362 273.704 326.362 277.604 315.362C279.004 311.262 279.404 307.062 279.404 295.662C279.404 281.762 279.304 280.862 276.504 274.962C272.804 266.962 266.904 261.462 257.104 256.962L249.504 253.362L255.404 250.462C263.404 246.462 267.204 242.662 270.504 235.262C273.204 229.562 273.404 228.262 273.404 216.162C273.404 191.562 266.404 180.062 248.404 175.062C244.004 173.862 236.704 173.262 220.604 172.962L198.804 172.462L199.104 188.762L199.404 205.162L213.104 205.662C224.904 206.062 227.204 206.462 229.604 208.262C233.504 211.162 235.904 216.262 235.904 221.962C235.904 228.362 233.604 233.062 229.004 235.862L225.404 238.162L171.204 238.462L116.904 238.762V222.162V205.662H131.404H145.904V189.162V172.662H109.404H72.9043V255.762ZM154.904 287.162V305.662H135.904H116.904V287.162V268.662H135.904H154.904V287.162ZM227.504 270.762C239.004 276.262 238.904 297.062 227.404 303.062C223.904 304.862 221.304 305.162 207.204 305.462L190.904 305.762V287.262V268.662H207.104C221.404 268.662 223.804 268.862 227.504 270.762Z"
            fill="#E8DECF"
          />
        </svg>
        <hr className="container w-full mt-[134px] md:mt-20 sm:mt-9" />
      </div>
    </>
  );
}
