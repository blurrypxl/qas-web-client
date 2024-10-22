import styles from "../page.module.css";

export default function SubNavbar() {
  return (
    <div className={"container-fluid d-flex flex-row jusify-content-center " + styles.mainBackgroundColor}>
      <div className={"row " + styles.fontSizeSmall}>
        <div className="col">
          <p className="mb-0 text-white">Working Hours: Senin s.d Jumat - 08:00 WIB s.d 16:00 WIB</p>
        </div>
      </div>
    </div>
  );
}
