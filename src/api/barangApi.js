import axios, { syncToken } from "./baseUrl";

export async function getBarang() {
  return axios.get(`/list-barang`);
}