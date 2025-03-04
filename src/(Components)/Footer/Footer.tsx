import Logo from "@/(Components)/Logo/Logo";
import Image from "next/image";
import DarkModeToggle from "@/(Components)/DarkModeToggle/DarkModeToggle";

function Footer() {
  return (
    <footer className="container d-flex flex-column align-items-center mt-custom-24 py-custom-12 gap-custom-16">
      <div className="d-flex w-100 justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <Logo />
          <DarkModeToggle />
        </div>
        <div className="row row-cols-2 g-2">
          <div className="col">
            <button className="btn fw-bold fs-6 text-custom-light-text1">
              Pricing
            </button>
          </div>
          <div className="col">
            <button className="btn fw-bold fs-6 text-custom-light-text1">
              Terms of Service
            </button>
          </div>
          <div className="col">
            <button className="btn fw-bold fs-6 text-custom-light-text1">
              How it Works
            </button>
          </div>
          <div className="col">
            <button className="btn fw-bold fs-6 text-custom-light-text1">
              Privacy Policy
            </button>
          </div>
          <div className="col">
            <button className="btn fw-bold fs-6 text-custom-light-text1">
              FAQ
            </button>
          </div>
        </div>
        <div className="d-flex gap-custom-8">
          <Image
            src={"/instagram.svg"}
            alt={"instagram logo"}
            width={48}
            height={48}
          />
          <Image
            src={"/twitter.svg"}
            alt={"twitter logo"}
            width={48}
            height={48}
          />
          <Image
            src={"/facebook.svg"}
            alt={"facebook logo"}
            width={48}
            height={48}
          />
        </div>
      </div>
      <div>
        <p>
          <span className="fs-6 fw-bold text-custom-footer-text1">
            Made with ❤️ by{" "}
          </span>
          <a
            href={"https://www.7ho.st/"}
            target="_blank"
            className="link-underline-custom-primary text-custom-primary"
          >
            7ho.st
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
