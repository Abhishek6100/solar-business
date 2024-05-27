import React, { useState } from "react";
import styles from "./forCeo.module.css";
import ForCeoData from "@/components/forCeoData/forCeoData";
import dataToShow from "./dataToShow";

const TabValueToLabelMap = {
  ceo: "For CEOs",
  cpo: "For CPOs",
  cfo: "For CFOs",
  pm: "For Project Managers",
};

const ForCeo = () => {
  const [selectedTab, setSelectedTab] = useState("ceo");
  return (
    <div className="conatiner">
      <div className={styles.ForCeo_wrapper}>
        <div className={styles.ForCeo_heading}>
          Procurement Supply Chain Solutions 
        </div>
        <div className={styles.ForCeo_scale}>
          The scale of your solar energy venture, we are here to empower you
        </div>
        <p className={styles.ForCeo_desc}>
          Whether you are a CEO, CPO, CFO, or a Project Manager, Moglix Business
          offers you the <br /> most diversified bouquet of solutions.
        </p>
      </div>

      <div className={styles.ForCeo_tab_wrapper}>
        {Object.entries(TabValueToLabelMap).map(([value, label], index) => {
          return (
            <div
              key={index}
              className={`${styles.ForCeo_tab_content} ${
                selectedTab === value
                  ? styles.ForCeo_tab_active
                  : styles.ForCeo_tab_non_active
              }`}
              onClick={() => setSelectedTab(value)}
            >
              {label}
            </div>
          );
        })}
      </div>

      <ForCeoData data={dataToShow[selectedTab]} />
    </div>
  );
};

export default ForCeo;
