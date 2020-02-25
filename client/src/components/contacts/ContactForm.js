import React,{useState,useContext,useEffect} from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm=()=>{
	const contactContext=useContext(ContactContext);
	const {addContact,current,updateContact,clearCurrent}=contactContext;
		useEffect(()=>{
	if(current!==null){
		setContact(current);
	}
	else{
		setContact({
			name:"",
			email:"",
			phone:"",
			type:"personel",
		});
	}},[contactContext,current]);
	const [contact,setContact]=useState({
		name:" ",
		email:" ",
		phone:" ",
		type:"personel",
	});

	const {name,email,phone,type} = contact;
	const onChange=(e)=>{setContact({...contact,[e.target.name]:e.target.value})};
	const onSubmit=(e)=>{
		e.preventDefault();
		if(current===null){
		addContact(contact);
		}
		else{
			updateContact(contact);
			
		}
		setContact({
			name:"",
			email:"",
			phone:"",
			type:"personel",
		});
		
	}
	return(
		<div>
			<form onSubmit={onSubmit}>
			<div className="form-group">
				<label>{current ? "Edit Contact" : "Add Contact"}</label>
				<input className="form-control" type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
			</div>
				
			<div className="form-group">
			<input  className="form-control" type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
			</div>
				
			<div className="form-group">
				<input className="form-control" type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
			</div>	
			
				<div className="form-group">
				<input className="form-control" type="text" placeholder="Type" name="type" value={type} onChange={onChange} />
			</div>	
			
			<div className="form-group"><input type="submit" value={current ? "Edit Contact" : "Add Contact"} className="btn btn-primary"/></div>
			
			{current && (
				<div className="btn btn-danger" onClick={()=>{clearCurrent()}}>
					Clear
				</div>
			)}
			</form>
			
		
		</div>
	)

	}
export default ContactForm;