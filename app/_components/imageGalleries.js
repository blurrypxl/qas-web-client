"use client"

import { ImageGallery } from "react-image-grid-gallery";

export default function ImageGalleries(imagesArray, colCount = "auto", colWidth = 230) {
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={colCount}
      columnWidth={colWidth}
      gapSize={10}
    />
  );
}
