import React from "react";
import styles from "./forCeoData.module.css";
import Image from "next/image";

const ForCeoData = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.ForCeoData_container}>
        <div key={data?.id} className={styles.ForCeoData_wrapper}>
          <div className={styles.ForCeoData_left}>
            <Image
              src={data?.image}
              width={500}
              height={600}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className={styles.ForCeoData_right}>
            <div className={styles.ForCeoData_heading}>{data?.forceo}</div>
            <div className={styles.ForCeoData_complete}>{data?.heading}</div>
            <div className={styles.ForCeoData_solutions}>{data?.solutions}</div>

            <div className={styles.ForCeoData_complete}>{data?.budget}</div>
            <div className={styles.ForCeoData_solutions}>
              {data?.budgetContent}
            </div>

            <div className={styles.ForCeoData_complete}>{data?.Depoly}</div>
            <div className={styles.ForCeoData_solutions}>{data?.tracking}</div>
            <button className={styles.ForCeoData_btn}>{data?.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCeoData;
