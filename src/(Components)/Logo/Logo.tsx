import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        loading={"eager"}
        src="/logoMain.png"
        alt="logo"
        width={77}
        height={20}
      />
    </Link>
  );
}

export default Logo;
