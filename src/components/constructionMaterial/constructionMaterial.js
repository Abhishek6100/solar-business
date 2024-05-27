import React from "react";
import styles from "./constructionMaterial.module.css";
import Image from "next/image";
import solar from "../../../public/img/solar.PNG";
import dotted_background from "../../../public/img/dotted_background.svg";

const ConstructionMaterial = () => {
  return (
    <div className={styles.ConstructionMaterial_background}>
      <div className="container">
        <div className={styles.ConstructionMaterial_container}>
          <div className={styles.ConstructionMaterial_leftbox}>
            <div className={styles.heading}>What You Get</div>
            <div className={styles.ConstructionMaterial_text}>
              Elevate Your Construction Material Procurement & Digital Supply
              Chain with Moglix Business Solutions
            </div>
            <div className={styles.ConstructionMaterial_about}>
              Procure construction raw materials efficiently with persona-
              specific strategies. Enhance supply chain efficiency tailored to
              EPCs, Independent Power Producers, and system integrators in the
              solar energy sector.
            </div>
            <div className={styles.ConstructionMaterial_box}>
              <div className={styles.ConstructionMaterial_boxsize}>
                <h1 className={styles.count}>400+</h1>
                <p className={styles.Categories}>Categories</p>
              </div>
              <div className={styles.ConstructionMaterial_boxsize}>
                <h1 className={styles.count}>50,000++</h1>
                <p className={styles.Categories}>Suppliers</p>
              </div>
            </div>
            <button className={styles.ConstructionMaterial_btn}>
              Explore Solutions
            </button>
          </div>
          <div className={styles.ConstructionMaterial_rightbox}>
            <Image
              src={solar}
              alt="image"
              width={433}
              height={648}
              layout="responsive"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionMaterial;
