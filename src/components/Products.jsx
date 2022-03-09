import React from 'react'
import { Product } from "./Product"
import { AppContext } from "../context/AppContext"
import "../styles/components/Products.css"


function Products (){
  const { state, addToCart } = React.useContext(AppContext)
  const { products } = state

  const handleAddCart = products => () => {
    addToCart(products)
  }
  return(
    <div className='Products'>
      <div className='Products-items'>
        {products.map(product =>( 
          <Product key={product.id} product={product} handleAddCart={handleAddCart} />
        ))}
      </div>

    </div>
  )
}

export { Products }