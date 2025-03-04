import Image from "next/image";

function CurrencyHero() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-custom-pink py-custom-18 gap-custom-24">
      <div className="d-flex flex-column gap-custom-8">
        <h1 className="fs-custom-12 fw-bolder">
          Today’s Cryptocurrency prices
        </h1>
        <p className="fs-4">
          The global crypto market cap is{" "}
          <span className="fw-bold">$1.86T</span>
        </p>
      </div>
      <Image
        src={"/currencyHero.png"}
        alt={"currency hero"}
        width={520}
        height={385}
      />
    </div>
  );
}

export default CurrencyHero;
