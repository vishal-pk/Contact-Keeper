//eslint-disable
import React,{useContext} from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactItem=({contact})=>{
	
	const contactContext=useContext(ContactContext);
	const {deleteContact,setCurrent,clearCurrent}=contactContext;
	const {_id,name,email,phone,type}=contact;
	const onDelete=()=>{
		deleteContact(_id);
		clearCurrent();
	}
	return(
		<div>
				
			<div className=" md-2 card bg-light">
			
			<h3 className="text-primary text-left">
				{name}{' '}
				<span className="badge badge-success">{type}</span>
			</h3>
			<i className="fas fa-envelope-open" />
			<ul className="list-group" style={{listStyleType:"none"}}>
				{email && (<li><i className="fas fa-envelope-open" />{email}</li>)}
				{phone && (<li><i className="fas fa-phone" />{phone}</li>)}
				<p>
					<button  onClick={()=>{setCurrent(contact)}} className="btn btn-sm btn-primary">Edit</button>
					<button  onClick={onDelete} className="btn btn-sm btn-danger">Delete</button>
				</p>
			</ul>
			
		</div>
			
		</div>
	)
}
export default ContactItem;