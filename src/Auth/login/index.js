import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase"
import "./index.css";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigat=useNavigate();
  const sigin = async () => {
    try {
        const user = await signInWithEmailAndPassword(auth,  email, password);
        console.log(user)

    }
    catch (error) {
        console.log(error.message)
    }
}
  return (
    <div className="containers">
      <div className={`loginCard`}>
        <div className="session card">
          <div className="form">
            <h4>
              <span>Login</span>
            </h4>
            <div className="floatingLabel">
              <input
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="off"
                required
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email:</label>
            </div>

            <div className="floatingLabel">
              <input
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="off"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password:</label>
            
            </div>
            <button
              type="submit"
              onClick={()=>{
                sigin()
                toast.success("User login")
               alert("test")
               navigat("/dashboard")
              
                 
              }}
            >
              Log in
            </button>
            <div className="message">
           <Link to="/register">  <p>Dont have an account?&nbsp;</p></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
