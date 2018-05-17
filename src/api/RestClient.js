import axios from 'axios'

export const testRestGet = () => {
    return axios.get(`/api/rest/testget/`)
}

