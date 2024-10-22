import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="navbar-brand" href="/">
      <Image
        src="/logo/Qas-Logo-Transparent.png"
        alt="Logo PT Qiyyama Aretha Solution"
        className="d-inline-block align-text-top"
        width="193"
        height="45"
      />
    </Link>
  );
}
