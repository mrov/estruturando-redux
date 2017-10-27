import axios from "axios";

export function SAVE_TOKEN(user,password){
    return function(dispatch){
        axios.get("https://porquin.com:8081/auth/store?user=" + user + "&" + password + "password=loja32")
        .then((response) => {
            dispatch({type: "SAVE_TOKEN", token: response.data.token})
        })
        .catch((err) => {
            dispatch({type: "AXIOS_ERROR", error: err})
        })
    }
}
