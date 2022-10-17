import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Update = () => {
    const [id,setId]=useState("0")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
       setId(localStorage.getItem("id"));
       setName(localStorage.getItem("name"));
       setEmail(localStorage.getItem("email"));


    },[])

    const handleUpdate=()=>{
        axios.put(`https://63477fdd0484786c6e819a6c.mockapi.io/beeceptor/crud-prac/${id}`,{
            name:name,
            email:email
        }).then(()=>{
            history("/read")
        })
    }


  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
         <div className="mb-3">
         <div className="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
         <input type="text" className="form-control" 
         onChange={(e)=>setName(e.target.value)} value={name}
          />
         </div>
         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
         <input type="email" className="form-control" value={email} 
         onChange={(e)=>setEmail(e.target.value)} 
         />
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
        <Link to="/read">
        <button type="submit" className="btn btn-primary"
          onClick={handleUpdate}
        >
         Update</button>
        </Link>
        
</form>
    </div>
  )
}

export default Update
