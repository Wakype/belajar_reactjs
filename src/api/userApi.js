import axios, { syncToken } from './baseUrl';

export async function getPetugsas(
  role = '',
  username = '',
  namaPetugas = '',
  page = 1,
  pageSize = 5
) {
  return axios.get(
    `/petugas/list-petugas?role=${role}&username=${username}&namaPetugas=${namaPetugas}&page=${page}&pageSize=${pageSize}`
  );
}

export async function getPetugasById(id) {
  return axios.get(`/petugas/list-petugas/${id}`)
}
export async function updatePetugas(payload) {
  return axios.put(`/petugas/update-petugas`, payload)
}