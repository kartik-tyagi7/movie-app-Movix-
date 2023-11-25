import React, { useState } from "react";
import "./style.css";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setSelectedTab(index);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs h-[34px] bg-white rounded-full p-[2px] w-[204px] ">
      <div className="tabItems flex items-center h-[30px] relative">
        {data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectedTab === index ? "active" : ""}`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          );
        })}

        <span className="movingBg" style={{ left: left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
