import { PageableModel } from "@/(models)/pageable.model";
import { CoinModel } from "@/(models)/coin.model";
import { coinRepoApi } from "@/(repositories)/apis/coin.repo-api";
import { convertToPersianDate } from "@/(utilities)/date-utility";
import { DEFAULT_PAGE_SIZE } from "@/(configs)/pageable.config";

class CoinService {
  private readonly DEFAULT_TARGET_CURRENCY_PRICE = "usd";
  // region Request methods
  public async getAllCoins(pageable: PageableModel): Promise<CoinModel[]> {
    const body: CoinRequestDto = {
      vs_currency: this.DEFAULT_TARGET_CURRENCY_PRICE,
      page: pageable.page,
      per_page: pageable.per_page || DEFAULT_PAGE_SIZE,
    };
    const response = await coinRepoApi.getAllCoins(body);
    return response.map(this._convertCoinResponseDtoToCoinModel);
  }

  public async getCoinById(id: string): Promise<CoinModel> {
    const body: CoinRequestDto = {
      vs_currency: this.DEFAULT_TARGET_CURRENCY_PRICE,
      ids: id,
    };
    const response = await coinRepoApi.getAllCoins(body);
    return this._convertCoinResponseDtoToCoinModel(response[0]);
  }
  // endregion

  // region Adapter methods
  private _convertCoinResponseDtoToCoinModel(
    response: CoinResponseDto,
  ): CoinModel {
    return {
      id: response.id,
      image: response.image,
      name: response.name,
      symbol: response.symbol,
      price: response.current_price,
      lastUpdated: convertToPersianDate(response.last_updated),
    };
  }
  // endregion
}

export const coinService = new CoinService();
