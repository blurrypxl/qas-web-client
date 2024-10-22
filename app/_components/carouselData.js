"use client"

import styles from '../page.module.css';
import { ImageGallery } from "react-image-grid-gallery";

const galleryOne = [
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/pemasangan-membran-bakar-2.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/dummy-img-1.jpg",
  },
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/pemasangan-membran-bakar-1.jpg",
  }
];

export default function CarouselData() {
  return (
    <div className="carousel-inner">
      <div className={"carousel-item active "}>
        <ImageGallery
          imagesInfoArray={galleryOne}
          columnCount={"auto"}
          columnWidth={300}
          gapSize={15}
        />
      </div>
    </div>
  );
}
