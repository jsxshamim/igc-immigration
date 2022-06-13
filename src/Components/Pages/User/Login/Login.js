import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../../../Utilities/Firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import google from "../../../../Assets/social-icons/google.svg";
import facebook from "../../../../Assets/social-icons/facebook.svg";
import "./Login.css";

const Login = () => {
    const [signInWithEmailAndPassword, user, signInLoading, loginError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, , googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, , facebookError] = useSignInWithFacebook(auth);

    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!/\S+@\S+\.\S+/g.test(email)) {
            setError("Please enter a valid email");
            return;
        } else {
            await signInWithEmailAndPassword(email, password);
            e.target.email.value = "";
            e.target.password.value = "";
        }
    };

    useEffect(() => {
        if (loginError?.message.includes("wrong-password")) {
            setError("Your enter wrong password");
        } else if (loginError?.message.includes("user-not-found")) {
            setError("User Not Found");
        } else if (loginError) {
            setError(loginError?.message);
        } else if (googleError) {
            setError(googleError?.message);
        } else if (facebookError) {
            setError(facebookError?.message);
        }

        if (user || googleUser || facebookUser) {
            navigate(from, { replace: true });
        }
    }, [facebookError, facebookUser, from, googleError, googleUser, loginError, navigate, user]);

    return (
        <div className="w-3/12 mx-auto border px-8 py-5 my-5">
            <form onSubmit={handleLogin} className="flex flex-col gap-6 text-paragraph">
                <h1 className="text-3xl text-center font-semibold my-5">Login Your Account</h1>
                <input className="border px-5 py-3 placeholder:text-paragraph" type="email" name="email" id="email" placeholder="Enter Your Email" required />
                <label>
                    <input className="border px-5 py-3 placeholder:text-paragraph w-full" type="password" name="password" id="password" placeholder="Enter Your Password" required />
                    <Link className="text-primary block mt-2" to="/forgot-password">
                        Forgot Password?
                    </Link>
                </label>
                <button className="bg-primary px-8 py-3 text-lg font-semibold text-white">{!signInLoading ? "Login" : "Loading..."}</button>
            </form>
            <p className="text-primary text-center mt-3">{error}</p>
            <p className="mt-5 text-center">
                Not a Member?{" "}
                <Link className="text-primary" to="/signup">
                    Signup Now
                </Link>
            </p>
            <p className="or-line text-center my-5">or</p>
            <button onClick={() => signInWithGoogle()} className="flex items-center gap-3 border rounded-full mx-auto pl-3 pr-10 py-2 text-lg mb-5">
                <img className="w-8 self-start" src={google} alt="" /> Continue With Google
            </button>
            <button onClick={() => signInWithFacebook()} className="flex items-center gap-3 border rounded-full mx-auto pl-3 pr-10 py-2 text-lg">
                <img className="w-8 self-start" src={facebook} alt="" /> Continue With Facebook
            </button>
        </div>
    );
};

export default Login;
