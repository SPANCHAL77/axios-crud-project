import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const[data, setData]=useState([]);

function getData(){
    axios.get("https://63477fdd0484786c6e819a6c.mockapi.io/beeceptor/crud-prac")
    .then((res)=>{
        console.log(res);
        setData(res.data);
    })
}

useEffect(()=>{
    getData();
},[])

function handleDelet(id){
    axios.delete(`https://63477fdd0484786c6e819a6c.mockapi.io/beeceptor/crud-prac/${id}`)
    .then(()=>{
        getData();
    })
}

const setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
}


  return(
    <div>
        <h1>Read Operation</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  { data.map((eachData)=>{
    return(
        <>
             <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>
        <Link to= '/update'>
        <button className='btn-success' onClick={()=>setToLocalStorage(eachData.id,
            eachData.name,
            eachData.email)}>edit</button>
        </Link>
        
    </td>
    <td>
        <Link to="/read">
        <button className='btn-danger' onClick={()=>handleDelet(eachData.id)}>delete</button>
        </Link>
        
      </td>
    </tr>
    
  </tbody>
        </>
    )
  })
    
}
</table>
    </div>
  )
}

export default Read
