"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CurrencyDialog from "@/(Components)/CurrencyDialog/CurrencyDialog";
import { CoinModel } from "@/(models)/coin.model";

function CurrencyDialogWrapper({ coinData }: { coinData: CoinModel }) {
  const [isDialogActive, setIsDialogActive] = useState(true);
  const router = useRouter();

  function handleDialogClose() {
    setIsDialogActive(false);
    router.push("/currencies");
  }

  return (
    <CurrencyDialog
      data={coinData}
      isActive={isDialogActive}
      handleDialogClose={handleDialogClose}
    />
  );
}

export default CurrencyDialogWrapper;
