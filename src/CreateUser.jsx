import React from 'react'
import { useFormik } from "formik"
import axios from "axios";

function CreateUser() {
    
    const formik=useFormik({
        initialValues:{
            name:"",
      position:"",
      office:"",
      age:"",
      Startdate:"",
      salary:""
        },
        validate:(values)=>{
            let errors={};
            if(values.name ==="" && values.name.length<5){
              errors.name="please enter your name"
            }
            if(values.position ==="" && values.position.length<5){
              errors.position="please enter your position"
            }
            if(values.office ==="" && values.office.length<5){
              errors.office="please enter your office"
            }
            if(values.age ==="" && values.age.length<5){
              errors.age="please enter your age"
            }
            
            if(values.salary ==="" && values.salary.length<5){
              errors.salary="please enter your salary"
            }
              
            return errors
        },
        onSubmit:async(values)=>{
            let user=await axios.post("https://640d98e71a18a5db837a6f46.mockapi.io/users",values)
 alert("user is created")
      }
    })
    
  return (
   <div className="container">
    <form onSubmit={formik.handleSubmit}>
    <div className="row">
        <div className="col-lg-5">
            <div className="row">
                <label>name:</label>
                <input className='form-control' type={"text"} values={formik.values.name}
                onChange={formik.handleChange}
                name="name"/>
                <span style={{color:"red"}}>{formik.errors.name}</span>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="row">
                <label>position:</label>
                <input className='form-control' type={"text"}  values={formik.values.position}
                 onChange={formik.handleChange}
                 name="position"/>
                 <span style={{color:"red"}}>{formik.errors.position}</span>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="row">
                <label>office:</label>
                <input className='form-control' type={"text"}  name="office" values={formik.values.office} onChange={formik.handleChange}/>
                <span style={{color:"red"}}>{formik.errors.office}</span>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="row">
                <label>age:</label>
                <input className='form-control' type={"text"} name="age"  values={formik.values.age}  onChange={formik.handleChange}/>
                <span style={{color:"red"}}>{formik.errors.age}</span>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="row">
                <label>start-date:</label>
                <input className='form-control' type={"text"}
                 values={formik.values.Startdate}  name="startdate" onChange={formik.handleChange}/>
           <span style={{color:"red"}}>{formik.errors.Startdate}</span>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="row">
                <label>salary:</label>
                <input className='form-control' type={"text"}  name="salary" values={formik.values.salary} onChange={formik.handleChange}/>
                <span style={{color:"red"}}>{formik.errors.salary}</span>
            </div>
        </div>
        <div className="col-lg-5">
          <div className="row">
            
            <input className="btn btn-primary mt-2" type={"submit"} value="submit" 
          disabled={!formik.isValid} />
           
          </div>
        </div>
        
    </div>
    </form>
   </div>
  )
}

export default CreateUser