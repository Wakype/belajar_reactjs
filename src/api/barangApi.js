import axios, { syncToken } from './baseUrl';

export async function getBarang(
  keyword = '',
  hargaMinimal = '',
  hargaMaximum = '',
  isMine = '',
  page = 1,
  pageSize = 7,
) {
  return axios.get(
    `/barang/list-barang?keyword=${keyword}&hargaMinimal=${hargaMinimal}&hargaMaximum=${hargaMaximum}&page=${page}&pageSize=${pageSize}&isMine=${isMine}`
  );
}
export async function tambahBarang(payload) {
  return axios.post(`/barang/create-barang`, payload)
}
export async function updateBarang(payload) {
  return axios.put(`/barang/update-barang`, payload)
}
export async function deleteBarang(id) {
  return axios.delete(`/barang/delete-barang/${id}`)
}
export async function getDetailBarang(id) {
  return axios.get(`/barang/detail-barang/${id}`)
}