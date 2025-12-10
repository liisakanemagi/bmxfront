import axios from "axios"

export default {
    sendGetTagRequest(){
        return axios.get('/tags')
    }

}