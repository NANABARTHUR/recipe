function Login (){
    return(
     <div className="Login">
        <h4>Login</h4>
        <div className="SignIn-page">
            <input type="text" placeholder="Email:"></input> <br/> <br/>
            <input type="text" placeholder="Password:"></input>
        </div>
        <div>
            <p> Forgotten password?   <button> Login</button></p>            
            <p> Don't have an account?</p> <br/> 
             < a href="SignIn.js"> Sign up</a>
        </div>


     </div> 
    )
}



export default Login;