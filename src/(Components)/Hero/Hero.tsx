import Image from "next/image";
import style from "./Hero.module.scss";
import CustomButton from "@/(Components)/CustomButton/CustomButton";
import { ChevronRight } from "lucide-react";
function Hero() {
  return (
    <div className="container d-flex justify-content-between flex-column flex-lg-row py-custom-12 px-custom-8 px-lg-0 text-center text-lg-start gap-custom-18">
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
        <div className="d-flex flex-column flex-lg-row gap-4">
          <CustomButton
            text={"Get Started"}
            color={"secondary"}
            rightIcon={<ChevronRight />}
            type={"filled"}
          />
          <CustomButton text={"Schedule a Demo"} type={"outlined"} />
        </div>
      </div>
      <Image
        loading={"eager"}
        className="img-fluid align-self-center"
        src={"/hero.webp"}
        alt={"hero"}
        width={500}
        height={400}
      />
    </div>
  );
}

export default Hero;
