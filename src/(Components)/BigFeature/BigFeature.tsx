import Image from "next/image";
import { ChevronRight } from "lucide-react";
import CustomButton from "@/(Components)/CustomButton/CustomButton";
import style from "./BigFeature.module.scss";

//region data types
export interface BigFeatureDataProps {
  heading: string;
  headingColor: string;
  text: string;
  image: string;
  isRtl: boolean;
}
interface BigFeatureProps {
  data: BigFeatureDataProps;
}
//endregion

function BigFeature({ data }: BigFeatureProps) {
  //region functions
  function hexToRgba(hex, opacity) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  //endregion

  const boxShadowStyle = {
    boxShadow: `-10px 0px 30px ${hexToRgba(data.headingColor, 0.2)}`,
  };
  return (
    <div
      className={`container px-4 p-xl-0 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-custom-18 mt-custom-24 ${data.isRtl ? "flex-xl-row-reverse" : ""}`}
    >
      <Image
        style={boxShadowStyle}
        className={`rounded-circle img-fluid `}
        src={data.image}
        alt={data.heading}
        width={528}
        height={528}
      />
      <div
        className="d-flex flex-column align-items-start"
        style={{ maxWidth: "550px" }}
        dir="ltr"
      >
        <h2 className={`text-${data.headingColor} fw-bold fs-1`}>
          {data.heading}
        </h2>
        <p className="fs-4 text-custom-light-text2">{data.text}</p>
        <div className="align-self-end">
          <CustomButton
            text={"Learn More"}
            rightIcon={<ChevronRight />}
            type={"simple"}
          />
        </div>
      </div>
    </div>
  );
}

export default BigFeature;
