import React from "react";
import blog1 from "../../../Assets/blog/blog1.jpg";
import blog2 from "../../../Assets/blog/blog2.jpeg";
import blog3 from "../../../Assets/blog/blog3.jpg";

const Blog = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 container mx-auto gap-10 py-20">
            <div>
                <h2 className="text-3xl font-bold mb-5 text-secondary">Difference between authentication and authorization.</h2>
                <img className="w-full mb-5" src={blog1} alt="" />
                <p>
                    A very brief explanation: authentication is knowing who a user is, and authorization is what the user allows. Because Firebase Auth recognizes only the user in a variety of ways, it allows anyone to access your app if you don't.
                    Supplement authentication with access control. Authentication gives you an easy way to set up a login mechanism that will be up and running in no time.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-5 text-secondary">Why are you using firebase? What other options do you have to implement authentication?</h2>
                <img className="w-full mb-5" src={blog2} alt="" />
                <p>
                    Google Firebase offers many features that mark it as a go-to back-end development tool for web and mobile applications. Reduces labor and development time. And it is a perfect prototyping tool. Firebase is simple, lightweight,
                    easy to use, and industry recognized. Authentication by a server generally involves the use of a username and password. Other forms of authentication can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div className="md:col-span-2 my-5">
                <h2 className="text-3xl font-bold mb-5 text-secondary ">What other services does firebase provide other than authentication?</h2>
                <img className="w-full" src={blog3} alt="" />
                <p className="my-5 text-lg text-paragraph">There are many services that Firebase offers. The most useful are:</p>
                <ul className="list-disc list-inside text-lg text-paragraph mb-5">
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging.</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
                <p className="mb-5 text-lg text-paragrap">
                    Firebase is a complete package that allows you to develop your mobile or web applications faster with fewer resources and more efficiency. Now let's look at some of the services and how to use them.
                </p>
            </div>
        </div>
    );
};

export default Blog;
