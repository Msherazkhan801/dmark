import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase"
import "../login/index.css";
import { toast } from "react-toastify";
// import {}
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email,password);
            console.log(user,"data")
           
        }
        catch (error) {
            console.log(error.message)
            toast.error(error.message);
        }
        toast.success("User Registerd")
        const token = localStorage.setItem("token");
        navigate("/")
    }
    return (
        <div className="containers">
            <div className={`loginCard`}>
                <div className="session card">
                    <div className="form">
                        <h4>
                            <span>Sign Up</span>
                        </h4>
                        <div className="floatingLabel">
                            <input
                                placeholder="Name"
                                type="text"
                                name="name"
                                autoComplete="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Name:</label>
                        </div>
                        <div className="floatingLabel">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                autoComplete="off"
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
                            onClick={register }
                        >
                            Sign Up
                        </button>
                        <div className="message">
                            <Link to="/">   <p>Already have an account?&nbsp;</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
