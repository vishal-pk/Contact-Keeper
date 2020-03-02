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
		
		<div className="container">
			<div className="row">
				<div className="col-md-4"></div>
		<div className="col-md-4 ">
		
			<form onSubmit={onSubmit}>
				
				
				{/* <div className="form-group">
					<label>Login
					<input type="email" placeholder="email" className="form-control" name="email" value={email} onChange={onChange} required/> 
					</label>
				</div> */}
				
				<div className="form-group">
					<lablel>Login
					<input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={onChange} required/> 
					</lablel>
				</div>
				
				<div className="form-group">
					<lablel>Password
					<input type="password" className="form-control" placeholder="password" name="password" value={password} onChange={onChange} required/> 
					</lablel>
				</div>
				
				
				<div className="form-group">
					<input type="submit"  className="btn btn-primary" value="Login"/>
				</div>
				
			</form>
		</div>
		</div>
	</div>
	
	)
	else return(<div></div>)
	
}
export default Login;