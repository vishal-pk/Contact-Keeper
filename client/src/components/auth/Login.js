//eslint-disable
import React,{useState,useEffect,useContext} from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";


const Login=(props)=>{

	const [user,setUser]=useState({
		
		email:"",
		password:"",
		
	});
	const alertContext=useContext(AlertContext);
	const authContext=useContext(AuthContext);
	const {login,error,isAuthenticated,clearErrors}=authContext;
	const {setAlert} = alertContext;
	const {email,password} = user;
	
		useEffect(()=>{
		if(isAuthenticated){
			props.history.push('/');
		}
		if(error==="invalid credentials"){
			setAlert(error,"danger");
			clearErrors();
		}
	},[error,isAuthenticated,props.history]);
	const onChange=(e)=>{
		setUser({...user,[e.target.name]:e.target.value});
	}
	const onSubmit=(e)=>{
		e.preventDefault();
		if(email==="" || password==="")
			setAlert("please enter all the fields","danger");
		else{
			login(
				{email,password}
			)
		}
		
		
	}
	if (!(isAuthenticated))
	return(
		
		<div className="container-login">
			
		<div className="col-md-6 col-sm-12">
		
			<form onSubmit={onSubmit}>
				
				
				<div className="form-group">
					<label>Login</label>
					<input type="email" placeholder="email" className="form-control" name="email" value={email} onChange={onChange} required/> 
				</div>
				
				
				<div className="form-group">
					<lablel>Password</lablel>
					<input type="password" className="form-control" placeholder="password" name="password" value={password} onChange={onChange} required/> 
				</div>
				
				<div className="form-group">
					<input type="submit"  className="btn btn-primary" value="Login"/>
				</div>
				
			</form>
		</div>
	</div>
	
	)
	else return(<div></div>)
	
}
export default Login;