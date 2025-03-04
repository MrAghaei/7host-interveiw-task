"use client";
import React, { useState } from "react";
import Header from "@/(Components)/Header/Header";
import CurrencyHero from "@/(Components)/CurrencyHero/CurrencyHero";
import CurrencyDialog from "@/(Components)/CurrencyDialog/CurrencyDialog";
import { useRouter } from "next/navigation";

function Page() {
  //region data
  const data = {
    id: 1,
    image: "/coinTest.png",
    name: "Cardano",
    symbol: "ADA",
    price: "0.66",
    lastUpdated: "1403/12/05",
  };
  //endregion
  //region hooks
  const [isDialogActive, setIsDialogActive] = useState(true);
  const router = useRouter();
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
        data={data}
        isActive={isDialogActive}
        handleDialogClose={handleDialogClose}
      />
      <CurrencyHero />
    </div>
  );
}

export default Page;
