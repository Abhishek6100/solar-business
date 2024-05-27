import React from "react";
import Image from "next/image";
import styles from "./catalogData.module.css";

const CatalogData = ({ data }) => {
  return (
    <div>
      <div className={styles.Catalog_steel_maping}>
        {data?.map((item) => {
          return (
            <div className={styles.Catalog_box} key={item?.id}>
              <div className={styles.CatalogData_image}>
                <Image
                  src={item.image}
                  alt={item?.altText}
                  width={180}
                  height={250}
                  layout="responsive"
                />
              </div>
              <div className={styles.Catalog_heading}>{item?.heading}</div>

              <div
                className={`${styles.Catalog_content} ${
                  item.id === 1
                    ? styles.Catalog_content_color
                    : styles.Catalog_content
                }`}
              >
                {item?.desc}
              </div>
              <div className={styles.ExploreBlog_readmore}>
                <button className={styles.Catalog_btn}>
                  {item?.buttontext}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogData;
