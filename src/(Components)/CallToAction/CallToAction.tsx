import CustomButton from "@/(Components)/CustomButton/CustomButton";
import Image from "next/image";
import style from "./CallToAction.module.scss";
import { ChevronRight } from "lucide-react";

function CallToAction() {
  return (
    <div className="mt-custom-24 ">
      <div
        className={`container-xxl overflow-hidden position-relative
         d-flex flex-column flex-xxl-row bg-custom-slider-inactive-button
          px-custom-8 px-xxl-custom-20 gap-custom-12 gap-xxl-0 py-custom-30 justify-content-between
           align-items-center text-center text-xxl-start ${style.customBorderRadius}`}
      >
        <Image
          className="position-absolute top-0 start-0 z-0 opacity-25"
          src={"/ctaPattern.png"}
          alt={"cta pattern"}
          width={1500}
          height={1000}
        />
        <div className="d-flex align-items-center align-items-xxl-start gap-custom-8 gap-xxl-custom-6 flex-column  z-1">
          <h2 className="d-flex flex-column text-custom-primary fw-bolder fs-custom-9">
            <span>Risk-free 30 day trial to</span>
            <div>
              <span className="text-custom-secondary"> level up</span>
              <span> your team’s productivity.</span>
            </div>
          </h2>
          <p
            className="fw-normal fs-4 text-custom-primary"
            style={{ maxWidth: "80%" }}
          >
            Get started now and take advantage of our 30 day free trial today.
            No credit card required.
          </p>
        </div>
        <div className={`z-1 align-self-xxl-end ${style.customWidth}`}>
          <CustomButton
            text={"Get Started"}
            color={"secondary"}
            rightIcon={<ChevronRight />}
            type={"filled"}
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
