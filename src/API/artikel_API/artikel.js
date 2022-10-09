import axios from "../baseUrl2";

export async function getAllArtikel() {
  return axios.get(`/artikel`);
}

export async function createArtikel(payload) {
  console.log("payload =>", payload);

  const formData = new FormData();
  formData.append("judul", payload.judul);
  formData.append("artikel", payload.artikel);
  formData.append("thumbnail", payload.thumbnail);

  return axios.post(`/artikel`, formData);
}

export async function getDetailArtikel(value, payload) {
  return axios.get(`/artikel/${value}`, payload);
}

export async function updateArtikel(id, payload) {
  const formData = new FormData();
  formData.append("judul", payload.judul);
  formData.append("artikel", payload.artikel);
  formData.append("thumbnail", payload.thumbnail);

  return axios.post(`/artikel/update/${id}`, formData)
}

export async function deleteArtikel(id) {
  return axios.post(`/artikel/delete/${id}`)
}
