import styles from "../page.module.css";

export default function SubNavbar() {
  return (
    <div className="container-fluid pt-1 pb-1 d-flex flex-row justify-content-center bg-white">
      <div className={"border border-black row w-100 " + styles.fontSizeSmall}>
        <div className="col">
          <p className={"mb-0 fw-bold " + styles.mainFontColor}><span>Jam Kerja</span> Kami:</p>
        </div>

        <div className="col">
          <div className="d-flex flex-row">

          </div>
        </div>
      </div>
    </div>
  );
}
