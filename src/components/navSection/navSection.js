import React, { useState } from "react";
import styles from "./navSection.module.css";
import RenderDataNavBar from "../renderDataNavBar/renderDataNavBar";

const NavSection = () => {
  const [selectedTab, setSelectedTab] = useState(
    "Projects of National Importance"
  );

  const TabNavBar = [
    "Projects of National Importance",
    "Fueling the Future of Solar Energy",
    "Shaping Tomorrow with Solar Energy",
    "Buy Solar Energy Equipment Online",
    "Brand Identity Statement",
  ];

  const handleRenderComponent = () => {
    switch (selectedTab) {
      case "Projects of National Importance":
        return <RenderDataNavBar />;
      case "Fueling the Future of Solar Energy":
        return <div>Fueling the Future of Solar Energy</div>;
      case "Shaping Tomorrow with Solar Energy":
        return <div>Shaping Tomorrow with Solar Energy</div>;
      case "Buy Solar Energy Equipment Online":
        return <div>Buy Solar Energy Equipment Online</div>;
      case "Brand Identity Statement":
        return <div>Brand Identity Statement</div>;
      default:
        return <div>Content not available</div>;
    }
  };
  return (
    <>
      <div className={styles.NavSection_container}>
        {TabNavBar?.map((data, index) => {
          return (
            <div
              key={index}
              className={`${styles.NavSection_heading} ${
                selectedTab === data ? styles.NavSection_toggle_active : ""
              }`}
              onClick={() => setSelectedTab(data)}
            >
              {data}
            </div>
          );
        })}
      </div>
      <div className={styles.NavSection_content}>{handleRenderComponent()}</div>
    </>
  );
};

export default NavSection;
