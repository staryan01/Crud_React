import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Users = () => {
        let [content, setContent]  = useState([])

        function getData(){
          axios.get("http://localhost:4000/users")
           .then((response)=>{
            console.log(response.data);
            setContent(response.data)
           })
        }
  
     useEffect(()=>{
           getData()
     },[])

     let handleDelete = (id)=>{
              axios.delete(`http://localhost:4000/users/${id}`)
              .then(()=>{
                getData() 
              })
     }

console.log(content);
  return (
    <>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            content.map((value)=>{
                   return <tr key={value.id}>
                       <td>{value.name}</td>
                       <td>{value.email}</td>
                       <td>
                        <Link to={`/editusers/${value.id}`}>Edit</Link>
                       </td>
                       <td><button onClick={()=>handleDelete(value.id)}>Delete</button></td>  
                   </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Users