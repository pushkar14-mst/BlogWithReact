import Header from "../../components/Header";
import "./LoginPage.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedUserActions } from "../../store/logged-user";

let userTypes = ["Moderater", "Teacher", "Student", "staff"];
const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="login-page-container">
        <h1>Login</h1>
        <form>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            onChange={(event) => {
              setUser({ ...user, username: event.target.value });
            }}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          />
          <select
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Please select your user type"
            variant="outlined"
            onChange={(event) => {
              setUser({ ...user, userType: event.target.value });
            }}
            value={user.userType}
          >
            {userTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(loggedUserActions.login(user));
              navigate("/user-profile", { state: { user: user } });
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
