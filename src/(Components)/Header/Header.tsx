import HeaderDesktop from "@/(Components)/HeaderDesktop/HeaderDesktop";
import HeaderMobile from "@/(Components)/HeaderMobile/HeaderMobile";

function Header() {
  return (
    <>
      <div className="d-none d-xl-block">
        <HeaderDesktop />
      </div>
      <div className="d-xl-none">
        <HeaderMobile />
      </div>
    </>
  );
}

export default Header;
