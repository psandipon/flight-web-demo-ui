import axios, { AxiosInstance } from "axios";
/**
 * This is a singleton instance of the Axios.
 * More configuration can be added here.
 */
const Axios: AxiosInstance = axios.create({
  // baseURL: '',
});

export default Axios;
