import React, { Fragment } from 'react'
import classes from './ProductPage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from '@tippyjs/react'
import LoginTippy from './MoreTippy/LoginTippy';
import MoreTippy from './MoreTippy/MoreTippy';
import ProductSubheder from './ProductContent/ProductSubheader'
import StarsIcon from '@mui/icons-material/Stars';
import AddIcon from '@mui/icons-material/Add';

const ProductPage = () => {
  return (
    <Fragment>
      <header>
        <div className={classes.Header}>
          <div className={classes.first}>
            <img
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart logo"
            />
            <div className={classes['first-1']}>
              <span style={{
                fontSize: '11px',
                fontFamily: 'italic',
                color: 'white'
              }}>Explore</span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'italic',
                color: '#f9e107'
              }}>Plus</span>
              <span>
                <img
                  width="10"
                  src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </span>
            </div>

          </div>
          <div className={classes.second}>
            <input type='text' id='search' placeholder='Searching for more Products' />
            <span className={classes.serIcon}><SearchIcon /></span>
          </div>
          <div className={classes.third}>
            <Tippy
              theme='light'
              // visible={true} 
              // content={'hello'}
              content={<LoginTippy></LoginTippy>}
              interactive={true}
            >
              <button>Login</button>
            </Tippy>
          </div>
          <div className={classes.fifth}>
            <span>Become a Seller</span>
          </div>
          <div className={classes.fourth}>
            <Tippy
              theme='light'
              // visible={true}
              interactive={true}
              content={<MoreTippy></MoreTippy>}
            >
              <span>More</span>
            </Tippy>
            <span>
              <ExpandMoreIcon />
            </span>

          </div>
          <div className={classes.six}>
            <span>
              <ShoppingCartIcon />
            </span>
            <span className={classes.cart}>cart</span>
          </div>

        </div>
      </header>

      {/* Sub-header */}
      <section className={classes['sub-header']}>
        <ProductSubheder />
      </section>
      {/* Section-3  Item-details */}
      <body className={classes.body}>
        <section className={classes['section-3']}>
        <div className={classes['section-3-item']}>
          <div className={classes['section-3-itemDetails']}>
            <div className={classes['section-3-Item-Img']}>
              <img src='https://rukminim1.flixcart.com/image/400/400/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70' alt='Black-shirt' />
              <img src='https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70' alt='Black-shirt' />
              <img src='https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zvaxuzcsg.jpeg?q=70' alt='Black-shirt' />
              <img src='https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zak3bnmpp.jpeg?q=70' alt='Black-shirt' />
              <img src='https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.jpeg?q=70' alt='Black-shirt' />
              <img src='https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zacvzcywn.jpeg?q=70' alt='Black-shirt' />
            </div>
            <div className={classes['section-3-Item-ImgZoom']}>
              <img src='https://rukminim1.flixcart.com/image/128/128/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70' alt='Black-shirt' />
            </div>
          </div>
          <div className={classes['section-3-btn']}>
            <button className={classes['Cart-btn']}>Add TO Cart</button>
            <button className={classes['Buy-btn']}>Buy Now</button>
          </div>
        </div>
        <div className={classes['section-3-Responce']}>
        </div>
        </section>
        {/* section-4 frquently bouught */}
        <section className={classes['section-4-bought']}>
          <header>
            <h4>Frequently bought together</h4>
          </header>
          <div className={classes['selectedItem-price']}>
            <div className={classes['selectedCart-list']}>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70'
                  alt='black-shirt' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <span>+</span>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70'
                  alt='black-shirt' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <span>+</span>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70'
                  alt='black-shirt' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
            </div>
            <div className={classes['total-Price']}>
              <p>Primary Summary</p>
              <h4>Main Productselected <span>399</span></h4>
              <h4>2 Addonsselected<span>589</span></h4>
              <h4>Total</h4>
              <button className={classes['Cart-btn']}>Add 3 item to Cart</button>
            </div>
          </div>
        </section>
        {/* section-5 Icons */}
        <section className={classes['section-5']}>
          <div className={classes['section-5-Item-1']}>
            <StarsIcon sx={{ color: '#ff9f00', fontSize: 50 }} />
            <div className={classes.IconTitle}>
              <h4>Trending Styles</h4>
              <p>from Top Brands</p>
            </div>
          </div>
          <div className={classes['section-5-Item-1']}>
            <StarsIcon sx={{ color: '#ff9f00', fontSize: 50 }} />
            <div className={classes.IconTitle}>
              <h4>Trending Styles</h4>
              <p>from Top Brands</p>
            </div>
          </div>
          <div className={classes['section-5-Item-1']}>
            <StarsIcon sx={{ color: '#ff9f00', fontSize: 50 }} />
            <div className={classes.IconTitle}>
              <h4>Trending Styles</h4>
              <p>from Top Brands</p>
            </div>
          </div>
        </section>
        {/* section-5  You might be intrested account */}
        <section className={classes['section-6-Interest']}>
          <header>
            <h4>You might be interested in</h4>
          </header>
          <div className={classes['selected-price']}>
            <div className={classes['interested-list']}>
              <div className={classes['carts-Interested']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=90'
                  alt='black-shirt' />
                <div className={classes['interested-shop']}>
                  <h2>Men's Trousers</h2>
                  <p>Min. 50% off</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className={classes['carts-Interested']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/track-pant/v/c/r/5xl-tbljogj36-chbljogj34-tripr-original-imagmenpc9b2snhg.jpeg?q=90'
                  alt='black-shirt' />
                <div className={classes['interested-shop']}>
                  <h2>Men's Trousers</h2>
                  <p>Min. 50% off</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className={classes['carts-Interested']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/q/h/z/7-mrj1852-7-aadi-black-original-imagdwgudezandfs-bb.jpeg?q=90'
                  alt='black-shirt' />
                <div className={classes['interested-shop']}>
                  <h2>Men's Trousers</h2>
                  <p>Min. 50% off</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className={classes['carts-Interested']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/c/k/k/gm1251-43-good-minar-black-original-imaft34ej4zx2z63-bb.jpeg?q=90'
                  alt='black-shirt' />
                <div className={classes['interested-shop']}>
                  <h2>Men's Trousers</h2>
                  <p>Min. 50% off</p>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={classes['section-7-similar']}>
          <header>
            <h4>Similar product</h4>
          </header>
          <div className={classes['selectedItem-price']}>
            <div className={classes['similar-product-list']}>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/sweatshirt/y/u/6/s-tblhdfullsweat-lion-tripr-original-imagh8g26yx7tebz.jpeg?q=70'
                  alt='black-shirt-1' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/k62i5jk0/sweatshirt/w/c/e/l-10161517-johnny-bravo-by-kook-n-keech-original-imafzhjeeskcdgg3.jpeg?q=70'
                  alt='black-shirt-2' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/sweatshirt/n/f/t/xxl-twtrnfulsweat-st45-tripr-original-imaghxhhhtbnftvf.jpeg?q=70'
                  alt='white-shirt-3' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/shopsy-sweatshirt/n/t/3/xl-fc6134-fastcolors-men-original-imagh3s6wqhznywh.jpeg?q=70'
                  alt='black-shirt-4' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/shopsy-sweatshirt/s/q/k/l-fc6049-fastcolors-men-original-imagh6fx2xqyyzqh.jpeg?q=70'
                  alt='black-shirt-5' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/sweatshirt/h/s/w/m-fc6083-1-fastcolors-original-imaggw9ncytquasv.jpeg?q=70'
                  alt='blue-shirt-6' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/kx0q4y80/sweatshirt/t/d/p/m-face-mask-fabryka-original-imag9kfg6q2csmhz.jpeg?q=70'
                  alt='blue-shirt-7' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/sweatshirt/w/h/d/xxl-tgyblhdfulsweat-believer-tripr-original-imagkycba8gubxjr.jpeg?q=70'
                  alt='blue-shirt-7' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
              <div className={classes['selectedCart']}>
                <img src='https://rukminim1.flixcart.com/image/400/400/xif0q/sweatshirt/g/m/n/xxl-tmrsweatskulbeard1-tripr-original-imagh7hhg8fwzg3e.jpeg?q=70'
                  alt='blue-shirt-6' />
                <div className={classes['selectedPrice']}>
                  <p>Smartees</p>
                  <p>Men Full Sleeve ...</p>
                  <p>₹399₹1,49973% off</p>
                  <p>SizeM, L, XL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </body>
    </Fragment>
  )
}

export default ProductPage
