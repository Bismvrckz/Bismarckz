import { Input, Button } from "reactstrap";
import { useState } from "react";

function Login() {
  const { obj, setObj } = useState();

  function setUserName(event) {
    let newUser = event.target.value;
    let user = { ...obj, newUser };
    setObj(event.target.value);
  }

  function alert1(event) {
    return;
  }

  return (
    <div>
      <Input onChange={setUserName} />
      <Input />
      <Button onClick={alert1}>Login</Button>
      {alert1}
    </div>
  );
}

export default Login;
