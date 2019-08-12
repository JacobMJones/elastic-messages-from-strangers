import React, { useState } from "react";
import { useInput } from "../../Hooks/useInput";
import elasticAPI from "../../ElasticAPI";
function SignUp(props) {
  const [state, setValues] = useState({
    usernameValid: false,
    passwordValid: true,
    emailValid: true
  });
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");

  async function checkNewUser(e) {
    //   resetUsername();
    // resetPassword();
    console.log("in submit new user", e.target.value, username);

    let isUsernameAvailable = await elasticAPI.checkUsernameAvailability(
      null,
      e.target.value
    );
    setValues({ usernameValid: isUsernameAvailable });
  }
  const submitNewUser = () => {
    elasticAPI.createNewUser({
      username: username,
      password: password,
      email: email,
      dateCreated: Date.now(),
      messages: [],
      lastSeen: Date.now(),
      stats: []
    }, props.authDispatch);
  };
  return (
    <form onChange={checkNewUser} onSubmit={submitNewUser}>
      <label>
        username:
        <input type="text" {...bindUsername} />
        {state.usernameValid && username.length > 2 ? (
          <span>Good name</span>
        ) : (
          <span>Invalid or taken</span>
        )}
      </label>
      <br />
      <label>
        password:
        <input type="text" {...bindPassword} />
      </label>
      <br />
      <label>
        email:
        <input type="text" {...bindEmail} />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;
