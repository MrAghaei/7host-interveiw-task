import Image from "next/image";

function Header() {
  return (
    <header className="container-fluid py-heading-y px-heading-x border-bottom border-custom-border">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-auto">
          <Image src="/logo.png" alt="logo" width={77} height={20} />
        </div>

        {/* Navigation Links (center) */}
        <div className="col d-flex justify-content-center gap-4">
          <button className="btn text-custom-light-text1 fw-semibold">
            Pricing
          </button>
          <button className="btn text-custom-light-text1 fw-semibold">
            How it Works
          </button>
          <button className="btn text-custom-light-text1 fw-semibold">
            FAQ
          </button>
          <button className="btn text-custom-secondary fw-semibold">
            Currencies
          </button>
        </div>

        {/* Sign In and Get Started (right) */}
        <div className="col-auto d-flex gap-3">
          <button className="btn text-custom-light-text1 fw-semibold">
            Sign In
          </button>
          <button className="btn btn-custom-primary btn-sizing-primary">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
