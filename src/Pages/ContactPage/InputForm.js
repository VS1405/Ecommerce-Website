import React, { useRef } from 'react'
import classes from './InputForm.module.css'

const InputForm = (props) => {
    const NameRef = useRef('')
    const EmailRef = useRef('')
    const PhoneRef = useRef('')
    const submitHandler = (e) => {
        e.preventDefault();
        const Customers = {
            id: Math.random(),
            Name: NameRef.current.value,
            Email: EmailRef.current.value,
            PhoneNumber: PhoneRef.current.value
        }
        props.onAdd(Customers)
        NameRef.current.value = ''
        EmailRef.current.value = ''
        PhoneRef.current.value = ''
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' placeholder='Enter Name' ref={NameRef} />
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input id='name' type='email' placeholder='Enter email address' ref={EmailRef} />
                </div>
                <div>
                    <label htmlFor='name'>Phone No.</label>
                    <input id='name' type='number' placeholder='Enter Phone Number' ref={PhoneRef} />
                </div>
                <div className={classes.button}>
                    <button type='submit' >Submit</button>
                </div>
            </div>
        </form>
    )
}

export default InputForm
