var log_in_response = User.log_in("abc@gamil.com","123456")
if(log_in_response == true){
	console.log("Log in Sucessfully")
} else {
	console.log("Incorrect Username & Password ")
}

//User.register("abc@gamil.com", "abc", "sharma", "123456")