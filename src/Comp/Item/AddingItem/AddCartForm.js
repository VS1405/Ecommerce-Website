import React from 'react'
import classes from './AddCartForm.module.css'



const AddCartForm = (props) => {

    
    const submitFormHandler =(event)=>{
        event.preventDefault();
        const amountNumber = +('1')
        
        props.onAddCart(amountNumber);

    }
    return (
        <form onSubmit={submitFormHandler}>
            <button className={classes.btn} type='submit'>
                + Add
            </button>
        </form>
    )
}

export default AddCartForm
