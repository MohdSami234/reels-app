import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { firestore } from "./firebase";

import "./Profile.css"


let Profile = () => {
  let value = useContext(AuthContext);
  let [totalPosts, setTotalPosts] = useState(0);

  console.log(value);

  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore
        .collection("posts")
        .where("username", "==", value.displayName)
        .get();

      console.log("size", querySnapshot.size);
      setTotalPosts(querySnapshot.size);
    };

    f();
  }, []);

  return (
    <>
      {value ? (
        <div className="profile-container">
          <h1 className="your-pro">YOUR PROFILE</h1>
          <img className="img-profile" src={value.photoURL}/>
          
          <h1 className="username-profile">{value.displayName}</h1>
          <p className="ttpost">TOTAL POST: {totalPosts}</p>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Profile;