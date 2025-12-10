import axios from "axios"

export default {
    sendGetTagRequest(){
        return axios.get('/tags')
    },

    sendPostLocationTagRequest(locationTag) {
        return axios.post('/location/tag', locationTag)
    }
}