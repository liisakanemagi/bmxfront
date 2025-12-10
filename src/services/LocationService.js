import axios from "axios";

export default {

    sendPostLocationRequest(userId, location){
        return axios.post('/location', location, {
            params: {
                userId: userId
            }
        })
    },
    sendGetLocationsRequest() {
        return axios.get('/locations')
    },

    sendGetFilteredLocationsRequest() {
        return axios.get('/locations/filtered')
    },

}