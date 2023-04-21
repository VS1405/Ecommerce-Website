import React from 'react';
import { Container, Card, Row, Col, CardGroup } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import CardHeader from 'react-bootstrap/esm/CardHeader';

const List = (props) => {
    return (
        <>
            <div >
                <Container style={{ width: '400px' }}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    <Image src={props.image} alt='Color Image'/>
                                
                                <div className='input-group mt-4'>
                                    <div className='input-group-text bg-white'>${props.price}</div>  
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

export default List
