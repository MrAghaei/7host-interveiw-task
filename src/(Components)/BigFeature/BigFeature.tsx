import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
  return (
    <div
      className={`container px-4 p-xl-0 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-custom-18 mt-custom-24 ${data.isRtl ? "flex-xl-row-reverse" : ""}`}
    >
      <Image
        className="rounded-circle img-fluid"
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
        <button className="d-flex gap-3 btn text-custom-primary align-self-end">
          <p>Learn More</p>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default BigFeature;
