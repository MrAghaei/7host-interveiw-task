import Image from "next/image";

//region data types
export interface FeatureCardDataProps {
  name: string;
  image: string;
}
interface FeatureCardProps {
  data: FeatureCardDataProps;
}
//endregion

function MiniFeatureCard({ data }: FeatureCardProps) {
  return (
    <div className="d-flex align-items-center gap-4" key={data.name}>
      <Image
        className="img-fluid"
        src={data.image}
        alt={data.name}
        width={64}
        height={64}
      />
      <h3 className="text-custom-light-text3 fs-6 fw-bold">{data.name}</h3>
    </div>
  );
}

export default MiniFeatureCard;
