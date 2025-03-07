"use client";
import Image from "next/image";
import Link from "next/link";
import { useCoin } from "@/(repositories)/hooks/useCoin";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./CurrencyList.module.scss";
import CustomButton from "@/(Components)/CustomButton/CustomButton";

function CurrencyList() {
  //region variables
  const PAGE_NUMBER_TO_SHOW_MORE = 4;
  const MAX_PAGE_NUMBER_TO_SHOW = 11;
  //endregion

  //region functions
  function handleShowMoreClick(): void {
    increasePage();
  }
  function increasePage(): void {
    setPage((prev) => prev + 1);
  }
  //endregion
  //region hooks
  const { fetchCoinsData, coinsData, isAllCoinsFetchLoading } = useCoin();
  const [page, setPage] = useState<number>(1);

  const { ref: lastCoinItemRef, inView } = useInView({
    threshold: 0,
    delay: 2000,
  });

  useEffect(() => {
    if (
      inView &&
      page !== PAGE_NUMBER_TO_SHOW_MORE &&
      page < MAX_PAGE_NUMBER_TO_SHOW - 1
    ) {
      increasePage();
    }
  }, [inView]);

  useEffect(() => {
    const fetchData = async () => await fetchCoinsData({ page });
    fetchData().then();
  }, [page]);
  //endregion

  return (
    <div className="mt-xxl-custom-24 scrollbar-remove">
      <div
        className={`container-xxl d-flex flex-column bg-custom-light-faq px-custom-2 px-xxl-custom-10 py-custom-14 overflow-x-scroll ${style.customBorderRadius}`}
      >
        <div className="row align-items-center justify-content-between  border-bottom border-custom-currency-border py-custom-3 px-3">
          <span
            className={`col-1 text-custom-currency-text1 fw-bold ${style.customFontSizeHeader}`}
          >
            #
          </span>
          <span
            className={`col-5 fw-semibold text-custom-currency-text1 ${style.customFontSizeHeader} col-lg-7`}
          >
            Name
          </span>

          <span
            className={`col-1 fs-custom-3 fw-semibold text-custom-currency-text1 ${style.customFontSizeHeader}`}
          >
            Price (USD)
          </span>
          <span
            className={`col-2 text-end fs-custom-3 fw-semibold text-custom-currency-text1 ${style.customFontSizeHeader}`}
          >
            Last Updated
          </span>
        </div>
        {coinsData.map((data, index) => (
          <div
            ref={coinsData.length - 1 === index ? lastCoinItemRef : null}
            className="row align-items-center justify-content-between py-custom-4 px-3"
            key={data.id}
          >
            <span className="col-1">{index + 1}</span>
            <Link
              href={`/currencies/${data.id}`}
              className="col-5 d-flex align-items-center gap-2 btn col-lg-7"
            >
              <Image
                className="img-fluid"
                src={data.image}
                alt={data.name}
                width={32}
                height={32}
              />
              <span className={`fw-medium ${style.customFontSize}`}>
                {data.name}
              </span>
              <span
                className={`fw-bold text-custom-light-text4 ${style.customFontSize}`}
              >
                {data.symbol}
              </span>
            </Link>

            <span className={`col-1 fw-medium ${style.customFontSize}`}>
              {data.price}
            </span>
            <span
              className={`col-2 fw-medium text-end ${style.customFontSize}`}
            >
              {data.lastUpdated}
            </span>
          </div>
        ))}
        {isAllCoinsFetchLoading && (
          <div className="text-center">Loading...</div>
        )}
        {!isAllCoinsFetchLoading && page === PAGE_NUMBER_TO_SHOW_MORE && (
          <div
            onClick={handleShowMoreClick}
            className="mt-custom-12 align-self-center"
          >
            <CustomButton text="Show More" type="filled" color="primary" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyList;
