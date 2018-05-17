import axios from 'axios'

export const query = (query) => {
    return axios.post(
        `/api/graphql/`, {query: query}).then(res => res.data)
}