import axios from "../baseUrl";

export async function getAllUser(pageSize) {
    return axios.get(`/users/${pageSize}`)
}

export async function updateUser(id, user) {
    return axios.put(`/users/update/${id}`, user)
}

export async function deleteUsers(id) {
    return axios.delete(`/users/hapus/${id}`)
}

export async function createUser(user) {
    return axios.post(`/users/create`, user)
}

export async function detailUser(id) {
    return axios.get(`/users/detail/${id}`)
}