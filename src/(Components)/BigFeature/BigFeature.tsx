import Image from "next/image";
import { ChevronRight } from "lucide-react";

//region data types
export interface BigFeatureDataType {
  heading: string;
  headingColor: string;
  text: string;
  image: string;
  direction: string;
}
interface BigFeatureProps {
  data: BigFeatureDataType;
}
//endregion

function BigFeature({ data }: BigFeatureProps) {
  return (
    <div
      className="container d-flex align-items-center gap-custom-18 mt-custom-24"
      dir={data.direction}
    >
      <Image
        className="rounded-circle"
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
