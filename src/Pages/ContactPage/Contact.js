import React, { Fragment } from 'react'
import InputForm from './InputForm'
import HeaderPage from '../UIPage/HeaderPage'

const Contact = () => {
   
    const addHandler = async (info) => {
        
        const response = await fetch('https://ecommerce-proj-http-default-rtdb.firebaseio.com/customer.json', {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            'Content-type': 'application/json'
          }
        })
        const data = await response.json()
        // console.log(info);
    
      }
    return (
        <Fragment>
            <div>
                <div>
                    <HeaderPage />
                </div>
                <div>
                    <InputForm onAdd={addHandler} />
                </div>
            </div>

        </Fragment>
    )
}

export default Contact
