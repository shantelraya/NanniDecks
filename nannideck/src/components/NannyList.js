import './NannyList.css';
import React, {useEffect, useState} from "react";

function NannyList() {
  const [nannies, setNannies] = useState([])
  
  useEffect(() =>{
      fetch("https://nanniedeck.herokuapp.com/nannies")
	  .then((res)=>res.json())
	  .then((nannies)=>{
		console.log(nannies)
		setNannies(nannies)
	  })
  },[])

  return (
    <div className="Nanny-list">
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Residence</th>
        </tr>
        {nannies.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.fullName}</td>
              <td>{val.gender}</td>
              <td>{val.residence}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default NannyList;
