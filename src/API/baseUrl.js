import axios from "axios";

const client = axios.create({
    baseURL: 'https://belajar-react.smkmadinatulquran.sch.id/api'
})

export default client