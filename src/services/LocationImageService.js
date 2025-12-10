import axios from "axios"

export default {

    sendPostLocationImageRequest(locationImage) {
        return axios.post('/location/image', locationImage)
    }
}