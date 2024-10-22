"use client"

import styles from "./page.module.css";
import { ImageGallery } from "react-image-grid-gallery";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faArrowsToEye, faHandFist, faShieldHalved, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

export default function Beranda() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="row">
        <div className={"col d-flex flex-column align-items-center justify-content-center " + styles.welcomeContainer}>
          <div className="w-50">
            <h1 className={styles.fontSizeLg}>
              Spesialis Pemasangan

              <br></br>

              <span className={"text-white " + styles.mainBackgroundColor}>
                <TypeAnimation
                  sequence={[
                    "Membran Bakar",
                    1000,
                    "Epoxy Lantai",
                    1000,
                    "Injeksi Beton",
                    1000,
                    "Coating System",
                    1000,
                    "Membran Tempel",
                    1000,
                    "Floor Hardener",
                    1000
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </span>

              <br></br>

              Terpercaya!
            </h1>

            <p className="mt-4">
              PT. Qiyyama Aretha Solution menyediakan layanan perbaikan kebocoran pada gedung berbahan beton. Kami menawarkan konsultasi melalui survey lokasi untuk memastikan perencanaan perbaikan yang tepat dan sesuai kebutuhan pelanggan. Tim profesional kami fokus pada kenyamanan dan solusi yang terukur untuk setiap masalah yang dihadapi.
            </p>
          </div>
        </div>
      </div>

      {/* Alasan Memilih PT.QAS Section */}
      <div className={"row " + styles.mainBackgroundColor}>
        <div className="col-lg-4 p-5 text-white d-flex flex-column align-items-center justify-content-center">
          <h2 className={styles.fontSizeLg}>Kenapa <span className={"bg-white " + styles.mainFontColor}>Harus Kami</span>?</h2>

          <div className="mt-4 lh-base">
            <p>
              Kami dengan senang hati, mengundang Anda untuk berkonsultasi segala kebutuhan waterproofing dan diarahkan dengan teknisi yang profesional dan tenaga ahli yang berdedikasi tinggi.
            </p>
          </div>

          <div className={"mt-4 p-4 " + styles.borderSquareStripWhite}>
            <div className="mt-4">
              <h3>
                <FontAwesomeIcon icon={faHandFist} size="lg" style={{ color: "white" }} /> <span className={"bg-white " + styles.mainFontColor}>Keseriusan</span> Kami.
              </h3>

              <p className="mt-4">
                Jika anda menginginkan kualitas dengan suasana yang lebih akrab dan ramah, Anda akan menemukannya disini.
              </p>
            </div>

            <div className="mt-4">
              <h3>
                <FontAwesomeIcon icon={faShieldHalved} size="lg" style={{ color: "white" }} /> <span className={"bg-white " + styles.mainFontColor}>Standar</span> Terbaik.
              </h3>

              <p className="mt-4">
                Kami berkomitmen untuk melayani dan menangani berbagai macam bentuk bangunan Anda.
              </p>
            </div>

            <div className="mt-4">
              <h3>
                <FontAwesomeIcon icon={faHandHoldingHeart} size="lg" style={{ color: "white" }} /> <span className={"bg-white " + styles.mainFontColor}>Bahan</span> Terbaik.
              </h3>

              <p className="mt-4">
                Kami telah berinvestasi disemua spesialis alat dan diagnostik terbaru yang dirancang khusus untuk bangunan anda.
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="col-lg-8">
          <ImageGallery
            imagesInfoArray={[
              {
                alt: "Image3's alt text",
                caption: "Image3's description",
                src: "/pemasangan-membran-bakar-1.jpg",
              }
            ]}
            columnCount={1}
            columnWidth={400}
            gapSize={0}
          />
        </div>
      </div>

      {/* Visi & Misi Section */}
      <div className="row row-cols-1 mt-5 mb-5 d-flex align-items-center justify-content-center">
        <div className={"w-50 " + styles.borderSquareStrip}>
          <div className="col ps-5 pt-5 pe-5 pb-3 d-flex flex-column justify-content-center">
            <h2 className={styles.fontSizeLg}>
              <FontAwesomeIcon icon={faArrowsToEye} size="2xl" style={{ color: "#173235", width: "100" }} /> Visi.
            </h2>

            <p className="mt-3 lh-base">
              Memberikan Solusi terbaik dalam memberikan proteksi gedung dari kebocoran Air Hujan dengan Teknologi Waterproofing System dan Pembangunan berkelanjutan dalam bidang konstruksi kualitas terbaik di Indonesia.
            </p>
          </div>

          <div className="col ps-5 pb-5 pe-5 pt-3 d-flex flex-column justify-content-center">
            <h2 className={styles.fontSizeLg}>
              <FontAwesomeIcon icon={faBullseye} size="xl" style={{ color: "#173235", width: "100" }} /> Misi.
            </h2>

            <p className="mt-3 lh-base">
              Meningkatkan daya saing di perusahaan industri jasa konstruksi dengan meningkatkan pelayanan dan teknologi terbaik pada konsumen, dalam memenuhi harapan pemangku kepentingan, serta menyediakan lapangan pekerjaan yang luas.
            </p>
          </div>
        </div>
      </div>

      {/* Layanan Section */}
      <div className="row row-cols-1 mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
        <div className={"col text-white p-5 d-flex flex-column align-items-center justify-content-center " + styles.mainBackgroundColor}>
          <h2 className={"mt-4 mb-4 " + styles.fontSizeLg}><span className={"bg-white " + styles.mainFontColor}>Layanan</span> Kami.</h2>
        </div>
      </div>
    </div>
  );
}
