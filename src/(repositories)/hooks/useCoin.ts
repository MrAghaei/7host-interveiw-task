import { useCallback, useState } from "react";
import { PageableModel } from "@/(models)/pageable.model";
import { coinService } from "@/(repositories)/services/coin.service";
import { CoinModel } from "@/(models)/coin.model";

export function useCoin() {
  const [isAllCoinsFetchLoading, setIsAllCoinsFetchLoading] = useState(false);
  const [isCoinFetchLoading, setIsCoinFetchLoading] = useState(false);
  const [coinsData, setCoinsData] = useState<CoinModel[]>([]);
  const [coinData, setCoinData] = useState<CoinModel>();

  const fetchCoinsData = useCallback(async (pageable: PageableModel) => {
    setIsAllCoinsFetchLoading(true);
    try {
      const data = await coinService.getAllCoins(pageable);
      setCoinsData((prev) => prev.concat(data));
    } finally {
      setIsAllCoinsFetchLoading(false);
    }
  }, []);

  const fetchCoinById = useCallback(async (id: string) => {
    setIsCoinFetchLoading(true);
    try {
      const data = await coinService.getCoinById(id);
      setCoinData(data);
    } finally {
      setIsCoinFetchLoading(false);
    }
  }, []);

  return {
    fetchCoinsData,
    fetchCoinById,
    isAllCoinsFetchLoading,
    isCoinFetchLoading,
    coinsData,
    coinData,
  };
}
