//eslint-disable
import React,{Fragment,useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
const Navbar=({title,icon})=>{
	
	const authContext =useContext(AuthContext);
	const {isAuthenticated,logout,user}=authContext;
	const onLogout=()=>{
		logout();
	}
	const authLinks=(
		<Fragment>
		<li><h5>{user && user.name} </h5></li>
		<li className="nav-item active float-right">
			<a onClick={onLogout} href="#!">
				<i className="fas fa-sign-sign-out-alt">
				<span className="hide-sm"><h6>Logout</h6></span>
				</i>
			</a>
		</li>
		</Fragment>
	);
	
	
	const guestLinks=(
		<Fragment>
		<li className="nav-item active">
           <Link  style={{color:"black"}} to="/register"><a className="nav-link">Register</a></Link> 
		</li>
		
		<li className="nav-item active">
			<Link style={{color:"black"}}  to="/login"><a className="nav-link">Login</a></Link>
      </li>
		</Fragment>
	);
	
	return(
		<Fragment>
			<div >
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Contact Keeper</a>
					<div classname="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							{
								isAuthenticated ? authLinks : guestLinks
							}
						</ul>
			  </div>
			</nav>
		</div>
		</Fragment>)

}

export default Navbar;








// <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown link
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//     </ul>