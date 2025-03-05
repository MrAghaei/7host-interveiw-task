import style from "./HeaderDesktop.module.scss";
import Logo from "@/(Components)/Logo/Logo";
import Link from "next/link";
import HeaderMobile from "@/(Components)/HeaderMobile/HeaderMobile";
function HeaderDesktop() {
  return (
    <header className="py-custom-3 border-bottom border-custom-border">
      <div className="container mx-auto row align-items-center">
        <div className="d-flex col gap-custom-25 align-items-center">
          {/* Logo */}
          <div className="col-auto">
            <Logo />
          </div>
          {/* Navigation Links (center) */}
          <div className="d-flex gap-4">
            <button className="btn text-custom-light-text1 fw-semibold">
              Pricing
            </button>
            <button className="btn text-custom-light-text1 fw-semibold">
              How it Works
            </button>
            <button className="btn text-custom-light-text1 fw-semibold">
              FAQ
            </button>
            <Link
              href="/currencies"
              className="btn text-custom-secondary fw-semibold"
            >
              Currencies
            </Link>
          </div>
        </div>

        {/* Sign In and Get Started (right) */}
        <div className="col-auto d-flex gap-3">
          <button
            className={`btn text-custom-light-text1 fw-semibold ${style.btnSizingPrimary}`}
          >
            Sign In
          </button>
          <button
            className={`btn btn-custom-primary ${style.btnSizingPrimary}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
