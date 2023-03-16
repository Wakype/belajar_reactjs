import axios, { syncToken } from './baseUrl';

export async function getLelang(
  keyword = '',
  hargaMinimal = '',
  hargaMaximum = '',
  isMine = '',
  page = 1,
  pageSize = 7
) {
  return axios.get(
    `/lelang/list-lelang?keyword=${keyword}&hargaMinimal=${hargaMinimal}&hargaMaximum=${hargaMaximum}&page=${page}&pageSize=${pageSize}&isMine=${isMine}`
  );
}
export async function getLelangHistoriLelangById(
  isMine = '',
  page = 1,
  pageSize = 100,
  id_lelang,
  orderBy = 'DESC'
) {
  return axios.get(
    `/lelang/detail-lelang/histori/${id_lelang}?page=${page}&pageSize=${pageSize}&isMine=${isMine}&orderBy=${orderBy}`
  );
}
export async function updateStatusLelang(payload) {
  return axios.put(`/lelang/update-statusLelang`, payload);
}

export async function createPenawaranBarang(payload) {
  return axios.post(`/lelang/tawar-barang`, payload);
}
