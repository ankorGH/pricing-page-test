import axios from "axios";

export default class PricingApi {
  static baseURL = "https://5eaee82b0605ed0016d2c582.mockapi.io";

  static subscribe(payload) {
    return axios.post(`${this.baseURL}/subscribe`, payload);
  }
}
