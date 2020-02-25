import React,{useReducer,useState} from "react";
import authContext from "./authContext";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import authReducer from "./authReducer";
import {
REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERRORS} from "../Types";
const AuthState=(props)=>{
	
const initialState={
	token:localStorage.getItem("token"),
	isAuthenticated:null,
	loading:true,
	error:null
	
};
const [state,dispatch]=useReducer(authReducer,initialState);

const register=async(formData)=>{
	const config={
		headers:{
			"Content-Type":"application/json"
		}
	}
	try{
		const res=await axios.post("http://localhost:2000/api/users",formData,config);
		dispatch({type:REGISTER_SUCCESS,payload:res.data});
		loadUser();
	}catch(err){
				console.log(err.response.data.msg);
				dispatch({type:REGISTER_FAIL,payload:err.response.data.msg});
	}
}

const login=async(formData)=>{
	const config={
		headers:{
			"Content-Type":"application/json"
		}
	}
	try{
		const res=await axios.post("http://localhost:2000/api/auth",formData,config);
		dispatch({type:LOGIN_SUCCESS,payload:res.data});
		loadUser();
	}catch(err){
				console.log(err.response.data.msg);
				dispatch({type:LOGIN_FAIL,payload:err.response.data.msg});
	}
}
	
const loadUser=async()=>{
	if(localStorage.token){
		console.log(localStorage.token);
		setAuthToken(localStorage.token);
	}
	try{
	const res=await axios.get("http://localhost:2000/api/auth");
	dispatch({type:USER_LOADED,payload:res.data});
	}
	catch(err){
		dispatch({type:AUTH_ERROR});
	}
}
const logout=()=>{
	dispatch({type:LOGOUT});
}


const clearErrors=()=>{
	dispatch({type:CLEAR_ERRORS});
}


return (
	<authContext.Provider value={{
			token:state.token,
			isAuthenticated:state.isAuthenticated,
			loading:state.loading,
			error:state.error,
			user:state.user,
			register,
			login,
			loadUser,
			clearErrors,
				logout
			
		}}>
	{props.children};
	</authContext.Provider>
)
};
export default AuthState;


