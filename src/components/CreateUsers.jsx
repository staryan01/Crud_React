import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUsers = () => {

  let navigator = useNavigate()
  let [state, setState] = useState({
    name: "",
    email: "",
  });

  let { name, email } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit= (e)=>{
      e.preventDefault()
     let payload = {name, email}
     axios.post("http://localhost:4000/users", payload)
     .then(()=>{
      console.log("User is created");
     })
     navigator("/datausers")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </section>

        <section>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </section>

        <section>
          <button>Create User</button>
        </section>
      </form>
    </div>
  );
};

export default CreateUsers;
