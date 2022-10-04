import axios from "./baseUrlLogin";

export async function LoginProses(payload) {
    return axios.post(`/login`, payload)
}

export async function RegisterProses(payload) {
    return axios.post(`/login`, payload)
}