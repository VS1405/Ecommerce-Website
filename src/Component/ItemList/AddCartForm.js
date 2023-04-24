import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'

const AddCartForm = (props) => {

    
    const submitFormHandler =(event)=>{
        event.preventDefault()
        const amountNumber = +('1')
        props.onAddCart(amountNumber)
    }
    return (
        <form onSubmit={submitFormHandler}>
            <Button className='outline' style={{ marginLeft: '2rem' }}
                type='submit'>
                + Add
            </Button>
        </form>
    )
}

export default AddCartForm
