//eslint-disable
import React,{useContext,useEffect,Fragment} from "react";
import ContactContext from "../../context/contact/contactContext";
import {CSSTransition,TransitionGroup} from "react-transition-group";
import ContactItem from "./ContactItem";
import AuthContext from "../../context/auth/authContext";

const Contacts=()=>{
	const contactContext=useContext(ContactContext);
	const authContext=useContext(AuthContext);
	const {filtered,contacts,getContacts}=contactContext;
	useEffect(()=>{
		getContacts();
	},[])
	const {isAuthenticated}=authContext;
	if(contacts.length===0)
		return(<h4>No Contacts Availabe</h4>)
	else if(isAuthenticated)
	return(
		<Fragment>
			<TransitionGroup>
			
			{filtered !==null ? filtered.map( contact =>(
					<CSSTransition timeout={500} classNames="item" key={contact.id}>
						<ContactItem contact={contact}/>
					</CSSTransition>)):
				
				contacts.map(contact =>(
					<CSSTransition timeout={500} classNames="item" key={contact.id}>
						<ContactItem  contact={contact}/>
					</CSSTransition>) ) }
			</TransitionGroup>
		</Fragment>)
		else
		return(<div></div>)
}
export default Contacts;