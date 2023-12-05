import React, { useState } from 'react'
import Validate from './Validate';
const Register = (props) => {

    const inputValues = [{
        name: "name",
        id: '0',
        label: "Full Name",
        type: "text",
        placeholder: "Enter full name"
    }, {
        id: '1',
        name: "email",
        label: "Email",
        type: "text",
        placeholder: "Enter email"
    }, {
        id: '2',
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter password"
    }, {
        id: '3',
        name: "confirmpassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Enter confirm password"
    }]

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values))
        if(errors){
            const newEntry = {
                name: values.name,
                email: values.email,
                password: values.password
            }
            setAllentry([...allentry,newEntry])
            
        }
        console.log(errors)
    }
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const [allentry, setAllentry] = useState([]);
    return (

        <>
            <div className='log-form d-flex flex-column m-0 '>
                <form className='login-form m-5' onSubmit={handleSubmit}>
                    <div className="login-page my-3 p-5">
                        <h3 className='text-grey'> Register</h3>
                        <div className="form-group py-3">
                            {
                                inputValues.map((element) => {
                                    return (
                                        <div key={element.id} >
                                            <label className='py-2 my-1'>{element.label}</label>
                                            <input value={values[element.name]} onChange={handleInput} name={element.name} type={element.type} className="form-control" placeholder={element.placeholder} />
                                            {errors && <small style={{ color: "red" }}>{errors[element.name]}</small>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className=" pt-5 mb-0 text-center ">
                            <button type="submit" className="btn btn-dark px-4">Register</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => props.formSwitch('login')} className='text-center text-dark mb-3 btn'>
                            Already have an account? Log in here.
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Register
