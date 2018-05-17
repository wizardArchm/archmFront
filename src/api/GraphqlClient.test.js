import axios from 'axios'
import * as GraphqlClient from './GraphqlClient'

axios.defaults.baseURL = `http://localhost:3003`
test(`default test for GraphqlClient.test`, () => {
    return GraphqlClient.query(`{objectList{valueString}}`).then(res => {
        console.log(res.data)
    })
})