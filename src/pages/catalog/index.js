import React, { useRef, useState, useEffect } from "react";
import styles from "./catalog.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import CatalogData from "../../components/catalogData/catalogData";
import Header from "@/components/haeder/header";
import { catalogDatajson } from "@/components/catalogData/catlogDatajson";
import Contactus from "@/components/contactus/contactus";

const TabValueToLabelMap = {
  steel: "Steel",
  rmc: "RMC",
  aac: "AAC Blocks",
};
const Catalog = () => {
  const [selectedTab, setSelectedTab] = useState("steel");

  const handleChangeHading = () => {
    switch (selectedTab) {
      case "steel":
        return <div>Steel</div>;
      case "rmc":
        return <div>RMC</div>;
      case "aac":
        return <div>AAC Blocks</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <Header />
      <div className="container_desktop">
        <div className={styles.Catalog_container3}>
          <div className={styles.Catalog_subheader}>
            <span className={styles.Catalog_catalog}>
              Catalog <MdKeyboardArrowRight style={{ paddingTop: "5px" }} />
            </span>
            <span className={styles.Catalog_Infrastructure}>
              Infrastructure{" "}
              <MdKeyboardArrowRight style={{ paddingTop: "5px" }} />
            </span>
            <span className={styles.Catalog_civil}>Civil</span>
          </div>

          <div className={styles.Catalog_container}>
            <div className={styles.Catalog_civil}>
              <div className={styles.Catalog_civil_heading}>Civil</div>

              <div className={styles.Catalog_toggle_container}>
                {Object.entries(TabValueToLabelMap).map(
                  ([value, label], index) => {
                    return (
                      <div
                        key={index}
                        className={`${styles.Catalog_toggle_box} ${
                          selectedTab === value
                            ? styles.Catalog_toggle_active
                            : ""
                        }`}
                        onClick={() => setSelectedTab(value)}
                      >
                        <div className={styles.Catalog_toggle_name}>
                          {label}
                        </div>
                        {selectedTab === value && <FaChevronRight />}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <div className={styles.Catalog_right_container}>
              <div className={styles.Catalog_maping_content}>
                {handleChangeHading()}
              </div>
              <CatalogData data={catalogDatajson[selectedTab]} />
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
};

export default Catalog;
