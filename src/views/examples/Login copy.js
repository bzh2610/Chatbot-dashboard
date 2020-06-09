import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Logo, Form, Input, Button } from "reactstrap";
import { useAuth } from "../../context/auth";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {

        setAuthTokens("test");
        setLoggedIn(true);
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>

      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
     
    </Card>
  );
}

export default Login;
