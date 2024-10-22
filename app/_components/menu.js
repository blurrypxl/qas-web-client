import styles from "../page.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <ul className="navbar-nav justify-content-end pe-3">
      <li className="nav-item">
        <Link className={"nav-link " + styles.mainFontColor} aria-current="page" href="/">Beranda</Link>
      </li>

      <li className="nav-item">
        <Link className={"nav-link " + styles.mainFontColor} href="/layanan">Layanan</Link>
      </li>

      <li className="nav-item">
        <Link className={"nav-link " + styles.mainFontColor} href="/tentang-kami">Tentang Kami</Link>
      </li>

      {/* <li className="nav-item">
        <Link className={"nav-link " + styles.mainFontColor} href="/blog">Blog</Link>
      </li> */}

      <li className="nav-item">
        <Link className={"nav-link " + styles.mainFontColor} href="/kontak-kami">Kontak Kami</Link>
      </li>
    </ul>
  );
}
