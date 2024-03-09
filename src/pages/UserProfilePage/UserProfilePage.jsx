import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import Header from "../../components/Header";
import "./UserProfilePage.css";
import { users } from "../../dummyUsers";

const UserProfilePage = () => {
  const [retrievedUser, setRetrievedUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const loggedUser = location.state.user;
  console.log(loggedUser);
  const userType = loggedUser.userType;
  useEffect(() => {
    if (userType === "Student") {
      users[0].student.forEach((student) => {
        if (student.username === loggedUser.username) {
          console.log(student);
          setRetrievedUser(student);
        }
      });
    } else if (userType === "Teacher") {
      users[1].teacher.forEach((teacher) => {
        if (teacher.username === loggedUser.username) {
          console.log(teacher);
          setRetrievedUser(teacher);
        }
      });
    } else if (userType === "Moderator") {
      users[2].moderator.forEach((moderator) => {
        if (moderator.username === loggedUser.username) {
          console.log(moderator);
          setRetrievedUser(moderator);
        }
      });
    } else if (userType === "Staff") {
      users[3].staff.forEach((staff) => {
        if (staff.username === loggedUser.username) {
          console.log(staff);
          setRetrievedUser(staff);
        }
      });
    } else if (userType === "Admin") {
      users[4].admin.forEach((admin) => {
        if (admin.username === loggedUser.username) {
          console.log(admin);
          setRetrievedUser(admin);
        }
      });
    }
  }, [loggedUser]);
  return (
    <>
      {retrievedUser ? (
        <>
          <Header />
          <div className="user-profile-page-container">
            <h1>User Profile</h1>
            <Typography variant="h6" gutterBottom>
              Username: {retrievedUser.username}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email: {retrievedUser.email}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/create-post");
              }}
            >
              Create Post
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back
            </Button>
          </div>
        </>
      ) : (
        <h1>User not found</h1>
      )}
    </>
  );
};
export default UserProfilePage;
