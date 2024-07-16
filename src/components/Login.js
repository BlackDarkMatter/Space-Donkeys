import React, { useState } from "react";
import { UserService } from "../services/UserService";

const Login = ({ user, setUser, userList, setUserList }) => {
  const [isNew, setIsNew] = useState(true);

  const submitForm = () => {
    let newUser = { ...user };
    let errorMessage = "";
    if (user.name === "") {
      errorMessage += "The name can't be empty\n";
    }
    if (user.username === "") {
      errorMessage += "The username can't be empty\n";
    }
    if (user.password === "") {
      errorMessage += "The password can't be empty\n";
    }
    if (userList.find((x) => x.username == user.username)) {
      errorMessage += "The username already exists";
    }
    if (errorMessage.length === 0) {
      newUser.saved = true;
      setUser(newUser);
      setUserList([...userList, newUser]);
      UserService.saveCurrentUser(newUser);
      window.alert("Success!");
    } else {
      window.alert(errorMessage);
    }
  };

  const errorUserMessage = "User or password incorrect";

  const loginUser = () => {
    let userInList = userList.find((x) => x.username === user.username);
    if (userInList) {
      if (userInList.password === user.password) {
        setUser({ ...userInList });
        UserService.saveCurrentUser(userInList);
        window.alert("You logged in!");
      } else {
        window.alert(errorUserMessage);
      }
    } else {
      window.alert(errorUserMessage);
    }
  };

  const updateUserData = (prop, data) => {
    let newData = { ...user };
    newData[prop] = data;
    setUser(newData);
  };

  return (
    <div className="align-on-center align-text-left">
      <div>
        {isNew ? <h4>New User</h4> : <h4>Login</h4>}
        {isNew ? (
          <div>
            <label htmlFor="name">What's your name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="fname"
              value={user.name}
              onChange={(e) => updateUserData("name", e.target.value)}
            />
            <br />
          </div>
        ) : (
          ""
        )}
        <label htmlFor="username">Type your username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="fusername"
          value={user.username}
          onChange={(e) => updateUserData("username", e.target.value)}
        />
        <br />
        <label htmlFor="password">Type your password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="fpassword"
          value={user.password}
          onChange={(e) => updateUserData("password", e.target.value)}
        />
        <br />
        {isNew ? (
          <button onClick={() => submitForm()}>Submit</button>
        ) : (
          <button onClick={() => loginUser()}>Login</button>
        )}
        &nbsp;
        {isNew ? (
          <button className="link-button" onClick={() => setIsNew(false)}>
            Login
          </button>
        ) : (
          <button className="link-button" onClick={() => setIsNew(true)}>
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
