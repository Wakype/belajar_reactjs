import axios from "axios";

const clientLogin = axios.create({
    baseURL: 'https://api-react-2.herokuapp.com/api'
})

export default clientLogin