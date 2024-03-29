import {useRef, useContext} from "react";

import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const newPassword = newPasswordRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDahPlh3dSjLo5yQXkk6U-459SLlDXMUEo", {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPassword,
        returnSecureToken: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {

      history.replace("/");
    });

  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
