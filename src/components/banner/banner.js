import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.Banner_container}>
      <div className="container_desktop">
        <div className={styles.Banner_wrapper}>
          <div className={styles.Banner_heading}>
            <h1>
              Reimagining the Solar Energy Supply Chain, Reimagining Net Zero
              Emissions.
            </h1>
          </div>
          <div className={styles.Banner_content}>
            <p>
              This EPC project developer chose Moglix Business as its strategic
              sourcing and fabrication solutions partner to accelerate the
              commissioning of its solar energy project.
            </p>
          </div>
          <div className={styles.Banner_btn_container}>
            <button className={styles.Banner_btn_why}>Know Why</button>
            <button className={styles.Banner_btn_download}>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
