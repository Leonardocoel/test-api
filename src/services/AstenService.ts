import axios, { AxiosInstance } from "axios";
import { IAstenService } from "./interfaces/IAstenService";

class AstenService implements IAstenService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://plataforma.astenassinatura.com.br/api/",
      timeout: 5000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async api(service: string, params: object): Promise<object> {
    try {
      const { data } = await this.axiosInstance.post(service, {
        token: process.env.ASTEN_TOKEN,
        params,
      });

      return data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }
}

export default AstenService;
