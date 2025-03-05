import Logo from "@/(Components)/Logo/Logo";
import Image from "next/image";
import DarkModeToggle from "@/(Components)/DarkModeToggle/DarkModeToggle";
import style from "./Footer.module.scss";

function Footer() {
  //region data
  const footerLinks = [
    {
      name: "Pricing",
      link: "/ricing",
    },
    {
      name: "Terms of Service",
      link: "/terms",
    },
    {
      name: "How it Works",
      link: "/howitworks",
    },
    {
      name: "Privacy Policy",
      link: "/policy",
    },
    {
      name: "FAQ",
      link: "",
    },
  ];
  //endregion

  return (
    <footer
      className={`container d-flex flex-column align-items-center mt-custom-24 py-custom-12 gap-custom-16 ${style.customWidth}`}
    >
      <div className="d-flex w-100 flex-column gap-5 flex-md-row gap-md-0 align-items-center justify-content-between">
        <div className="d-flex gap-custom-14 flex-column align-self-md-start justify-content-between">
          <Logo />
          <DarkModeToggle />
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-2">
          {footerLinks.map((data) => (
            <div key={data.name} className="col d-flex justify-content-center">
              <button className="btn fw-bold fs-6 text-custom-light-text1 me-auto">
                {data.name}
              </button>
            </div>
          ))}
        </div>
        <div className="d-flex align-self-md-start gap-custom-8">
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
