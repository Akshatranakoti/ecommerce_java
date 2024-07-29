import { FIND_PRODUCTS_BY_ID_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS,FIND_PRODUCTS_BY_ID_REQUEST, FIND_PRODUCTS_BY_ID_SUCCESS,FIND_PRODUCTS_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "./ActionType";

import { api, API_BASE_URL } from "../../config/apiConfig";
import { useDispatch } from "react-redux";


export const findProducts=(reqData)=>async(dispatch)=>{

   console.log(`reqdata:${reqData}`);
    dispatch({type:FIND_PRODUCTS_REQUEST})
    
   
    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData;

    try{
      
     
     const {data}=await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
     console.log(data);
     console.log(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    
     console.log("product data",data)
     dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})

    }
    
    catch(error){
        
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})

    }
}


export const findProductsById=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_BY_ID_REQUEST})
   const{productId}=reqData;
   console.log("productId",productId)

    try{
     const {data}=await api.get(`/api/products/id/${productId}`)
     console.log(data);
    
     dispatch({type:FIND_PRODUCTS_BY_ID_SUCCESS,payload:data})
     

    }
    catch(error){
        dispatch({type:FIND_PRODUCTS_BY_ID_FAILURE,payload:error.message})

    }
}

export const createProduct=(product)=>async(dispatch)=>{
    dispatch({type:CREATE_PRODUCT_REQUEST})
  
   console.log("added product")

    try{
        console.log("product",product)
        console.log(`/api/admin/products/`,product)
     const {data}=await api.post(`/api/admin/products/`,product)

     console.log("created Products",data);
    
     dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
     

    }
    catch(error){
        dispatch({type:CREATE_PRODUCT_FAILURE,payload:error.message})

    }
}

export const deleteProduct=(productId)=>async(dispatch)=>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
  
   

    try{
     const {data}=await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`,)
     console.log(data);
    
     dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId})
     

    }
    catch(error){
        dispatch({type:DELETE_PRODUCT_FAILURE,payload:error.message})

    }
}






 
 