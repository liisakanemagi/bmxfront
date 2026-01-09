import axios from "axios";

export default {
    sendPostFavouriteLocationRequest(userId, locationId){
        return axios.post("/favorite/location", null,{
            params:{
                userId: userId,
                locationId: locationId,
            }
        })
    }
}