import React, { useState } from 'react'

//The login page to login in the website not working we can just add email and password and submit but we are not storing our data anywhere as of now

const Login = (props) => {
    const [email, setemail] = useState(''); // a state variable to store the email and set the email to the input value using useState
    const [pass, setpass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the data that the user inputs from loosing while refreshing the page 
        setemail(''); //setting email empty after submission (clearing the input form)
        setpass('');
    }

    return (
        <>
            <div className='log-form d-flex flex-column m-0 '>
                <form className='login-form m-5' onSubmit={handleSubmit}>
                    <div className="login-page my-3 p-5">
                        <h3 className='text-grey'> Login</h3>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className='py-2'>Email address</label>
                            <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group py-4">
                            <label htmlFor="exampleInputPassword1" className="py-2">Password</label>
                            <input value={pass} onChange={(e) => { setpass(e.target.value) }} type="password" className="form-control " id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className=" pt-3 mb-0 text-center">
                            <button type="submit" className="btn btn-dark px-4">Log In</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='text-center text-dark mb-3 btn' onClick={() => props.formSwitch('register')}>
                            Don't have an account? Register here.
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Login
