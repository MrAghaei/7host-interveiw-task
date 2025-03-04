import { PageableModel } from "@/(models)/pageable.model";
import { baseRepoAPI } from "@/(classes)/base.repo-api";

class CoinRepoApi {
  public async getAllCoins(
    pageable: PageableModel,
  ): Promise<CoinResponseDto[]> {
    return await baseRepoAPI.get("/coins/markets", pageable);
  }
}

export const coinRepoApi = new CoinRepoApi();
