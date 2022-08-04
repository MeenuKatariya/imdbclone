
import { Auth_DATA, Auth_ERROR, Auth_LOADING } from "./ActionType"



export const authLoading = () => {
    return {

        type: Auth_LOADING
    };

}

export const authError = () => {
    return {

        type: Auth_ERROR
    };
}

export const authData = (payload) => {
    return {

        type: Auth_DATA,
        payload
    }
}


