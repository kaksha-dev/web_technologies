"use client";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = (email) => {
    fetch(`http://localhost:5000/users/details`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
          if (responseData) {
            setUserDetails(responseData);
          }
        } else {
          window.alert("Fetch User details failed.");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        window.alert("Fetch User details failed.");
        window.location.href = "/";
        return error;
      });
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      {!userDetails ? (
        <p>Loading user details...</p>
      ) : (
        <>
          <h1 style={{ fontWeight: "bold" }}>Profile</h1>
          <p>Name : {userDetails?.name}</p>
          <p>Email : {userDetails?.email}</p>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
