//region data types
import Image from "next/image";

interface CoinDataProps {
  id: number;
  image: string;
  name: string;
  symbol: string;
  price: string;
  lastUpdated: string;
}
//endregion
function CurrencyList() {
  //region data
  const coinData: CoinDataProps[] = [
    {
      id: 1,
      image: "/coinTest.png",
      name: "Cardano",
      symbol: "ADA",
      price: "0.66",
      lastUpdated: "1403/12/05",
    },
    {
      id: 1,
      image: "/coinTest.png",
      name: "Cardano",
      symbol: "ADA",
      price: "0.66",
      lastUpdated: "1403/12/05",
    },
    {
      id: 1,
      image: "/coinTest.png",
      name: "Cardano",
      symbol: "ADA",
      price: "0.66",
      lastUpdated: "1403/12/05",
    },
    {
      id: 1,
      image: "/coinTest.png",
      name: "Cardano",
      symbol: "ADA",
      price: "0.66",
      lastUpdated: "1403/12/05",
    },
    {
      id: 1,
      image: "/coinTest.png",
      name: "Cardano",
      symbol: "ADA",
      price: "0.66",
      lastUpdated: "1403/12/05",
    },
    {
      id: 1,
      image: "/coinTest.png",
      name: "Cardano",
      symbol: "ADA",
      price: "0.66",
      lastUpdated: "1403/12/05",
    },
  ];
  //endregion
  return (
    <div className="container mt-custom-24">
      <div
        className="d-flex flex-column bg-custom-light-faq px-custom-10 py-custom-14"
        style={{ borderRadius: "20px" }}
      >
        <div className="d-flex justify-content-between border-bottom border-custom-currency-border py-custom-3 px-3">
          <div className="d-flex align-items-center  gap-custom-12">
            <span className="fs-custom-3 text-custom-currency-text1 fw-bold">
              #
            </span>
            <span className="fs-custom-3 fw-semibold text-custom-currency-text1">
              Name
            </span>
          </div>
          <div className="d-flex align-items-center gap-custom-12 justify-content-between w-25">
            <span className="fs-custom-3 fw-semibold text-custom-currency-text1">
              Price (USD)
            </span>
            <span className="fs-custom-3 fw-semibold text-custom-currency-text1">
              Last Updated
            </span>
          </div>
        </div>
        {coinData.map((data, index) => (
          <div
            className="d-flex justify-content-between py-custom-4 px-3"
            key={data.id}
          >
            <div className="d-flex align-items-center gap-custom-12">
              <span>{index + 1}</span>
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={32}
                  height={32}
                />
                <span>{data.name}</span>
                <span>{data.symbol}</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-custom-12 justify-content-between w-25">
              <span>{data.price}</span>
              <span>{data.lastUpdated}</span>
            </div>
          </div>
        ))}

        <button
          style={{ borderRadius: "32px" }}
          className="btn btn-custom-primary py-custom-4 px-custom-8 w-25 align-self-center mt-custom-14"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default CurrencyList;
