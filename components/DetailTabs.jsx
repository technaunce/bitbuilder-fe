"use client";

import React, { useState } from "react";

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState("spec");

  return (
    <div className="hidden lg:block">
      <div className="flex">
        <div className={`font-medium mr-5 ${activeTab === 'spec' ? 'after:content-['*'] after:mb-[17px] after:text-secondary' : 'mm'} md:mr-4`}>Car specifications</div>
        <div className="font-medium">MOT history</div>
      </div>
      <div></div>
    </div>
  );
}
