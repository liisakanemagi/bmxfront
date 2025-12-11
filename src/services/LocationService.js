import axios from "axios";

export default {

    sendPostLocationRequest(userId, location) {
        return axios.post('/location', location, {
            params: {
                userId: userId
            }
        })
    },

    sendGetLocationRequest(locationId) {
        return axios.get('/location', {
            params: {
                locationId: locationId
            }
        })
    },


    sendGetFilteredLocationsRequest(userId, countyId, locationTypeIds, tagId) {
        return axios.get('/locations/filtered', {
            params: {
                userId: userId,
                countyId: countyId,
                locationTypeIds: locationTypeIds,
                tagId: tagId

            }
        })
    },


}