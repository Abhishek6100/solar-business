import React from "react";
import styles from "./ourProject.module.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const OurProject = () => {
  return (
    <div className="container">
      <div className={styles.OurProject_wrapper}>
        <div className={styles.OurProject_left}>
          <div className={styles.OurProject_heading}>Our Projects</div>
          <div className={styles.OurProject_text}>
            Finished Products for Solar Energy Projects
          </div>
          <div className={styles.OurProject_about}>
            Discover the best prices for main equipment, civil works, electrical
            system and balance of supplies for solar energy projects.
          </div>
        </div>
        <div className={styles.OurProject_right}>
          <div className={styles.OurProject_boxsize}>
            <h1 className={styles.OurProject_count}>50+</h1>
            <p className={styles.OurProject_Categories}>
              Projects of <br /> National Importance
            </p>
          </div>
          <div className={styles.OurProject_boxsize}>
            <h1 className={styles.OurProject_count}>54+</h1>
            <p className={styles.OurProject_Categories}>
              EPC Project <br /> Developers
            </p>
          </div>
          <div className={styles.OurProject_boxsize}>
            <h1 className={styles.OurProject_count}>20+</h1>
            <p className={styles.OurProject_Categories}>
              EPC <br />
              Sub-Sectors
            </p>
          </div>
          <Link href="/catalog" legacyBehavior>
            <a className={styles.OurProject_link}>
              <div className={styles.OurProject_box_catalog}>
                <h1 className={styles.OurProject_catalog_content}>
                  Explore Solar Catalog
                </h1>

                <FaArrowRightLong className={styles.OurProject_icon} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
