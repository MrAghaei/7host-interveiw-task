import Image from "next/image";
import { CoinModel } from "@/(models)/coin.model";

//region data types
interface CurrencyDialogProps {
  data: CoinModel;
  isActive: boolean;
  handleDialogClose: () => void;
}
//endregion
function CurrencyDialog({
  data,
  isActive,
  handleDialogClose,
}: CurrencyDialogProps) {
  if (!isActive) return null;
  return (
    <div className="w-100 h-100 start-0 top-0 position-absolute row justify-content-center align-items-center custom-backdrop">
      <div
        className="d-flex gap-custom-12 flex-column bg-white px-custom-4 pb-custom-10 pt-custom-3 w-50 "
        style={{ borderRadius: "20px" }}
      >
        <div className="d-flex justify-content-between">
          <Image
            src={"/currencyLogo.png"}
            alt={"logo"}
            width={150}
            height={32}
          />
          <button onClick={handleDialogClose} className="btn">
            <Image src={"/xIcon.svg"} alt={"x icon"} width={48} height={48} />
          </button>
        </div>

        <div className="d-flex flex-column gap-custom-3">
          <div className="d-flex align-items-center justify-content-between gap-2">
            <div>
              <Image
                src={data.image}
                alt={data.name}
                width={56}
                height={56}
                className="me-custom-3"
              />
              <span className="fw-medium fs-6 me-1">{data.name}</span>
              <span className="fw-bold text-custom-light-text4">
                {data.symbol}
              </span>
            </div>
            <div>
              <span className="fs-6 text-custom-light-text2">
                {data.lastUpdated} Updated
              </span>
            </div>
          </div>
          <div>
            <span className="fs-custom-10 fw-bold">
              {data.price} <span className="text-custom-secondary ">USD</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyDialog;
