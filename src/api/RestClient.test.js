import * as RestClient from './RestClient'
import axios from 'axios'

axios.defaults.baseURL = `http://localhost:3003`
test(`default test for RestClient.test`, () => {
    return RestClient.testRestGet().then(res => {
        console.log(res.data)
        expect(res.data).toBe(`hello world from restful api`)
    })
})