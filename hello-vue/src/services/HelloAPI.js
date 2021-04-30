import axios from 'axios'

let base = 'api'
export default {
    getHelloMessage() { //get request from 'api'
        return axios.get(base).then(res => { // api decoded in JSON
            return res.data
        })
    }

}