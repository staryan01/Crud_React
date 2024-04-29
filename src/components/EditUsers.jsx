import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditUsers = () => {

  let {id} = useParams()

  let navigator= useNavigate()
  let [state, setState] = useState({
    name:"",
    email:""
  })

  let {name, email} = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(()=>{
     axios.get(`http://localhost:4000/users/${id}`)
     .then((response)=>{
      console.log(response.data);
      setState({...state, name: response.data.name, email:response.data.email })
     })
  },[])

  let handleSubmit = (e)=>{
   e.preventDefault();
   let payload = {name, email}
   axios.put(`http://localhost:4000/users/${id}`, payload)
   navigator("/datausers")
  }


  return (
   <form onSubmit={handleSubmit} >
         <h2>Edit Users</h2>
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
          <button>Edit User</button>
        </section>
      </form>
  )
}

export default EditUsers