import { PageableModel } from "@/(models)/pageable.model";
import { CoinModel } from "@/(models)/coin.model";
import { coinRepoApi } from "@/(repositories)/apis/coin.repo-api";

class UserService {
  // region Request methods
  public async getAllCoins(pageable: PageableModel): Promise<CoinModel[]> {
    const response = await coinRepoApi.getAllCoins(pageable);
    return response.data.map(this._convertCoinResponseDtoToCoinModel);
  }

  public async getCoinById(id: number): Promise<UserModel> {
    const response = await coinRepoApi.getAllCoins(id);
    return this._convertCoinResponseDtoToCoinModel(response.data);
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
      lastUpdated: response.last_updated,
    };
  }
  private _convertUserModelToUserRequestDto(data: UserModel): UserRequestDto {
    return {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
    };
  }
  // endregion
}

export const userService = new UserService();
