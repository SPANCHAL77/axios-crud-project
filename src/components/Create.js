import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const history= useNavigate();

const handleForm =(e)=>{
    e.preventDefault();

}

// const header={"Access-Control-Allow-Origin": "*"}

const handleSubmit=()=>{
    console.log('cheched');
        axios.post('https://63477fdd0484786c6e819a6c.mockapi.io/beeceptor/crud-prac',{
                name:name, email:email,
                // header
            }
        ).then(()=>{
            history("/read")
        })

       
}

  return (
    <>
    <h1>Create </h1>
      <form onSubmit={handleForm}>
  <div className="mb-3">
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
  </div>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Create
