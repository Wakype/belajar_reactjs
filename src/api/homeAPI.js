import axios from './baseUrl';

export async function GetProduct(
  kategori,
  keyword,
  hargaTerendah,
  hargaTertinggi
) {
  return axios.get(
    `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`
  );
}

export async function GetDetailProduct(uuid) {
  return axios.get(`/produk/detail/${uuid}`);
}

export async function GetKategori() {
  return axios.get(`/kategori`);
}

export async function TambahKeranjang(produkId) {
  console.log("id =>", produkId)
  return axios.post(`/keranjang/tambah`, produkId)
}

export async function GetKeranjang() {  
  return axios.get(`/keranjang`)
}

export async function PostBeli(payload) {
  return axios.post(`/beli/tambah`, payload)
}

export async function GetHistory() {
  return axios.get(`/beli/history`)
}

export async function DeleteKeranjang(id) { 
  return axios.delete(`/keranjang/hapus/${id}`)
}