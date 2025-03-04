import { baseRepoAPI } from "@/(classes)/base.repo-api";
import { BASE_URL } from "@/(configs)/api.config";

class CoinRepoApi {
  public async getAllCoins(
    request: CoinRequestDto,
  ): Promise<CoinResponseDto[]> {
    const url = new URL(BASE_URL);
    url.search = new URLSearchParams(request).toString();
    console.log(request);
    return await baseRepoAPI.get("/coins/markets", request);
  }
}

export const coinRepoApi = new CoinRepoApi();
