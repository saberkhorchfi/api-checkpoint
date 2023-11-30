import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
    const [users,setUsers]=useState()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>setUsers(response.data))
    },[])
  return (
    <div>
      {users&&users.map(e=><h1>{e.name}</h1>)}
    </div>
  )
}

export default UserList