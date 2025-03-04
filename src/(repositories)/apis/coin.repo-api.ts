import { baseRepoAPI } from "@/(classes)/base.repo-api";
import { BASE_URL } from "@/(configs)/api.config";

class CoinRepoApi {
  public async getAllCoins(
    request: CoinRequestDto,
  ): Promise<CoinResponseDto[]> {
    return await baseRepoAPI.get("/coins/markets", request);
  }
}

export const coinRepoApi = new CoinRepoApi();
