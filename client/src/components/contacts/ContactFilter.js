//eslint-disable
import React,{useRef,useEffect,useContext} from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter=()=>{
	const contactContext=useContext(ContactContext);
	const {filtered,filterContacts,clearFilter}=contactContext;
	const text = useRef('');
	useEffect(()=>{
		if(filtered===null)
		{text.current.value='';}
			
	})
	const onChange=(e)=>{
		if(text.current.value!=='')
			{filterContacts(e.target.value)}
		else{
			clearFilter();
		}
	}
	return(
		<form>
			<input ref={text} onChange={onChange} type="text" placeholder="Filter Contacts"/>
		</form>	
	)
	
}
export default ContactFilter;