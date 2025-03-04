"use client";
import Image from "next/image";
import Link from "next/link";
import { useCoin } from "@/(repositories)/hooks/useCoin";
import { CoinModel } from "@/(models)/coin.model";
import { useEffect, useState } from "react";

function CurrencyList() {
  const { fetchCoinsData, coinsData } = useCoin();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => await fetchCoinsData({ page });
    fetchData().then();
    setPage((prev) => prev + 1);
  }, []);

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
        {coinsData.map((data, index) => (
          <div
            className="d-flex justify-content-between py-custom-4 px-3"
            key={data.name}
          >
            <div className="d-flex align-items-center gap-custom-12">
              <span>{index + 1}</span>
              <Link
                href={`/currencies/${data.symbol}`}
                className="d-flex align-items-center gap-2 btn"
              >
                <Image
                  src={data.image}
                  alt={data.name}
                  width={32}
                  height={32}
                />
                <span className="fw-medium fs-6">{data.name}</span>
                <span className="fw-bold text-custom-light-text4">
                  {data.symbol}
                </span>
              </Link>
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
