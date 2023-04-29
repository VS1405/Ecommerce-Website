// This is a list of Album from store link

import React, {useContext} from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import AddCartForm from './AddingItem/AddCartForm';
import CartContext from '../../Store/Cart-context';

const ListShow = (props) => {
    
    const cartCtx = useContext(CartContext)

    const addCartHandler = (amount) => {
      cartCtx.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        amount: amount,
        imageUrl: props.imageUrl
      })
      console.log(amount)
      console.log('Item Added to cart')
    }
    
    return (
        <>
            <div >
                <Container style={{ width: '400px' }}>
                    <Col key={props.id}>
                    
                        <Card style={{borderStyle: 'none'}}>
                            <Card.Body >
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text >
                                    <div >
                                        <Image src={props.imageUrl} alt='Color Image' />
                                    </div>
                                    <div className=' mt-4 d-flex justify-content-between'>
                                        <span className='bg-white' style={{color:  'black'}}>${props.price}</span>
                                        <AddCartForm onAddCart={addCartHandler}/>
                                    </div>

                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default ListShow
