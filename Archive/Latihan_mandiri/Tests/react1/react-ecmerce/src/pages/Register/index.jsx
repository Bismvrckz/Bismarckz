import { Input, Button } from "reactstrap";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [cred, setCred] = useState();

  function addUserName(event) {
    setCred({ ...cred, username: event.target.value });
  }
  function addFullName(event) {
    setCred({ ...cred, fullname: event.target.value });
  }
  function addEmail(event) {
    setCred({ ...cred, email: event.target.value });
  }
  function addPass(event) {
    setCred({ ...cred, password: event.target.value });
    console.log(cred);
  }
  let checkCred = async () => {
    try {
      let result = await axios.get("http://localhost:3000/users", {
        params: { email: `${cred.email}`, username: `${cred.username}` },
      });
      if (!result.length) {
        alert("berhasil");
        async () => {
          await axios.patch;
        };
      } else {
        alert("dah ada!");
      }
    } catch (error) {
      alert("berhasil");
    }
  };

  return (
    <div className="d-flex flex-column m-3">
      <Input onChange={addUserName} />
      <Input onChange={addFullName} />
      <Input onChange={addEmail} />
      <Input onChange={addPass} />
      <Button onClick={checkCred}>Register</Button>
    </div>
  );
}

export default Register;
