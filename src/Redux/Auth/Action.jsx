
import { Auth_DATA, Auth_ERROR, Auth_LOADING, SIGN_OUT } from "./ActionType"



export const authLoading = () => {
    return {

        type: Auth_LOADING
    };

}

export const signOut = () => {
    return {

        type: SIGN_OUT
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


