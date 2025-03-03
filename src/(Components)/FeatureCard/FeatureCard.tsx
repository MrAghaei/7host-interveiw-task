import Image from "next/image";

//region data types
export interface FeatureCardDataType {
  name: string;
  image: string;
}
interface FeatureCardProps {
  data: FeatureCardDataType;
}
//endregion

function FeatureCard({ data }: FeatureCardProps) {
  return (
    <div className="d-flex align-items-center gap-4" key={data.name}>
      <Image src={data.image} alt={data.name} width={64} height={64} />
      <h3 className="text-custom-light-text3 fs-6 fw-bold">{data.name}</h3>
    </div>
  );
}

export default FeatureCard;
