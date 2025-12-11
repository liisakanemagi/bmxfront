import axios from "axios"

export default {
    sendGetTagsRequest(){
        return axios.get('/tags')
    },

    sendPostLocationTagRequest(locationTag) {
        return axios.post('/location/tag', locationTag)
    }
}