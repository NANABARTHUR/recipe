function SignIn () {
    return(
      <div> 
       <h4>Sign Up Here</h4> 
       <div className="SignIn-page">
       <input type="text" placeholder="Name:"/> <br/> <br/>
       <input type="text" placeholder="Email:"/> <br/> <br/>
       <input type="text" placeholder="Password:"/> <br/> <br/>
        <button> Sign In</button>
        </div> 
       <div>
        <p> Already have an account?</p>
        <a href="login.js">Login</a>
         </div>
      </div>
     
      
    )
    
}

export default SignIn;