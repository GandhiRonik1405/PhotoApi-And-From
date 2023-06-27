import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Form() {
  const [userRegistration, setuserRegistration] = useState({
    userName: "",
    Birthday: "",
    Email: "",
    MobNum: "",
    InstaAccount: "",
    InstaPassword: ""


  });

const [Recorad, setRecorad] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserRegistration({ ...userRegistration, [name]: value })

  }

  const handlesubmit = (e) => {
    e.preventDefault();



    const newRecoard={...userRegistration,id:new Date().getTime().toString()}
    console.log(Recorad);
    setRecorad([ ...Recorad,newRecoard])
    console.log(Recorad);
    
    setuserRegistration({
    userName: "",
    Birthday: "",
    Email: "",
    MobNum: "",
    InstaAccount: "",
    InstaPassword: ""
    });
  }



  return (
    <div className="containeer">
            <Link to="/">PhotoApi</Link>

      <form action="" onSubmit={handlesubmit} >
        <div >
          <label htmlFor="UserName">UserName:</label>
          <input type="text"
            value={userRegistration.userName}
            onChange={handleInput}
            name="userName" id="UserName"
            placeholder="UserName"></input>
        </div>


        <div >
          <label htmlFor="Birthday">Birthday:</label>
          <input type="Date"
            value={userRegistration.Birthday}
            onChange={handleInput}
            name="Birthday" id="Birthday"
            placeholder="Birthday"></input>
        </div>


        <div>
          <label htmlFor="Email">Email:</label>
          <input type="Email"
            value={userRegistration.Email}
            onChange={handleInput}
            name="Email" id="Email"
            placeholder="Email"></input>

        </div>

        <div>
          <label htmlFor="MobNum"> MobNum: </label>
          <input type="tel"
            value={userRegistration.MobNum}
            onChange={handleInput}
            name="MobNum" id="MobNum"
            placeholder="MobNum"></input>
        </div>


        <div>
          <label htmlFor="InstaAccount"> InstaAccount: </label>
          <input type="Account"
            value={userRegistration.InstaAccount}
            onChange={handleInput}
            name="InstaAccount" id="InstaAccount"
            placeholder="InstaAccount"></input>
        </div>


        <div>
          <label htmlFor="InstaPassword"> InstaPassword: </label>
          <input type="Password"
            value={userRegistration.InstaPassword}
            onChange={handleInput}
            name="InstaPassword" id="InstaPassword"
            placeholder="InstaPassword"></input>

        </div>
        <button type="submit">Registration</button>
        </form>
      {
        Recorad.map((curElement)=>{
          return(
            <div className="showDataStyle">
            <p>{curElement.userName}</p>
            <p>{curElement.Birthday}</p>
            <p>{curElement.Email}</p>
            <p>{curElement.InstaAccount}</p>
            <p>{curElement.InstaPassword}</p>
            <p>{curElement.MobNum}</p>


            </div>
        )
      })
    }
      

    </div>

  )
}

export default Form
