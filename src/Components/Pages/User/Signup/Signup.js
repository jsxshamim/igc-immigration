import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../../Utilities/Firebase.init";
import google from "../../../../Assets/social-icons/google.svg";
import facebook from "../../../../Assets/social-icons/facebook.svg";

const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, signupError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, , googleLoginError] = useSignInWithGoogle(auth);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setError("Your password doesn't match");
            return;
        } else if (!displayName) {
            setError("Please enter your name");
            return;
        } else if (!/\S+@\S+\.\S+/g.test(email)) {
            setError("Please enter a valid email");
            return;
        } else if (password < 6) {
            setError("Password needs minimum six characters");
            return;
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.password.value = "";
            e.target.confirmPassword.value = "";
        }
    };

    useEffect(() => {
        if (signupError) {
            setError(signupError?.message);
        } else if (googleLoginError) {
            setError(googleLoginError?.message);
        }

        if (user || googleUser) {
            navigate("/");
        }
    }, [googleLoginError, googleUser, navigate, signupError, user]);

    return (
        <div className="w-4/12 mx-auto border px-8 py-8 mt-5">
            <h1 className="text-3xl text-center font-semibold my-5">Create a new account</h1>
            <form onSubmit={handleSignup} className="flex flex-col pt-14 gap-5 text-paragraph">
                <input className="border px-5 py-3 placeholder:text-paragraph" type="text" name="name" id="name" placeholder="Enter Your Name" required />
                <input className="border px-5 py-3 placeholder:text-paragraph" type="email" name="email" id="email" placeholder="Enter Your Email" required />
                <input className="border px-5 py-3 placeholder:text-paragraph" type="password" name="password" id="password" placeholder="Enter Your Password" required />
                <input className="border px-5 py-3 placeholder:text-paragraph" type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Your Confirm Password" required />
                <button type="submit" className="bg-primary px-8 py-3 text-lg font-semibold text-white">
                    {!loading || !updating ? "Sign up" : "Loading..."}
                </button>
            </form>
            <p className="text-primary text-center mt-3">{error}</p>
            <p className="mt-5 text-center">
                Already have an Account?{" "}
                <Link className="text-primary" to="/login">
                    Login Now
                </Link>
            </p>
            <p className="or-line text-center my-5">or</p>
            <button onClick={() => signInWithGoogle()} className="flex items-center gap-3 border rounded-full mx-auto pl-3 pr-10 py-2 text-lg mb-5">
                <img className="w-8 self-start" src={google} alt="" /> Continue With Google
            </button>
            <button className="flex items-center gap-3 border rounded-full mx-auto pl-3 pr-10 py-2 text-lg">
                <img className="w-8 self-start" src={facebook} alt="" /> Continue With Facebook
            </button>
        </div>
    );
};

export default Signup;
