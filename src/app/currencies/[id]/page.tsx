"use client";
import React, { useEffect, useState } from "react";
import Header from "@/(Components)/Header/Header";
import CurrencyHero from "@/(Components)/CurrencyHero/CurrencyHero";
import CurrencyDialog from "@/(Components)/CurrencyDialog/CurrencyDialog";
import { useParams, useRouter } from "next/navigation";
import { useCoin } from "@/(repositories)/hooks/useCoin";

function Page() {
  //region hooks
  const { fetchCoinById, coinData } = useCoin();
  const params = useParams<{ id: string }>();
  const [isDialogActive, setIsDialogActive] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => fetchCoinById(params.id);
    console.log(params);
    fetchData().then();
  }, []);
  //endregion

  //region functions
  function handleDialogClose(): void {
    setIsDialogActive(false);
    router.push("/currencies");
  }
  //endregion

  return (
    <div className="position-relative min-vh-100">
      <Header />
      <CurrencyDialog
        data={coinData}
        isActive={isDialogActive}
        handleDialogClose={handleDialogClose}
      />
      <CurrencyHero />
    </div>
  );
}

export default Page;
