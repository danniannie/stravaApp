import React from "react";

const Login = () => {
  return (
    <div>
      <p>Welcome</p>
      <a href="https://www.strava.com/oauth/authorize?client_id=51616&response_type=code&redirect_uri=http://localhost:3000/dashboard&approval_prompt=force">
        <button>Login to Strava</button>
      </a>
    </div>
  );
};

export default Login;
