import axios from "axios"

export default {
    sendGetTagsRequest() {
        return axios.get('/tags')
    },

    sendPostLocationTagRequest(locationId, tagId) {
        return axios.post('/location/tag', null, {
            params: {
                locationId: locationId,
                tagId: tagId
            }
        })
    }
}