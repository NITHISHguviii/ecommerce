import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from "react";
import { useEffect } from "react"
import axios from "axios"


function Users() {
    const [users,setusers]=useState([])
    
             
    useEffect(()=>{
       loaddata();
   },[]);
   let loaddata= async()=>{
        let users=await axios.get("https://640d98e71a18a5db837a6f46.mockapi.io/users"
        );
        setusers(users.data)

   }
   let userdelete=async(id)=>{
    try{
        let ask=window.confirm(
            "are you want to delete this data"
        );
        if(ask){

            await axios.delete(`https://640d98e71a18a5db837a6f46.mockapi.io/users/${id}`)
     loaddata();
        }
    
        
    }catch(error){

    }
 }
    
  return (
    <div class="container-fluid">

    
<div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">STUDENT USER</h1>
        <Link to="/portal/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i>Create user</Link>
     
    </div>

    
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>index</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>action
                            </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>index</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>
                    <tbody>
                       {
                        users.map((user,index)=>{

                           return <tr>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.office}</td>
                            <td>{user.age}</td>
                            <td>{user.startdate}</td>
                            <td>${user.salary}</td>
                            <td><Link to={`/portal/users/${user.id}`} type="button" class="btn btn-primary mr-2">view</Link>
                            <Link  to={`/portal/user/edit/${user.id}`}type="button" class="btn btn-secondary mr-2">edit</Link>
                            <button type="button" onClick={()=>userdelete(user.id)} class="btn btn-success mr-2">delete</button></td>
                            </tr>
                       
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
  )
}

export default Users