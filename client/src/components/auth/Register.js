//eslint-disable
import React,{useState,useContext,useEffect} from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
const Register=(props)=>{
	const alertContext=useContext(AlertContext);
	const authContext=useContext(AuthContext);
	const {setAlert} = alertContext;
	const {register,error,isAuthenticated,clearErrors}=authContext;
	useEffect(()=>{
		if(isAuthenticated){
			props.history.push('/');
		}
		if(error==="User already exists"){
			setAlert(error,"danger");
			clearErrors();
		}
	},[error,isAuthenticated,props.history]);
	const [user,setUser]=useState({
		name:"",
		email:"",
		password:"",
		password2:"",
	});
	const {name,email,password,password2} = user;
	
	const onChange=(e)=>{
		setUser({...user,[e.target.name]:e.target.value});
	}
	const onSubmit=(e)=>{
		e.preventDefault();
		if(email==="" || password==="" || name==="")
			setAlert("please enter all the fields","danger");
		else if(password!==password2)
			setAlert("password dosent match","danger");
		else{
		register({ name,email,password });
		}
		
	}
	return(
		<div className="form-container">
		<label>REGISTER</label>
			<form onSubmit={onSubmit}>
				<div className="form-group">
				<input type="text" className="form-control" placeholder="name" name="name" value={name} onChange={onChange}/> 
				</div>
				
				<div className="form-group">
				<input type="email" className="form-control"  placeholder="email" name="email" value={email} onChange={onChange}/> 
				</div>
				
				<div className="form-group">
				<input type="password" className="form-control"  placeholder="password" name="password" value={password} onChange={onChange}/> 
				</div>
				
				<div className="form-group">
				<input type="password" className="form-control"  placeholder="password2" name="password2" value={password2} onChange={onChange}/> 
				</div>
				
				<div className="form-group">
					<input type="submit"  className="btn btn-primary" value="Register"/>
				</div>
				
			</form>
		</div>
	
	)
	
}
export default Register;