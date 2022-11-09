import Cookies from "js-cookie";
import axios, { syncToken } from "../baseUrl2";

export async function LoginProses(payload) {
  return axios.post(`/login`, payload);
}

export async function RegisterProses(payload) {
  return axios.post(`/register`, payload);
}

export function authMeProcess() {
  syncToken();
  return axios.get(`/authme`);

  // return axios.get("/authme", {
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get("my_apps_token")}`
  //   }
  // })
}
