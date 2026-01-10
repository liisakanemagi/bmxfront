import axios from "axios";

export default {
    sendPostFavouriteLocationRequest(userId, locationId){
        return axios.post("/favorite/location", null,{
            params:{
                userId: userId,
                locationId: locationId,
            }
        })
    },

    sendDeleteFavoriteLocationRequest(userId, locationId){
        return axios.delete("/favorite/location",{
            params:{
                userId: userId,
                locationId: locationId
            }
        })
    }

}