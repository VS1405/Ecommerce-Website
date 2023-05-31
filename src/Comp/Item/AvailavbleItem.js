import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import ListShow from './ListShow';
import classes from './Item.module.css'
import CartContext from '../../Store/Cart-context';
import Footer from '../../Pages/UIPage/Footer';

const productsArr = [
  {
    id: "01",
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: "02",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: "03",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: "04",
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }]


const AvailableItem = () => {


  const listOdProduct = productsArr.map(item =>
    <ListShow
      id={item.id}
      key={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    />
  )

  return (
    <Fragment>
      <Container className={classes.container} id='Home'>
        <Row xs={1} md={2} className="g-4 mt-5">
          {listOdProduct}
        </Row>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default AvailableItem;
