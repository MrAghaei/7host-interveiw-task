import Image from "next/image";
import style from "./Hero.module.scss";
import { ChevronRight } from "lucide-react";
function Hero() {
  return (
    <div className="container d-flex py-custom-12 gap-custom-18">
      <div
        className={`d-flex flex-column gap-custom-8 ${style.heroTextSectionSizing}`}
      >
        <h1 className="text-custom-primary fw-bolder fs-custom-12">
          Manage your daily tasks better without all the stress.
        </h1>
        <p className="text-custom-light-text2 fs-4">
          Change the way you manage your tasks with our revolutionary project
          management technology.
        </p>
        <div className="d-flex gap-4">
          <button
            className={`d-flex gap-custom-13 btn btn-custom-secondary text-white ${style.btnSizingSecondary}`}
          >
            Get started
            <ChevronRight />
          </button>
          <button
            className={`btn border border-custom-border text-custom-primary ${style.btnSizingSecondary}`}
          >
            Schedule a Demo
          </button>
        </div>
      </div>
      <Image src={"/hero.png"} alt={"hero"} width={500} height={400} />
    </div>
  );
}

export default Hero;
