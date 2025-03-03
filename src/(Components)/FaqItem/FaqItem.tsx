import { CircleMinus, CirclePlus } from "lucide-react";

//region data types
interface FaqItemDataProps {
  heading: string;
  text: string;
  isActive: boolean;
}
interface FaqItemProps {
  data: FaqItemDataProps;
  handleClick: () => void;
}
//endregion

function FaqItem({ data, handleClick }: FaqItemProps) {
  return (
    <div className="border-bottom py-4">
      <div className="d-flex justify-content-between">
        <h4 className="fw-medium fs-4 text-custom-faq-text2">{data.heading}</h4>
        <div role="button" onClick={handleClick}>
          {data.isActive ? <CircleMinus /> : <CirclePlus />}
        </div>
      </div>
      <p
        className={`text-custom-faq-text1 fw-light ${data.isActive ? "" : "d-none"}`}
      >
        {data.text}
      </p>
    </div>
  );
}

export default FaqItem;
