import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

class BaseRepoApi {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
      },
    );
  }
  public async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const config: AxiosRequestConfig = params ? { params } : {};
    return this.handleResponse(
      this.instance.get<T>(url, config).then((res) => res.data),
    );
  }
  private async handleResponse<T>(promise: Promise<T>): Promise<T> {
    const response = await promise;
    return response;
  }
}

export const baseRepoAPI = new BaseRepoApi();
