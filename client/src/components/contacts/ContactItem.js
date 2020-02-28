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
			<div className=" md-2 card bg-light" style={{width:" 18rem"}}>
				{/* <div className="ml-3">
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
				</div> */}
				<div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
    <p className="card-text">{phone}</p>
    <a href="#" className="card-link btn btn-sm btn-primary" onClick={()=>{setCurrent(contact)}} >Edit</a>
    <a href="#" className="card-link btn btn-sm btn-danger" onClick={onDelete}>Delete</a>
  </div>
			</div>
		</div>
	)
}
export default ContactItem;


