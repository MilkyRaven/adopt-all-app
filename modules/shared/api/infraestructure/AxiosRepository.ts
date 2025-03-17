import axios from "axios";
import { Http } from "../domain/Http";

export class AxiosRepository implements Http {
  get(url: string): Promise<any> {
    return axios.get(url).then((response) => response.data);
  }
  post(url: string, data: any): Promise<any> {
    return axios.post(url, data).then((response) => response.data);
  }
  put(url: string, data: any): Promise<any> {
    return axios.put(url, data).then((response) => response.data);
  }
  delete(url: string): Promise<any> {
    return axios.delete(url).then((response) => response.data);
  }
}
