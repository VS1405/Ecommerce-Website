// This is a list of Album from store link

import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Container, Card, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import AddCartForm from './AddingItem/AddCartForm';
import CartContext from '../../Store/Cart-context';
import axios from 'axios';


const ListShow = (props) => {

    const cartCtx = useContext(CartContext);

    const [items, setItems] = useState([]);

    useEffect( () => {
      const fetchItems = async () => {
        try {
          const response = await axios.get('https://crudcrud.com/api/42e9545f6c4b4f36a17aeb75c7f93fbb/cartItems');
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };
  
      fetchItems();
    }, []);

    const addCartHandler = async (amount) => {
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            amount: amount,
            imageUrl: props.imageUrl
        });
        // console.log(amount)
        // console.log('Item Added to cart')
        try {
            const response = await axios.post('https://crudcrud.com/api/42e9545f6c4b4f36a17aeb75c7f93fbb/cartItems', {
              id: props.id,
              title: props.title,
              price: props.price,
              amount: amount,
              imageUrl: props.imageUrl
            });
            console.log('Item added to cart:', response.data);
          } catch (error) {
            console.error('Error adding item to cart:', error);
            if (error.response) {
              console.log('Response data:', error.response.data);
              console.log('Response status:', error.response.status);
              console.log('Response headers:', error.response.headers);
            }
          }

        }

    return (
        <Fragment>
            <div >
                <Container style={{ width: '400px' }}>
                    <Col key={props.id}>

                        <Card style={{ borderStyle: 'none' }}>
                            <Card.Body >
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text >
                                    <div >
                                        <Image src={props.imageUrl} alt='Color Image' />
                                    </div>
                                    <div className=' mt-4 d-flex justify-content-between'>
                                        <span className='bg-white' style={{ color: 'black' }}>${props.price}</span>
                                        <AddCartForm onAddCart={addCartHandler} />
                                    </div>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                </Container>
            </div>
        </Fragment>
    )
}

export default ListShow
