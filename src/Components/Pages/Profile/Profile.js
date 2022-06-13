import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    return (
        <div className="container mx-auto text-center">
            <h1 className="text-2xl mt-10 mb-5 flex justify-center gap-3 items-center">
                Hello! <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" /> <span className="font-bold">{user?.displayName}</span>, Welcome to IGC Immigration Website.
            </h1>

            {!user?.emailVerified && (
                <>
                    <p className="text-primary">Please verification your account using your verification link that send to your email.</p>
                    <p className="mt-5">
                        Don't get Verification email?{" "}
                        <button
                            onClick={async () => {
                                await sendEmailVerification();
                                alert("Sent email");
                            }}
                            className="text-blue-700 border px-5 py-2 text-lg ml-5"
                        >
                            Resend Verification Link
                            {sending && <FontAwesomeIcon className="animate-spin ml-5" icon={faSpinner} />}
                        </button>
                    </p>
                </>
            )}
        </div>
    );
};

export default Profile;
