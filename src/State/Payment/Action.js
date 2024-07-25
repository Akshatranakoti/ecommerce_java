import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./Reducer";

import { api } from "../../config/apiConfig";



export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST })

    try {
         console.log("action.js orderId:", orderId)
        const { data } = await api.post(`/api/payments/${orderId}`,{});
         
        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
        }
       

    }
    catch (error) {
        console.log("catch error:",error)
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message })
    }
}


export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST })

    try {
        console.log("updatePayment", reqData.paymentId,reqData.orderId)
        
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

      
        console.log("update payment :-",data);
        

    }
    catch (error) {
        console.log("catch error:",error)
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message })
    }
}