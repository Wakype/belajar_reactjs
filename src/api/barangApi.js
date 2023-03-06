import axios, { syncToken } from './baseUrl';

export async function getBarang(
  keyword = '',
  hargaMinimal = '',
  hargaMaximum = '',
  page = 1,
  pageSize = 5
) {
  return axios.get(
    `/barang/list-barang?keyword=${keyword}&hargaMinimal=${hargaMinimal}&hargaMaximum=${hargaMaximum}&page=${page}&pageSize=${pageSize}`
  );
}
export async function tambahBarang(payload) {
  return axios.post(`/barang/create-barang`, payload)
}