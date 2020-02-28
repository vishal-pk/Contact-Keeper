//eslint-disable
import React,{useReducer} from "react";
import uuid from "uuid";
import axios from  "axios";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {ADD_CONTACT,GET_CONTACTS,CLEAR_CONTACTS,DELETE_CONTACT,CONTACT_ERROR,SET_CURRENT,CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACTS,CLEAR_FILTER} from "../Types";
const ContactState=(props)=>{
	
const initialState={
	contacts:[],
	current:null,
	filtered:null
};
const [state,dispatch]=useReducer(contactReducer,initialState);
	
	
	const getContacts=async (contact)=>{
	
	try{
	const res=await axios.get("http://localhost:2000/api/contacts")
	dispatch({type:GET_CONTACTS,payload:res.data});
	}
	catch(err)
		{
			dispatch({type:CONTACT_ERROR,payload:err.response.msg}); 
		}
	}
		
		
	const addContact=async (contact)=>{
			const config={
		headers:{
			"Content-Type":"application/json"
		}
	};
	try{
	const res=await axios.post("http://localhost:2000/api/contacts",contact,config)
	dispatch({type:ADD_CONTACT,payload:res.data});
	}
	catch(err)
		{
			dispatch({type:CONTACT_ERROR,payload:err.response.msg}); 
		}
	}
	
	
const updateContact=(contact)=>{
	dispatch({type:UPDATE_CONTACT,payload:contact});
	
}
const deleteContact=async (id)=>{
	try{
	await axios.delete(`http://localhost:2000/api/contacts/${id}`);
	dispatch({type:DELETE_CONTACT,payload:id});
	}
	catch(err)
		{
			console.log(err);
		}
	}
	

const setCurrent=(contact)=>{
	dispatch({type:SET_CURRENT,payload:contact});
}
const clearCurrent=()=>{
	dispatch({type:CLEAR_CURRENT});
}
const filterContacts=(text)=>{
	dispatch({type:FILTER_CONTACTS,payload:text});
}
const clearFilter=()=>{
	dispatch({type:CLEAR_FILTER});
}

return (
	<contactContext.Provider value={{contacts:state.contacts,filtered:state.filtered,addContact,deleteContact,current:state.current,clearCurrent,updateContact,setCurrent,filterContacts,getContacts,clearFilter}}>
	{props.children};
	</contactContext.Provider>
)
};
export default ContactState;


