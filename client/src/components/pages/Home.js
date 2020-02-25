//eslint-disable
import React,{useContext,useEffect} from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter"
import AuthContext from "../../context/auth/authContext";

const Home=()=>{
	const authContext=useContext(AuthContext);
	useEffect(()=>{
		authContext.loadUser();
	},[]);
	return(
		<div className="row">
			
			<div className="col-4">
				<ContactForm />
			</div>
			<div className="col-3"></div>
			<div className="col-4">
				<ContactFilter />
				<Contacts />
			</div>
			
		</div>
	)
}
export default Home