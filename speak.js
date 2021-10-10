var User = {
	log_in(email_id, password){
	   if((email_id == localStorage.getItem("email_id"))&&(password == localStorage.getItem("password"))){
	   		 //console.log("user name is match")
	   		 return true
		} else {
			 //console.log("user name is NOT match")
			 return false
		}
},
	register(email_id, first_name, last_name , password ){
		localStorage.setItem("email_id", email_id);
		localStorage.setItem("first_name", first_name);
		localStorage.setItem("last_name", last_name);
		localStorage.setItem("password", password);
	}
}