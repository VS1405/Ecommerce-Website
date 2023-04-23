import React from 'react'
import { Button } from 'react-bootstrap'

const HeaderCartButton = (props) => {
  return (
    <>
      <Button variant="outline-primary" onClick={props.onClicked}>Cart</Button>
    </>
  )
}

export default HeaderCartButton
