import Image from "next/image";
import { ChevronRight } from "lucide-react";
import CustomButton from "@/(Components)/CustomButton/CustomButton";
import "./BigFeature.scss";

//region data types
export interface BigFeatureDataProps {
  heading: string;
  color: "red" | "orange" | "purple";
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

  //endregion

  return (
    <div
      className={`big-feature container px-4 p-xl-0 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-custom-18 mt-custom-24 ${data.isRtl ? "flex-xl-row-reverse" : ""} ${data.color}`}
    >
      <Image
        className="rounded-circle img-fluid custom-img"
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
        <h2 className="title fw-bold fs-1">{data.heading}</h2>
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
