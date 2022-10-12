import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [residence, setResidence] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const form = {fullName,gender,residence}
  
    fetch('http://localhost:3000/nannies',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    .then((res) => res.json())
    .then(()=>{
      setFullName('')
      setGender('')
      setResidence('')
  
    })

  }
  return (
    <div>
      <p id="form-p">
        This page allows you to apply for a nanny position :()
      </p>
      <div>
        <form className="form-review" onSubmit={handleSubmit} >
          <label htmlFor="nanny-name">Name</label>
          <br />
          <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} required placeholder="Enter fullname"></input>
          <br />
          <br />
          <label htmlFor="gender">Gender</label> <br />
          <input type="text" value={gender}  onChange={(e)=>setGender(e.target.value)} placeholder="Male or Female" required></input>
          <br />
          <br />
          <label htmlFor="residence">Residential Address</label>
          <br />
          <br />
         <textarea rows = "5" cols = "50"  value={residence} onChange={(e)=>setResidence(e.target.value)} required>
            Enter residential here...
         </textarea> <br />
         <br/>
          <button>Submit Info</button> 
        
         </form>
  
      </div>
    </div>
  );
}

export default Form;