import axios from "axios";

export const loginCall = async (userCredential,dispatch) => {
    dispatch ({type: "LOGIN_START"});
    console.log("dispatch.type=")

    console.log(dispatch)
    
    try{
        const res = await axios.post("/auth/login", userCredential);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        console.log("type:LOGIN_SUCCESS")
    } catch (err){
        dispatch({type: "LOGIN_FAILURE", payload: err});
        console.log("type:LOGIN_FAILURE")

    }
};