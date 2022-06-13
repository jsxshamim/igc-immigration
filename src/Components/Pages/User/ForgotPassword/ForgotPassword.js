import { Link } from "react-router-dom";
import auth from "../../../../Utilities/Firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        setLoading(true);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!", { position: "bottom-right" });
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error.message, { position: "bottom-right" });
                setLoading(false);
            });
    };

    return (
        <div className="w-3/12 mx-auto  border px-8 py-8 mt-5">
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <ToastContainer />
            <form onSubmit={handleForgetPassword} className="flex flex-col gap-6 text-center text-paragraph">
                <h1 className="text-3xl text-center font-semibold my-5">Forgot Your Account</h1>
                <p>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
                <input className="border px-5 py-3 placeholder:text-paragraph w-full" type="email" name="email" id="email" placeholder="Enter Your Email" required />
                <button className="bg-primary px-8 py-3 text-lg font-semibold text-white">{!loading ? "Forgot Password" : "Loading..."}</button>
            </form>
            <p className="mt-5 text-center">
                <p className="or-line text-center my-5">or</p>
                <p className="mt-5 text-center">
                    Don't have an account?{" "}
                    <Link className="text-primary" to="/signup">
                        Create an account.
                    </Link>
                </p>
            </p>
        </div>
    );
};

export default ForgotPassword;
