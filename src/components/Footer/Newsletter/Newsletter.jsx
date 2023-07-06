import React, { useState, useEffect } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from "firebase/firestore";
import { fireStoreDb } from "../../../firebaseConfig";
import "./Newsletter.scss";
const Newsletter = () => {

    const [EmailSub, setEmailSub] = useState("");

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
    //     console.log(querySnapshot.docs);

    //     const data = [];
    //     querySnapshot.forEach((doc) => {
    //         if (doc.data().first) {
    //             data.push({ id: doc.id, text: doc.data().first });
    //         }
    //     });
    //     setEmailSub(data);
    // };

    const handleCreate = async () => {
        // Add a new document in collection "cities"
        await addDoc(collection(fireStoreDb, "users"), {
            first: EmailSub,
            last: "Lovelace",
            born: 1996,
        });
        // fetchData();
        setEmailSub("");
    };

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    {/* <input type="text" placeholder="Email Address"
                     onChange={(e => email_log(e))} />
                    <button onClick={() => email_subscribe()}>Subscribe</button> */}
                    {/* <input type="text" placeholder="Email Address"
                     onChange={(e => email_data(e))} value={EmailSub} />
                    <button onClick={() => email_subscribe()} >Subscribe</button> */}
                    <input type="text" placeholder="Email Address"
                        onChange={(e) => setEmailSub(e.target.value)} />
                    <button onClick={() => handleCreate()} >Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;