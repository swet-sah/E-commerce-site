import React, { useState } from 'react'
import Login from './Login'
import Register from './Register';

const Loginpage = () => {
    const [currform,setform] = useState('login');
    const toggleform = (formname)=>{
        setform(formname);
    }
  return (
   <>
   <div>
    {
        currform == 'login'?<Login formSwitch = {toggleform}/>:<Register formSwitch={toggleform}/>
    }
   </div>
   </>
  )
}

export default Loginpage
